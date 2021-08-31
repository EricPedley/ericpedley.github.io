/**
 * Returns object like this:
 * {
 *  title: string,
 *  descriptionText: string,
 *  backgroundImageURL: string,
 *  demoURL: string
 * }
 * @param {*} repoLink 
 */
async function getProjectDetails(repoLink,branch) {
    const [,username,reponame] = new RegExp(/https:\/\/.*?\/(.*)\/(.*)/).exec(repoLink);//first item in returned list is the full match
    
    const readmeText = await fetch(`https://raw.githubusercontent.com/${username}/${reponame}/${branch}/README.md`).then(r=>r.text());
    try {
        const title = new RegExp(/# (.*)/).exec(readmeText)[1]//first item in returned list is the full match so we ignore it
        const descriptionText = new RegExp(/Description:?\n(.*)/).exec(readmeText)[1];
        const backgroundImageURL = new RegExp(/project screenshot]\((.*?)\)/).exec(readmeText)?.[1];
        const demoURL = new RegExp(/Demo Link]\((.*)\)/).exec(readmeText)?.[1];//optional chaining operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
        return {
            title:title,
            descriptionText:descriptionText,
            backgroundImageURL:backgroundImageURL,
            demoURL:demoURL
        }
    } catch(error) {
        console.log(`failed regex match on project README for ${username}/${reponame}`);
        console.error(error);
        return {
            title:`Failed to load ${username}/${reponame}`,
            descriptionText:`Error message: ${error}`,
            backgroundImageURL:"https://steamuserimages-a.akamaihd.net/ugc/914659215888655432/82DCA20555DE13B0F76E9C833110411BC60DEB3F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            demoURL:undefined
        };
    }

}

class Card extends HTMLElement {
    constructor(repoURL,defaultBranch) {
        super();

        const background = document.createElement("div");
        const titleContent = document.createElement("h1");
        const descriptionContent = document.createElement("div");

        const sourceURL=repoURL||this.getAttribute("repo");
        const branch=defaultBranch||this.getAttribute("branch");
        //console.log(`running constructor for ${sourceURL}`);
        sourceURL&&getProjectDetails(sourceURL,branch).then(({title,descriptionText,backgroundImageURL,demoURL})=>{
            titleContent.innerHTML = title;
            descriptionContent.innerHTML = descriptionText;
            background.style.backgroundImage = backgroundImageURL? `url("${backgroundImageURL}")`:'url("images/default_image.png")';
            descriptionContent.innerHTML += `
            <br><br><a target="_blank" href="${sourceURL}">
                <img class="linkicon" src="images/github-logo.png">Source Code
            </a>`;
            if(demoURL)
                descriptionContent.innerHTML+= `
                <br><a target="_blank" href="${demoURL}"><img class="linkicon" src="images/external.png">
                    Demo
                </a>`;
            this.addEventListener("mouseover", () => {
                background.style.filter = "blur(2px) brightness(var(--card-dim))";
    
                titleContent.style.opacity = "0%";
                titleContent.style.width = "0";
                titleContent.style.height = "0";
    
                descriptionContent.style.opacity = "100%";
                descriptionContent.style.width = "auto";
                descriptionContent.style.height = "auto";
            });
            this.addEventListener("mouseout", () => {
                background.style.filter = "blur(2px) brightness(var(--card-bright))";
    
                titleContent.style.opacity = "100%";
                titleContent.style.width = "auto";
                titleContent.style.height = "auto";
    
                descriptionContent.style.opacity = "0%";
                descriptionContent.style.width = "0";
                descriptionContent.style.height = "0";
            });
        });

        this.className = "card";
        background.className = "card-background";
        titleContent.className = "card-content";
        descriptionContent.className = "card-content"
        titleContent.innerHTML = "Loading...";


        //titleContent.style.fontSize = "300%";

        descriptionContent.style.width = 0;
        descriptionContent.style.opacity = 0;

        this.appendChild(background);
        this.appendChild(titleContent);
        this.appendChild(descriptionContent);

    }
}

customElements.define("project-card", Card);
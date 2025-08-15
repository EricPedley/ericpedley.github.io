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
    let readmeText;
    if(repoLink.endsWith(".md")) {
        readmeText = await fetch(repoLink).then(r=>r.text());
    } else {
        const [,username,reponame] = new RegExp(/https:\/\/.*?\/(.*)\/(.*)/).exec(repoLink);//first item in returned list is the full match
        readmeText = await fetch(`https://raw.githubusercontent.com/${username}/${reponame}/${branch}/README.md`).then(r=>r.text());
    }
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

        const sourceURL=repoURL||this.getAttribute("repo");
        const branch=defaultBranch||this.getAttribute("branch");

        // Create card structure
        const card = document.createElement("div");
        card.className = "card";

        const thumbnail = document.createElement("div");
        thumbnail.className = "card-thumbnail";

        const info = document.createElement("div");
        info.className = "card-info";

        const titleEl = document.createElement("h2");
        titleEl.className = "card-title";
        titleEl.textContent = "Loading...";

        const descriptionEl = document.createElement("div");
        descriptionEl.className = "card-description";

        info.appendChild(titleEl);
        info.appendChild(descriptionEl);

        card.appendChild(thumbnail);
        card.appendChild(info);

        this.appendChild(card);

        if (sourceURL) {
            getProjectDetails(sourceURL,branch).then(({title,descriptionText,backgroundImageURL,demoURL})=>{
                titleEl.textContent = title;
                descriptionEl.innerHTML = descriptionText;
                descriptionEl.innerHTML += `
                <br><br><a target="_blank" href="${sourceURL}">
                    <img alt="github logo" class="linkicon" src="images/github-logo.png">Source Code
                </a>`;
                if(demoURL)
                    descriptionEl.innerHTML+= `
                    <a target="_blank" href="${demoURL}"><img alt="external link icon" class="linkicon" src="images/external.png">
                        Demo
                    </a>`;
                thumbnail.style.backgroundImage = backgroundImageURL? `url("${backgroundImageURL}")`:'url("images/default_image.png")';
            });
        }
    }
}

customElements.define("project-card", Card);

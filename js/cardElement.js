/**
 * Returns object like this:
 * {
 *  title: string,
 *  descriptionText: string,
 *  backgroundImageURL: string,
 *  demoURL: string
 * }
 * @param {string} repoLink 
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
        this.url = repoURL;

        //physics stuff
        function randomDirection() {return Math.round(Math.random())*2-1;}//returns either 1 or -1
        this.x=0;
        this.velX=randomDirection()*3;
        this.y=0;
        this.velY=randomDirection()*3; 


        //DOM stuff
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
    update() {
        if(!this.startX) {
            const rect = this.getBoundingClientRect();
            this.startX=rect.x;
            this.startY=rect.y;
        }
        const boundingX = document.body.offsetWidth;
        const boundingY = document.body.offsetHeight;
        if(this.x+this.startX+this.velX<0) {
            this.velX=Math.abs(this.velX);
        } else if(this.x+this.startX+this.offsetWidth+this.velX>boundingX) {
            this.velX=-Math.abs(this.velX);
        } else {
            if(this.xCollision) {
                this.xCollision=false;
                this.velX=-this.velX;
            }
        }
        this.x+=this.velX;
        if(this.y+this.startY+this.velY<0||this.y+this.startY+this.offsetHeight+this.velY>boundingY) {
            this.velY=-this.velY;
        } else {
            this.y+=this.velY;
        }
        this.style.left=`${this.x}px`;
        this.style.top=`${this.y}px`;
    }
    collide(other) {
        const newOtherX = other.x+other.startX+other.velX;
        const newOtherY = other.y+other.startY+other.velY;
        const hasVerticalOverlap = this.y+this.startY<newOtherY+other.offsetHeight&&this.y+this.startY+this.offsetHeight>newOtherY;
        if(this.x+this.startX<newOtherX+other.offsetWidth
            ||this.x+this.startX+this.offsetWidth>newOtherX
            &&hasVerticalOverlap) {//if horizontal collision
                if(this.url=="https://github.com/EricPedley/deanza-course-notifier")
                    console.log(`collision with ${other.url}, ${this.startX+this.x},${this.startY+this.y}|${newOtherX},${newOtherY}`);
                this.velX=-this.velX;
                other.xCollision=true;
        }
    }
}

customElements.define("project-card", Card);
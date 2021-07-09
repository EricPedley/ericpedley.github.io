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
function getProjectDetails(repoLink) {
    //https://raw.githubusercontent.com/EricPedley/spotify-yt-react/master/README.md
    //https://github.com/EricPedley/spotify-yt-react
    //https://api.github.com/users/#{username}/repos
    //Async shit:
    //    contents = Net::HTTP.get_response(URI("https://raw.githubusercontent.com/#{username}/#{name}/#{repo["default_branch"]}/README.md"))
    // const username = new RegExp(/https:\/\/.*\/(.*)\//).exec(repoLink)[1]
    // const defaultBranch = await fetch(`https://api.github.com/users/${username}/repos`)["default_branch"]
    // console.log(defaultBranch)
    // const readmeLink  = `https://raw.githubusercontent.com/${new RegExp(/https:\/\/.*?\/(.*)/).exec(repoLink)[1]}`
    // console.log(readmeLink)
    //placeholder:
    return {
        title:"Spotify to Youtube Playlist Converter",
        descriptionText:"This is an example of what kind of space the description will take up and it might be longer than this placeholder text.",
        backgroundImageURL:"https://user-images.githubusercontent.com/48658337/125008966-7a434d00-e018-11eb-91a2-2d8c621cd96c.jpg",
        demoURL:"https://ericpedley.github.io/spotify-yt-react/"
    }
}
console.log(getProjectDetails("https://github.com/EricPedley/spotify-yt-react"))

class Card extends HTMLElement {
    constructor() {
        super();
        const sourceURL=this.getAttribute("src");
        const {title,descriptionText,backgroundImageURL,demoURL} = getProjectDetails(sourceURL);

        const background = document.createElement("div");
        const titleContent = document.createElement("h1");
        const descriptionContent = document.createElement("div");
        this.className = "card"
        background.className = "card-background";
        titleContent.className = "card-content";
        descriptionContent.className = "card-content"

        background.style.backgroundImage = `url("${backgroundImageURL}")`;

        titleContent.style.fontSize = "300%";
        titleContent.innerHTML = title;

        descriptionContent.style.width = 0;
        descriptionContent.style.opacity = 0;
        descriptionContent.innerHTML = descriptionText;

        descriptionContent.innerHTML += `
        <br><br><a target="_blank" href="${sourceURL}">
            <img class="linkicon" src="images/github-logo.png">Source Code
        </a>`;
        if(demoURL)
        descriptionContent.innerHTML+= `
        <br><a target="_blank" href="${demoURL}"><img class="linkicon" src="images/heroku-logo.png">
            Demo
        </a>`;
        

        this.appendChild(background);
        this.appendChild(titleContent);
        this.appendChild(descriptionContent);

        this.addEventListener("mouseenter", () => {
            background.style.filter = "blur(2px) brightness(50%)";

            titleContent.style.opacity = "0%";
            titleContent.style.width = "0";

            descriptionContent.style.opacity = "100%";
            descriptionContent.style.width = "auto";
        });
        this.addEventListener("mouseleave", () => {
            background.style.filter = "blur(2px) brightness(70%)";

            titleContent.style.opacity = "100%";
            titleContent.style.width = "auto";

            descriptionContent.style.opacity = "0%";
            descriptionContent.style.width = "0";
        });
    }
}

customElements.define("project-card", Card);
class Card extends HTMLElement {
    constructor() {
        super();

        const background = document.createElement("div");
        const titleContent = document.createElement("h1");
        const descriptionContent = document.createElement("div");

        this.className="card"
        background.className="card-background";
        titleContent.className="card-content";
        descriptionContent.className="card-content"

        const backgroundImageURL="https://camo.githubusercontent.com/7102f579c4601c3086a103577db490dd344235c6fd2acffdc6ce1e44f04c929f/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7733475372485350394c65707643745730472f67697068792e676966";
        background.style.backgroundImage=`url("${backgroundImageURL}")`;

        titleContent.style.fontSize="300%";
        titleContent.innerHTML="This is the title"

        descriptionContent.style.width=0;
        descriptionContent.style.opacity=0;
        descriptionContent.innerHTML="This is where the description of the project is going to be and it will be pretty long like this."
        
        this.appendChild(background);
        this.appendChild(titleContent);
        this.appendChild(descriptionContent);1
        
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

customElements.define("project-card",Card);
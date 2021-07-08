const { description } = require("commander");

class Card extends HTMLElement {
    constructor() {
        super();
        const titleContent = document.createElement("div");
        const descriptionContent = document.createElement("div");
        const background = document.createElement("div");
        const contentStyle = {
            position: "relative",
            transition: "opacity 1s, width 0s 1s",
            overflow: "hidden"
        }
        for(const element in {titleContent,descriptionContent})
            Object.assign(element.style,contentStyle);

        const background = document.createElement("div");
        const backgroundImageURL;
        const backgroundStyle = {
            backgroundImage: `url("${backgroundImageURL}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            content: "",
            position: "absolute",
            width: "100%",
            height: "100%",
            filter: "blur(2px) brightness(70%)",
            transition: "filter 1s",
        }
        Object.assign(background.style,backgroundStyle);
        const cardStyle = {
            position: "relative",
            color: "#FFFFFF",
            font: "bold 42px sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            transition: "padding 0.5s, margin 0.5s",
            margin: "10px",
        }
        Object.assign(this.style,cardStyle);
        

    }
}
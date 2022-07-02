import Card from './cardElement'

async function addCards() {
    const user = "EricPedley"
    const repoList = [
        "https://github.com/EricPedley/spotify-yt-react",
        "https://github.com/EricPedley/kanyezone-bot-cpp",
        "https://github.com/EricPedley/posture-detector",
        "https://github.com/EricPedley/zotmeal-backend",
        "https://github.com/EricPedley/ibm-quantum-tracker",
        "https://github.com/EricPedley/opengl-projects",
        "https://github.com/EricPedley/Quick-Review",
        "https://github.com/EricPedley/audio-splicer",
        "https://github.com/EricPedley/Fantasy-XC-V2",
        "https://github.com/EricPedley/First-Unity-Project",
        "https://github.com/EricPedley/justcare",
        "https://github.com/EricPedley/animal-run-game",
        "https://github.com/EricPedley/deanza-course-notifier",
        "https://github.com/EricPedley/knife-guy-game",
        "https://github.com/EricPedley/DeepFinder",
        "https://github.com/EricPedley/ericpedley.github.io"
    ]
    const container = document.querySelector(".card-container");
    for(const repo of repoList) {
        container.appendChild(new Card(repo,'main'));
    }
    if (matchMedia('(hover: hover) and (pointer: fine)').matches)
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 15,
            speed: 400,
            reverse: true
        });
    
}


addCards();
if (matchMedia('(hover: hover) and (pointer: fine)').matches)
    VanillaTilt.init(document.querySelector(".profile-pic"), {
        max: 15,
        speed: 400,
        reverse: true
    });

// const username="EricPedley"
// fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(r=>r.json()).then(allUserRepos=> {
//     addCards(allUserRepos);
// })

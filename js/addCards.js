async function addCards() {
    const user = "EricPedley"
    const repoList = await fetch(`https://raw.githubusercontent.com/${user}/${user}.github.io/master/README.md`).then(res=>res.text()).then(rawText=>{
                                return rawText.substring(rawText.indexOf("https://github.com")).trim().split("\n- ");
                            })
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

// const customRepoList = [
//     "https://github.com/EricPedley/spotify-yt-react",
//      "https://github.com/EricPedley/kanyezone-bot-cpp",
//     "https://github.com/EricPedley/posture-detector",
//     "https://github.com/EricPedley/ibm-quantum-tracker",
//     "https://github.com/EricPedley/opengl-projects",
//     "https://github.com/EricPedley/audio-splicer",
//     "https://github.com/EricPedley/Fantasy-XC-V2",
//     "https://github.com/EricPedley/First-Unity-Project",
//     "https://github.com/EricPedley/justcare",
//     "https://github.com/EricPedley/animal-run-game",
//     "https://github.com/EricPedley/deanza-course-notifier",
//     "https://github.com/EricPedley/knife-guy-game",
//     "https://github.com/EricPedley/DeepFinder"
// ]




window.onload=()=> {
    addCards();
    if (matchMedia('(hover: hover) and (pointer: fine)').matches)
        VanillaTilt.init(document.querySelector(".profile-pic"), {
            max: 15,
            speed: 400,
            reverse: true
        });
}

// const username="EricPedley"
// fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(r=>r.json()).then(allUserRepos=> {
//     addCards(allUserRepos);
// })

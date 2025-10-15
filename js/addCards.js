async function addCards() {
    const user = "EricPedley"
    const repoList = [
        "/extra_projects/kscale.md",
        "/extra_projects/a2rl.md",
        "/extra_projects/uav_forge.md",
        // "https://github.com/EricPedley/so101",
        "https://github.com/UCI-Rocket-Project/rocket-tracker/",
        // "https://github.com/EricPedley/roomba_ws",
        // "https://github.com/EricPedley/erics_cameras",
        // "https://github.com/Cyclone-Labs/Simple-Quad-RL",
        // "https://github.com/EricPedley/cs179-final",
        // "/extra_projects/cs112.md",
        // "https://github.com/EricPedley/M5StampFly",
        // "/extra_projects/antalmanac.md",
        // "/extra_projects/master_iol.md",
        // "/extra_projects/ship_detection.md",
        // "/extra_projects/zotmeal.md",
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

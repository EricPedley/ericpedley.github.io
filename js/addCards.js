function addCards(repoList) {
    const container = document.querySelector(".card-container");
    let cardsBuffer="";
    for(const repo of repoList) {
        // if(!repo.description||repo.fork) 
        //     continue;
        cardsBuffer+=`<project-card repo="${repo.html_url}" branch="${repo.default_branch}"></project-card>`
    }
    container.innerHTML+=cardsBuffer;
}

const customRepoList = [
    {
        html_url:"https://github.com/EricPedley/spotify-yt-react",
        default_branch:"master"
    },
    {
        html_url:"https://github.com/EricPedley/kanyezone-bot-cpp",
        default_branch:"main"
    },
    {
        html_url:"https://github.com/EricPedley/posture-detector",
        default_branch:"main"
    },
    {
        html_url:"https://github.com/EricPedley/ibm-quantum-tracker",
        default_branch:"main"
    }, 
    {
        html_url:"https://github.com/EricPedley/opengl-projects",
        default_branch:"main"
    },
    {
        html_url:"https://github.com/EricPedley/audio-splicer",
        default_branch:"master"
    },
    {
        html_url:"https://github.com/EricPedley/Fantasy-XC-V2",
        default_branch:"master"
    },
    {
        html_url:"https://github.com/EricPedley/First-Unity-Project",
        default_branch:"main"
    },
    {
        html_url:"https://github.com/EricPedley/justcare",
        default_branch:"master"
    },
    {
        html_url:"https://github.com/EricPedley/animal-run-game",
        default_branch:"master"
    },
    {
        html_url:"https://github.com/EricPedley/deanza-course-notifier",
        default_branch:"main"
    },
    {
        html_url:"https://github.com/EricPedley/knife-guy-game",
        default_branch:"master"
    },
    //sites to add with gifs: opengl projects, chrome extension
]
window.onload=()=>addCards(customRepoList)

// const username="EricPedley"
// fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(r=>r.json()).then(allUserRepos=> {
//     addCards(allUserRepos);
// })

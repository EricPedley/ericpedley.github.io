async function addCards() {
    const repoListRaw = await fetch("https://raw.githubusercontent.com/EricPedley/ericpedley.github.io/master/README.md").then(res=>res.text())
    const repoList = repoListRaw.substring(repoListRaw.indexOf("https://github.com")).split("\n- ")
    console.log(repoList)
    const container = document.querySelector(".card-container");
    let cardsBuffer="";
    for(const repoURL of repoList) {
        const extractedPart = repoURL.substring("https://github.com/".length)
        const repoInfo = await fetch(`https://api.github.com/repos/${extractedPart}`).then(res=>res.json())
        cardsBuffer+=`<project-card repo="${repoURL}" branch="${repoInfo.default_branch}"></project-card>`
    }
    container.innerHTML+=cardsBuffer;
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




window.onload=()=>addCards()

// const username="EricPedley"
// fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(r=>r.json()).then(allUserRepos=> {
//     addCards(allUserRepos);
// })

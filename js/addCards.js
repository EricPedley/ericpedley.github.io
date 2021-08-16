async function addCards() {
    const user = "EricPedley"
    const [repoBranchDict,repoList] = await Promise.all([
        fetch(`https://api.github.com/users/${user}/repos?per_page=100`).then(res=>res.json()).then(repoInfo=> {
            return repoInfo.reduce((prev,curr)=> {
                prev[curr.html_url] = curr.default_branch;
                return prev
            },{});
        }),
        fetch(`https://raw.githubusercontent.com/${user}/${user}.github.io/master/README.md`).then(res=>res.text()).then(rawText=>{
            return rawText.substring(rawText.indexOf("https://github.com")).trim().split("\n- ");
        })
    ]);
    const container = document.querySelector(".card-container");
    let cardsBuffer="";
    for(const repo of repoList) {
        cardsBuffer+=`<project-card repo="${repo}" branch="${repoBranchDict[repo]}"></project-card>`;
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




window.onload=()=>addCards();

// const username="EricPedley"
// fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(r=>r.json()).then(allUserRepos=> {
//     addCards(allUserRepos);
// })

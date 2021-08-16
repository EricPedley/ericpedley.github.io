async function addCards() {
    const user = "EricPedley"
    const repoListRaw = await fetch(`https://raw.githubusercontent.com/${user}/${user}.github.io/master/README.md`).then(res=>res.text());
    const repoList = new Set(repoListRaw.substring(repoListRaw.indexOf("https://github.com")).trim().split("\n- "));
    console.log(repoList);
    const container = document.querySelector(".card-container");
    let cardsBuffer="";
    let numComplete=0;
    let repo_info_list;
    try {
        repo_info_list = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`).then(res=>res.json());
    } catch(e) {
        console.log(e);
        return;
    }
    console.log(repo_info_list)
    const repo_branch_dict = repo_info_list.reduce((prev,curr)=> {
        prev[curr.html_url] = curr.default_branch;
    },{})
    for(const repo of repo_info_list) {
        if(!repoList.has(repo.html_url)) continue;
        numComplete++;
        cardsBuffer+=`<project-card repo="${repo.html_url}" branch="${repo.default_branch}"></project-card>`;
        if(numComplete==repoList.size) {
            console.log(cardsBuffer)
            container.innerHTML+=cardsBuffer;
            return;
        }
    }
    
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

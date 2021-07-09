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
    }
]
window.onload=()=>addCards(customRepoList)

// const username="EricPedley"
// fetch(`https://api.github.com/users/${username}/repos?per_page=100`).then(r=>r.json()).then(allUserRepos=> {
//     addCards(allUserRepos);
// })

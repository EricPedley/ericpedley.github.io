window.addEventListener("load",()=>{
    console.log("fuc")
    const fader = document.querySelector("#fader")
    fader.style.opacity=0;
    window.setTimeout(()=>{
        fader.style.display="none"
    },1000)
})

window.onscroll=()=>{
    if(window.scrollY >=200) {
        document.querySelector("#arrow").style.opacity="1";
    } else {
        document.querySelector("#arrow").style.opacity="0";
    }
}

document.querySelector("#arrow").onclick=()=>{
    // window.scrollTo(0,0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}
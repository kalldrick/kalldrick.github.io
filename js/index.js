window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})

function slide(){
    let slideValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath="polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

function display(){
    const header = document.getElementById('header');
    let hamburger = document.getElementById('navbar');
    if(hamburger.style.display === "block"){
        hamburger.style.display = "none";
        header.style.background = "none"
    }
    else{
        hamburger.style.display = "block";
        header.style.background = "#E3E2DF";
    }
}


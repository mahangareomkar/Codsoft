const hero = document.getElementById("hero")
const fadeInElements = document.querySelectorAll(".fadeIn")

document.addEventListener("scroll",()=>{
    if(window.scrollY<hero.offsetHeight){
        document.querySelector("#headingHero").style.transform = `translateX(${(window.scrollY-hero.offsetTop)>=0?(window.scrollY-hero.offsetTop):0}px)`
        document.querySelector("#subHeadingHero").style.transform = `translateX(${(window.scrollY-hero.offsetTop)>=0?-(window.scrollY-hero.offsetTop):0}px)`
    }

    fadeInElements.forEach((element)=>{
        fadeIn(element);
    })
})

function fadeIn(element){
    console.log((window.scrollY-element.offsetTop)/element.offsetHeight)
    if((window.scrollY-element.offsetTop)/element.offsetHeight>=-1 && (window.scrollY-element.offsetTop)/element.offsetHeight<=-0.5){
        element.style.opacity = `${Math.abs(((window.scrollY-element.offsetTop)/element.offsetHeight)+1)*2}`;
    }
    else if((window.scrollY-element.offsetTop)/element.offsetHeight<-1){
        element.style.opacity = "0";
    }
}
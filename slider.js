
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const imgLength = images.length;

const getSlideWidth = () => slider.clientWidth;
const slideWidth = getSlideWidth();

for (let i = 0; i < imgLength; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = ()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor = "transparent";

    })
}
buttons.forEach((button, i) =>{
    button.addEventListener("click", ()=>{
        resetBg();
        slider.style.transform = `translateX(-${i * slideWidth }px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "white";
    })
})
const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber * slideWidth }px)`;
    slideNumber ++;
}
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`
    slideNumber = 1;
}
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber -1) * slideWidth }px)`;
    slideNumber = imgLength;
}
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber -2) * slideWidth }px)`;
    slideNumber --;
}

const changeColor = ()=>{
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = "white";
  }

right.addEventListener("click", ()=>{
    slideNumber < imgLength ? nextSlide() : getFirstSlide();
    changeColor()
});
left.addEventListener("click", ()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide();
    changeColor()
});


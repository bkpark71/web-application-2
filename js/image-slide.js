// image-side - carousel 방식으로 구현하기
let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".carousel > imag");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

let index = 0;

prev.onclick = prevSlide;
next.onclick = nextSlide;

showSlides(current); 

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[n].style.display = "block";
}
function prevSlide() {
    if(index == 0) return;    
    else index -= 1;
    carousel.style.transform = `translate3d(-${500 * index}px,0,0)`;
}
function nextSlide(){
    if(index == slides.length -1) return;
    else index += 1;
    carousel.style.transform = `translate3d(-${500 * index}px,0,0)`;
}
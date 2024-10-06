// Promotional Slides
// Prev Button for Carousel
const slides = document.querySelector(".carousel .container");
document.querySelector(".btn#prev").addEventListener("click", function(){
    const activeSlide = slides.querySelector(".slide#active");
    let newIndex = [...slides.children].indexOf(activeSlide) - 1;
    
    if(newIndex < 0) newIndex = slides.children.length - 1;
    if(newIndex >= slides.children.length) newIndex = 0;
    
    slides.children[newIndex].setAttribute("id", "active");
    activeSlide.removeAttribute("id");
});

// Next Button for Carousel
document.querySelector(".btn#next").addEventListener("click", function(){
    const activeSlide = slides.querySelector(".slide#active");
    let newIndex = [...slides.children].indexOf(activeSlide) + 1;
    
    if(newIndex < 0) newIndex = slides.children.length - 1;
    if(newIndex >= slides.children.length) newIndex = 0;
    
    slides.children[newIndex].setAttribute("id", "active");
    activeSlide.removeAttribute("id");
});

// Automatic carousel
function carousel() {
    const activeSlide = slides.querySelector(".slide#active");
    let newIndex = [...slides.children].indexOf(activeSlide) + 1;

    if(newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].setAttribute("id", "active");
    activeSlide.removeAttribute("id");

    setTimeout(carousel, 5000);
};

carousel();

// Index Scroll to Brand Button (in Carousel)
const arrowDownIndex = document.querySelector("#arrow-down-index");
arrowDownIndex.addEventListener("click", () => {
    console.log("clicked");
    const scrollToBrand = document.querySelector(".brand");
    scrollToBrand.scrollIntoView({behavior: "smooth"});
});



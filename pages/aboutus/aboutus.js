// AboutUs Scroll to Hero Button (in About)
const arrowDownAbout = document.querySelector("#arrow-down-about");
arrowDownAbout.addEventListener("click", () => {
    console.log("clicked");
    const scrollToHero = document.querySelector(".hero");
    scrollToHero.scrollIntoView({behavior: "smooth"});
});

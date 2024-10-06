// Filter using radio input
let previousCheckedRadio = null;

const rolex = document.querySelector(".rolex");
const hublot = document.querySelector(".hublot");
const tommy = document.querySelector(".tommy-hilfiger");
const seiko = document.querySelector(".seiko");
const fossil = document.querySelector(".fossil");

const allProduct = document.querySelector("#all-product");
const rolexFilter = document.querySelector("#rolex-filter");
const hublotFilter = document.querySelector("#hublot-filter");
const tommyFilter = document.querySelector("#tommy-filter");
const seikoFilter = document.querySelector("#seiko-filter");
const fossilFilter = document.querySelector("#fossil-filter");

function handleRadioChange(radioNumber) {
    const currentCheckedRadio = document.getElementById(`radio${radioNumber}`);

    if (previousCheckedRadio !== null && previousCheckedRadio !== currentCheckedRadio) {
      previousCheckedRadio.checked = false;
    }

    previousCheckedRadio = currentCheckedRadio;

    if(currentCheckedRadio.value === "rolex") {
        rolex.style.display = "block";
        hublot.style.display = "none";
        tommy.style.display = "none";
        seiko.style.display = "none";
        fossil.style.display = "none";

        allProduct.style.display = "none";
        rolexFilter.style.display = "block";
        hublotFilter.style.display = "none";
        tommyFilter.style.display = "none";
        seikoFilter.style.display = "none";
        fossilFilter.style.display = "none";
    }
    if(currentCheckedRadio.value === "hublot") {
        rolex.style.display = "none";
        hublot.style.display = "block";
        tommy.style.display = "none";
        seiko.style.display = "none";
        fossil.style.display = "none";

        allProduct.style.display = "none";
        rolexFilter.style.display = "none";
        hublotFilter.style.display = "block";
        tommyFilter.style.display = "none";
        seikoFilter.style.display = "none";
        fossilFilter.style.display = "none";
    }
    if(currentCheckedRadio.value === "tommy") {
        rolex.style.display = "none";
        hublot.style.display = "none";
        tommy.style.display = "block";
        seiko.style.display = "none";
        fossil.style.display = "none";

        allProduct.style.display = "none";
        rolexFilter.style.display = "none";
        hublotFilter.style.display = "none";
        tommyFilter.style.display = "block";
        seikoFilter.style.display = "none";
        fossilFilter.style.display = "none";
    }
    if(currentCheckedRadio.value === "seiko") {
        rolex.style.display = "none";
        hublot.style.display = "none";
        tommy.style.display = "none";
        seiko.style.display = "block";
        fossil.style.display = "none";

        allProduct.style.display = "none";
        rolexFilter.style.display = "none";
        hublotFilter.style.display = "none";
        tommyFilter.style.display = "none";
        seikoFilter.style.display = "block";
        fossilFilter.style.display = "none";
    }
    if(currentCheckedRadio.value === "fossil") {
        rolex.style.display = "none";
        hublot.style.display = "none";
        tommy.style.display = "none";
        seiko.style.display = "none";
        fossil.style.display = "block";

        allProduct.style.display = "none";
        rolexFilter.style.display = "none";
        hublotFilter.style.display = "none";
        tommyFilter.style.display = "none";
        seikoFilter.style.display = "none";
        fossilFilter.style.display = "block";
    }

}

// Reset Radio
const radios = document.querySelectorAll(".radioChecked");
const reset = document.querySelector(".reset");
reset.addEventListener("click", resetRadio);
function resetRadio() {
    radios.forEach(radio => {
        radio.checked = false;
    });

    allProduct.style.display = "block";
    rolex.style.display = "block";
    hublot.style.display = "block";
    tommy.style.display = "block";
    seiko.style.display = "block";
    fossil.style.display = "block";

    rolexFilter.style.display = "none";
    hublotFilter.style.display = "none";
    tommyFilter.style.display = "none";
    seikoFilter.style.display = "none";
    fossilFilter.style.display = "none";

    console.log("clicked");
};

// Reset Radio kalau pindah page agar tidak stuck filternya 
window.addEventListener('pageshow', function(event) {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
      radioButton.checked = false;
    });
});


// Filter Button untuk responsif
const filterMenu = document.querySelector(".filter-product");

document.querySelector("#filter-button").onclick = () => {
    filterMenu.classList.toggle("active");
};

const filterButton = document.querySelector("#filter-button");

document.addEventListener("click", function(e) {
    if(!filterButton.contains(e.target) && !filterMenu.contains(e.target)) {
        filterMenu.classList.remove("active");
    }
});



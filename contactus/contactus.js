// Form Validations
const form = document.querySelector("#my-form");

// Name Validation
const nameInput = document.querySelector("#userfullname");
const msgName = document.querySelector(".msgName");

nameInput.addEventListener("blur", nameFunction);
function nameFunction() {
    if(nameInput.value === "") {
        msgName.style.display = "block";
    }
    else {
        msgName.style.display = "none";
    }
};

// Dropdown Validation
const countrySelect = document.querySelector("#usercountry");
const msgCountry = document.querySelector(".msgCountry");

countrySelect.addEventListener("change", countryFunction);
function countryFunction() {
    const selectedCountry = countrySelect.value;

    if(selectedCountry === "") {
        msgCountry.style.display = "block";
    }
    else {
        msgCountry.style.display = "none";
    }
}

// E-mail Validation
const emailInput = document.querySelector("#useremail");
const msgEmail = document.querySelector(".msgEmail");

emailInput.addEventListener("blur", emailFunction);
function emailFunction() {
    if(!emailInput.validity.valid || emailInput.value === "") {
        msgEmail.style.display = "block";
    }
    else {
        msgEmail.style.display = "none";
    }
};

// Messages Validation
const messagesInput = document.querySelector("#usermessage");
const msgMessagesBlank = document.querySelector(".msgMessagesBlank");
const msgMessagesSize = document.querySelector(".msgMessagesSize");
const charLimit = 300

messagesInput.addEventListener("blur", messagesBlankFunction);
function messagesBlankFunction() {
    if(messagesInput.value === "") {
        msgMessagesBlank.style.display = "block";
    }
    else {
        msgMessagesBlank.style.display = "none";
    }
};

messagesInput.addEventListener("input", messagesSizeFunction);
function messagesSizeFunction() {
    if(messagesInput.value.length > charLimit) {
        msgMessagesSize.style.display = "block";
    }
    else {
        msgMessagesSize.style.display = "none";
    }

};

// Agreement Validation
const agreement = document.querySelector("#sendreceipt");
const accept = document.querySelector(".accept");
agreement.addEventListener("click", agreementAccept);
function agreementAccept() {
    if(!agreement.checked) {
        accept.style.display = "block";
    }
    else {
        accept.style.display = "none";
    }
}

// Submit Validation
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(nameInput.value != "" && 
    countrySelect.value != "" && 
    emailInput.value != "" && 
    emailInput.validity.valid && 
    messagesInput.value != "" && 
    messagesInput.value.length <= charLimit &&
    agreement.checked){

        console.log(nameInput.value);
        console.log(countrySelect.value);
        console.log(emailInput.value);
        console.log(messagesInput.value);

        nameInput.value = "";
        emailInput.value = "";
        messagesInput.value = "";
        countrySelect.value = "";
        agreement.checked = false;

        background.style.display = "block";

    }
    else{
        nameFunction();
        countryFunction();
        emailFunction();
        messagesBlankFunction();
        agreementAccept();
    }    
});

// Overlay Button
const background = document.querySelector(".background");
const submitButton = document.querySelector(".ok");
submitButton.addEventListener("click", overlayConfirmation);
function overlayConfirmation() {
    background.style.display = "none";
}



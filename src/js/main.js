import './../scss/style.scss'

// Declaration
const RANGE = document.querySelector(".range");
const GENERATE = document.querySelector(".generate");
const COPY = document.querySelector(".copy");
const OUTPUT = document.querySelector(".upper");

let options = [];
let password = [];
let generatedPassword = [];
let output;
let newElement;
let startRandom;

// generatePassword
const generatePassword = () => {
    
    console.clear();

    if(document.querySelector(".one").checked == true) {
        options.push(1);
    }
    if(document.querySelector(".two").checked == true) {
        options.push(2);
    }
    if(document.querySelector(".three").checked == true) {
        options.push(3);
    }

    if(options.length != 0) {
        OUTPUT.innerHTML = "";

        for(let i = 0; i < RANGE.value; i++) {
            var rand = Math.floor(Math.random() * options.length);
            var rValue = options[rand];

            switch(rValue) {
                case 1: output = generateNumber(); break;
                case 2: output = generateLetter(); break;
                case 3: output = generateSymbol(); break;
            }
            
            password[i] = output;

            generatedPassword[i] = output;
        }

        showPassword(password);
    }
    else {
        console.error("No settings are selected.");
    }
};

const showPassword = (password) => {

    password.forEach(element => {
        newElement = document.createElement("div");
        newElement.innerHTML = '<div class="element">' + element + "</div>";
        newElement.setAttribute("class", "char");
        OUTPUT.appendChild(newElement);

        newElement.style.animation = "show " + randomNumber(0.5, 2) + "s";
    });

    password.length = 0;

    options.length = 0;

    console.log("%cPassword generated. %c(Password: %c" + generatedPassword.join("") + "%c)", "color: #bada55", "color: #909090", "color: unset", "color: #909090");
};

// genarate-tasks
const generateNumber = () => {
    return Math.floor(Math.random()*10);
};

const generateLetter = () => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return characters.charAt(Math.floor(Math.random() * characters.length));
};

const generateSymbol = () => {
    let symbols = "-$§€_%*";
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
};

// inputs & buttons
GENERATE.addEventListener("click", () => {
    generatedPassword.length = 0;
    COPY.innerText = "Copy Password";

    generatePassword();
});

RANGE.addEventListener("input", () => {
    length = RANGE.value;

    document.querySelector(".rangeOutput").innerHTML = length;
});


// generate random number
const randomNumber = (max, min) => {
    return Math.random() * (max - min) + min;
};


// copy to clipboard
COPY.addEventListener("click", () => {
    if(navigator.clipboard.writeText(generatedPassword.join(""))) {
        COPY.innerText = "Copyed to clipboard";
        console.log("%cPassword copyed to clipboard.", "color: #bada55");
    }
    else {
        console.error("Couldn't copy password to clipboard.");
    }
});


// initiate start
startRandom = Math.round(randomNumber(6, 50));
RANGE.value = startRandom;
document.querySelector(".rangeOutput").innerHTML = startRandom;
generatePassword();


// copyright

const d = new Date();
let year = d.getFullYear();
document.querySelector(".copyright").innerText = year + " © VisualsOfPaul";


// check boxes

document.querySelector(".firstSwitch").addEventListener("click", () => {
    if(document.querySelector(".one").checked === false) {
        document.querySelector(".one").checked = true;
    }
    else {
        document.querySelector(".one").checked = false;
    }
});

document.querySelector(".secondSwitch").addEventListener("click", () => {
    if(document.querySelector(".two").checked === false) {
        document.querySelector(".two").checked = true;
    }
    else {
        document.querySelector(".two").checked = false;
    }
});

document.querySelector(".thirdSwitch").addEventListener("click", () => {
    if(document.querySelector(".three").checked === false) {
        document.querySelector(".three").checked = true;
    }
    else {
        document.querySelector(".three").checked = false;
    }
});

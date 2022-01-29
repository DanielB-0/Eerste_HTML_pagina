// Declaring function for menu button
let toggleNavStatus = false;

function navToggle() {
    let getDropDown = document.querySelector(".dropdown-content");
    let getDropDownUl = document.querySelector(".dropdown-content ul");
    let getDropDownContent = document.querySelectorAll(".dropdown-content a");

    if (toggleNavStatus === false) {
        getDropDownUl.style.visibility = "visible";
        getDropDown.style.width = "400px";
    
        let arrayLength = getDropDown.length;
        for (let i = 0; 1 < arrayLength; i++) {
            getDropDownContent[i].style.opacity = "1";
        }
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getDropDown.style.width = "50px";
    
        let arrayLength = getDropDown.length;
        for (let i = 0; 1 < arrayLength; i++) {
            getDropDownContent[i].style.opacity = "0";
        }
        getDropDownUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
};

// Declare function to close navigation after color is selected
function navClose() {
    let getDropDown = document.querySelector(".dropdown-content");
    let getDropDownUl = document.querySelector(".dropdown-content ul");
    let getDropDownContent = document.querySelectorAll(".dropdown-content a");

    if (toggleNavStatus === true) {
        getDropDown.style.width = "50px";
    
        let arrayLength = getDropDown.length;
        for (let i = 0; 1 < arrayLength; i++) {
            getDropDownContent[i].style.opacity = "0";
        }
        getDropDownUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
};

// Declaring constants
const menuButton = document.getElementsByClassName('menu-btn');
const menuItems = document.getElementsByTagName('li');
const bgBody = document.body;
const bgHome = document.getElementById("Home");
const bgL1 = document.getElementById("L1");
const bgL2 = document.getElementById("L2");
const bgL3 = document.getElementById("L3");
const bgL4 = document.getElementById("L4");

// Declaring constants and functions
const changeToHome = function() {
    let styleHome = getComputedStyle(bgHome);
    let colorHome = styleHome.backgroundColor;
    bgBody.style.background = colorHome;
};

const changeToL1 = function() {
    let styleL1 = getComputedStyle(bgL1);
    let colorL1 = styleL1.backgroundColor;
    bgBody.style.background = colorL1;
};

const changeToL2 = function() {
    let styleL2 = getComputedStyle(bgL2);
    let colorL2 = styleL2.backgroundColor;
    bgBody.style.background = colorL2;
};

const changeToL3 = function() {
    let styleL3 = getComputedStyle(bgL3);
    let colorL3 = styleL3.backgroundColor;
    bgBody.style.background = colorL3;
};

const changeToL4 = function() {
    let styleL4 = getComputedStyle(bgL4);
    let colorL4 = styleL4.backgroundColor;
    bgBody.style.background = colorL4;
};

// Assigning functions to buttons/links
menuButton[0].addEventListener('click', navToggle);

bgHome.addEventListener('click', () => {
    changeToHome();
    navClose();
});

bgL1.addEventListener('click', () => {
    changeToL1();
    navClose();
});

bgL2.addEventListener('click', () => {
    changeToL2();
    navClose();
});

bgL3.addEventListener('click', () => {
    changeToL3();
    navClose();
});

bgL4.addEventListener('click', () => {
    changeToL4();
    navClose();
});

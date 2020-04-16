let currentElement = document.querySelector("#content-home");
let currentListItem = document.querySelector("#navbar-home");
const navbar = document.querySelector("nav");
let displayed = false;
currentListItem.classList.add("bold");
/*
let animate = document.querySelector(".animate");

for (let i = 0; i < animate.length; i++) {
    setTimeout(() => {
        animate[i].style.opacity = "1";
        animate[i].style.transform = "translate(0, 0)";
    }, 150*(i+1));
}
*/
function navbarFunction(navbarItem) {
    currentElement.classList.add("invisible");
    currentElement.classList.remove("visible");

    if (displayed == true) {
        navbar.style.marginLeft = "-300px";
        displayed = false;
    }

    setTimeout(() => {
        let navbarElement = document.querySelector("#content-" + navbarItem);
        let navbarElements = document.getElementsByClassName("content");

        for (i = 0; i < navbarElements.length; i++) {
            navbarElements[i].style.display = "none";
            navbarElements[i].classList.add("invisible");
        }

        navbarElement.style.display = "flex";

        currentElement = navbarElement;

        setTimeout(() => {
            navbarElement.classList.add("visible");
            navbarElement.classList.remove("invisible");

            currentListItem.classList.remove("bold");
            currentListItem = document.querySelector("#navbar-" + navbarItem);
            currentListItem.classList.add("bold");
        }, 250);
    }, 250);
}

function displayNavbar() {
    if (displayed == false) {
        navbar.style.marginLeft = "0";
        displayed = true;
    } else {
        navbar.style.marginLeft = "-300px";
        displayed = false;
    }
}

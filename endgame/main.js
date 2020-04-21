const navbar = document.querySelector("nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const text = document.querySelectorAll(".text");
const p = document.querySelectorAll(".text p");
const project = document.querySelectorAll(".project");

let currentElement = document.querySelector("#content-home");
let currentListItem = document.querySelector("#navbar-home");
let displayed = true;
let update = true;

currentListItem.classList.add("bold");

window.addEventListener("resize", () => {
    updateHeight();
    update = true;
});

function updateHeight() {
    for (let i = 0; i < p.length; i++) {
        text[i].style.height = "calc(100% + " + (p[i].offsetHeight - 8) + "px)";
    }
}

function navbarFunction(navbarItem) {
    currentElement.classList.add("invisible");
    currentElement.classList.remove("visible");

    displayNavbar();

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

            if (update == true && navbarItem == "projects") {
                updateHeight();
                update = false;
            }
        }, 250);
    }, 250);
}

function displayNavbar() {
    if (displayed == false) {
        navbar.classList.add("shown");
        open.style.transform = "rotate(0)";
        open.style.opacity = "1";

        close.style.transform = "rotate(0)";
        close.style.opacity = "0";
        displayed = true;
    } else {
        navbar.classList.remove("shown");
        open.style.transform = "rotate(90deg)";
        open.style.opacity = "0";

        close.style.transform = "rotate(90deg)";
        close.style.opacity = "1";
        displayed = false;
    }
}

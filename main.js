window.onload = function () {
    window.currentElement = document.getElementById("content-home");
    window.currentListItem = document.getElementById("navbar-home");
    window.navbar = document.getElementById("navbar");
    window.displayed = false;
    currentListItem.classList.add("bold");
}

function navbarFunction(navbarItem) {
    currentElement.classList.add("transition-out");
    currentElement.classList.remove("transition-in");

    if (displayed == true) {
        navbar.style.marginLeft = "-300px";
        displayed = false;
    }

    setTimeout(function () {
        var navbarElement = document.getElementById("content-" + navbarItem);
        var navbarElements = document.getElementsByClassName("content");

        for (i = 0; i < navbarElements.length; i++) {
            navbarElements[i].style.display = "none";
            navbarElements[i].classList.add("transition-out");
        }

        navbarElement.style.display = "block";

        currentElement = navbarElement;

        setTimeout(function () {
            navbarElement.classList.add("transition-in");

            currentListItem.classList.remove("bold");
            currentListItem = document.getElementById("navbar-" + navbarItem);
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
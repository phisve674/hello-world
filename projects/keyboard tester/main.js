let bgColorPressed = 'grey';
let bgColorUnpressed = 'silver';
let displayed = false;

window.onload = function windowOnload() {
    window.dropDownMenu = document.getElementById("dropdown-menu");
    window.currentKeyboard = document.getElementById("custom-60");

    window.checkBox = document.getElementById("enable-dark-theme");
    window.gridItem = document.getElementsByClassName("grid-item");

    document.body.addEventListener('keydown', function (e) { keyPress(bgColorPressed, currentKeyboard, e); });
    document.body.addEventListener('keyup', function (e) { keyPress(bgColorUnpressed, currentKeyboard, e); });
}

function keyPress(bgColor, currentKeyboard, e) {
    for (let i = 0; i < currentKeyboard.children.length; i++) {
        if (currentKeyboard.children[i].className == 'grid-item ' + e.code) {
            currentKeyboard.children[i].style.background = bgColor;
        }
    }
}

function dropdownMenu() {
    if (displayed == false) {
        dropDownMenu.style.display = 'block';
        displayed = true;
    } else {
        dropDownMenu.style.display = 'none';
        displayed = false;
    }
}

function darkTheme() {
    if (checkBox.checked == true) {
        for (let i = 0; i < gridItem.length; i++) {
            bgColorPressed = 'rgb(28,28,28)';
            bgColorUnpressed = 'rgb(40,40,40)';

            gridItem[i].style.color = 'white';
            gridItem[i].style.background = bgColorUnpressed;

            document.getElementsByTagName("BODY")[0].style.background = 'rgb(16,16,16)';
        }
    } else {
        for (let i = 0; i < gridItem.length; i++) {
            bgColorPressed = 'grey';
            bgColorUnpressed = 'silver';

            gridItem[i].style.color = 'black';
            gridItem[i].style.background = bgColorUnpressed;

            document.getElementsByTagName("BODY")[0].style.background = 'white';
        }
    }
}

function layout(keyboard) {
    currentKeyboard.style.display = 'none';
    currentKeyboard = document.getElementById(keyboard);
    currentKeyboard.style.display = 'grid';
}
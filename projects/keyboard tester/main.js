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
    let key = currentKeyboard.getElementsByClassName(e.code);
    for (let i = 0; i < key.length; i++) {
        key[i].style.background = bgColor;
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

function changeTheme() {
    if (checkBox.checked == true) {
        theme('rgb(28,28,28)', 'rgb(40,40,40)', 'white', 'rgb(16, 16, 16)');
    } else {
        theme('grey', 'silver', 'black', 'white');
    }
}

function theme(pressed, unpressed, text, background) {
    for (let i = 0; i < gridItem.length; i++) {
        bgColorPressed = pressed;
        bgColorUnpressed = unpressed;

        gridItem[i].style.color = text;
        gridItem[i].style.background = bgColorUnpressed;

        document.getElementsByTagName("body")[0].style.background = background;
    }
}

function layout(keyboard) {
    currentKeyboard.style.display = 'none';
    currentKeyboard = document.getElementById(keyboard);
    currentKeyboard.style.display = 'grid';
}
var bgColorPressed = 'grey';
var bgColorUnpressed = 'silver';
var currentKeyboardNumber = 0;

window.onload = function windowOnload() {
    window.dropDownMenu = document.getElementById("dropdown-menu");
    window.currentKeyboard = document.getElementById("custom-60");

    document.body.addEventListener('keydown', function (e) { keyPress(bgColorPressed, e); });
    document.body.addEventListener('keyup', function (e) { keyPress(bgColorUnpressed, e); });

    function keyPress(bgColor, e) {
        if (e.code == 'Enter') {
            document.getElementsByClassName(e.code)[(currentKeyboardNumber) * 2].style.background = bgColor;
            document.getElementsByClassName(e.code)[(currentKeyboardNumber) * 2 + 1].style.background = bgColor;
        } else if (e.code == 'Space') {
            if (currentKeyboardNumber == 0) {
                for (let i = 0; i < 4; i++) {
                    document.getElementsByClassName(e.code)[i].style.background = bgColor;
                }
            } else {
                document.getElementsByClassName(e.code)[currentKeyboardNumber + 2].style.background = bgColor;
            }
        } else {
            document.getElementsByClassName(e.code)[currentKeyboardNumber].style.background = bgColor;
        }
    }
}

let displayed = false;

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
    var checkBox = document.getElementById("enable-dark-theme");
    var gridItem = document.getElementsByClassName("grid-item");

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
    
    if (keyboard == 'custom-60') {
        document.getElementById("custom-60").style.display = 'grid';

        currentKeyboard = document.getElementById("custom-60");
        currentKeyboardNumber = 0;
    } else if (keyboard == 'standard-tkl') {
        document.getElementById("standard-tkl").style.display = 'grid';

        currentKeyboard = document.getElementById("standard-tkl");
        currentKeyboardNumber = 1;
    } else if (keyboard == 'standard-100') {
        document.getElementById("standard-100").style.display = 'grid';

        currentKeyboard = document.getElementById("standard-100");
        currentKeyboardNumber = 2;
    } else {
        document.getElementById("chromebook").style.display = 'grid';

        currentKeyboard = document.getElementById("chromebook");
        currentKeyboardNumber = 3;
    }
}
window.onload = function windowOnload() {
    const gridItem = document.getElementsByClassName("grid-item");

    document.body.addEventListener('keydown', function (e) { keyPress('grey', e); });
    document.body.addEventListener('keyup', function (e) { keyPress('silver', e); });

    function keyPress(bgColor, e) {
        switch (e.code) {
            case 'Escape':
                gridItem[0].style.background = bgColor;
                break;
            case 'Digit1':
                gridItem[1].style.background = bgColor;
                break;
            case 'Digit2':
                gridItem[2].style.background = bgColor;
                break;
            case 'Digit3':
                gridItem[3].style.background = bgColor;
                break;
            case 'Digit4':
                gridItem[4].style.background = bgColor;
                break;
            case 'Digit5':
                gridItem[5].style.background = bgColor;
                break;
            case 'Digit6':
                gridItem[6].style.background = bgColor;
                break;
            case 'Digit7':
                gridItem[7].style.background = bgColor;
                break;
            case 'Digit8':
                gridItem[8].style.background = bgColor;
                break;
            case 'Digit9':
                gridItem[9].style.background = bgColor;
                break;
            case 'Digit0':
                gridItem[10].style.background = bgColor;
                break;
            case 'Minus':
                gridItem[11].style.background = bgColor;
                break;
            case 'Equal':
                gridItem[12].style.background = bgColor;
                break;
            case 'Backspace':
                gridItem[13].style.background = bgColor;
                break;
            case 'Tab':
                gridItem[14].style.background = bgColor;
                break;
            case 'KeyQ':
                gridItem[15].style.background = bgColor;
                break;
            case 'KeyW':
                gridItem[16].style.background = bgColor;
                break;
            case 'KeyE':
                gridItem[17].style.background = bgColor;
                break;
            case 'KeyR':
                gridItem[18].style.background = bgColor;
                break;
            case 'KeyT':
                gridItem[19].style.background = bgColor;
                break;
            case 'KeyY':
                gridItem[20].style.background = bgColor;
                break;
            case 'KeyU':
                gridItem[21].style.background = bgColor;
                break;
            case 'KeyI':
                gridItem[22].style.background = bgColor;
                break;
            case 'KeyO':
                gridItem[23].style.background = bgColor;
                break;
            case 'KeyP':
                gridItem[24].style.background = bgColor;
                break;
            case 'BracketLeft':
                gridItem[25].style.background = bgColor;
                break;
            case 'BracketRight':
                gridItem[26].style.background = bgColor;
                break;
            case 'Enter':
                gridItem[27].style.background = bgColor;
                gridItem[41].style.background = bgColor;
                break;
            case 'CapsLock':
                gridItem[28].style.background = bgColor;
                break;
            case 'KeyA':
                gridItem[29].style.background = bgColor;
                break;
            case 'KeyS':
                gridItem[30].style.background = bgColor;
                break;
            case 'KeyD':
                gridItem[31].style.background = bgColor;
                break;
            case 'KeyF':
                gridItem[32].style.background = bgColor;
                break;
            case 'KeyG':
                gridItem[33].style.background = bgColor;
                break;
            case 'KeyH':
                gridItem[34].style.background = bgColor;
                break;
            case 'KeyJ':
                gridItem[35].style.background = bgColor;
                break;
            case 'KeyK':
                gridItem[36].style.background = bgColor;
                break;
            case 'KeyL':
                gridItem[37].style.background = bgColor;
                break;
            case 'Semicolon':
                gridItem[38].style.background = bgColor;
                break;
            case 'Quote':
                gridItem[39].style.background = bgColor;
                break;
            case 'Backslash':
                gridItem[40].style.background = bgColor;
                break;
            case 'ShiftLeft':
                gridItem[42].style.background = bgColor;
                break;
            case 'IntlBackslash':
                gridItem[43].style.background = bgColor;
                break;
            case 'KeyZ':
                gridItem[44].style.background = bgColor;
                break;
            case 'KeyX':
                gridItem[45].style.background = bgColor;
                break;
            case 'KeyC':
                gridItem[46].style.background = bgColor;
                break;
            case 'KeyV':
                gridItem[47].style.background = bgColor;
                break;
            case 'KeyB':
                gridItem[48].style.background = bgColor;
                break;
            case 'KeyN':
                gridItem[49].style.background = bgColor;
                break;
            case 'KeyM':
                gridItem[50].style.background = bgColor;
                break;
            case 'Comma':
                gridItem[51].style.background = bgColor;
                break;
            case 'Period':
                gridItem[52].style.background = bgColor;
                break;
            case 'ShiftRight':
                gridItem[53].style.background = bgColor;
                break;
            case 'ArrowUp':
                gridItem[54].style.background = bgColor;
                break;
            case 'Slash':
                gridItem[55].style.background = bgColor;
                break;
            case 'ControlLeft':
                gridItem[56].style.background = bgColor;
                break;
            case 'MetaLeft':
                gridItem[57].style.background = bgColor;
                break;
            case 'AltLeft':
                gridItem[58].style.background = bgColor;
                break;
            case 'Space':
                gridItem[59].style.background = bgColor;
                gridItem[60].style.background = bgColor;
                gridItem[61].style.background = bgColor;
                break;
            case 'AltRight':
                gridItem[62].style.background = bgColor;
                break;
            case 'ArrowLeft':
                gridItem[64].style.background = bgColor;
                break;
            case 'ArrowDown':
                gridItem[65].style.background = bgColor;
                break;
            case 'ArrowRight':
                gridItem[66].style.background = bgColor;
        }
    }
}
function hideChat(elementId, iconId) {
    var x = document.getElementById(elementId);
    var y = document.getElementById(iconId);

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

var item1;

function newStream(streamPlayer, streamChat) {
    item1 = prompt("Enter a new channel: ");
    updateStream(streamPlayer, streamChat);
}

function updateStream(streamPlayer, streamChat) {
    document.getElementById(streamChat).src = "https://www.twitch.tv/embed/" + item1 + "/chat?darkpopout";
    document.getElementById(streamPlayer).src = "https://player.twitch.tv/?channel=" + item1;
}
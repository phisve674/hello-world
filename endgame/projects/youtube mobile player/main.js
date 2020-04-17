function play() {
    let value = document.getElementsByTagName("input")[0].value;
    let iframe = document.getElementsByTagName("iframe")[0];

    if (value != "") {
        let id = value.split("=")[1];

        if (value.includes("playlist")) {
            iframe.src = "https://www.youtube.com/embed/videoseries?list=" + id;
        } else {
            iframe.src = "https://www.youtube.com/embed/" + id;
        }
        iframe.style.display = "block";
    }
}
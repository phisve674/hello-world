window.onload = function () {

    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");
    var container = document.getElementById("container");
    audio.volume=0.5;

    file.onchange = function () {
        var files = this.files;

        document.getElementById("header").innerHTML = files[0].name;
        container.style.display = "flex";

        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 256;

        var bufferLength = 50;

        var dataArray = new Uint8Array(bufferLength);

        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;

        var barWidth = (WIDTH / bufferLength) * 0.67;
        var barHeight;
        var x = 0;

        function renderFrame() {
            requestAnimationFrame(renderFrame);

            x = 0;

            analyser.getByteFrequencyData(dataArray);

            ctx.clearRect(0, 0, WIDTH, HEIGHT);

            for (var i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] * HEIGHT / 275;

                ctx.fillStyle = "rgb(255,255,255)";
                ctx.fillRect(x, HEIGHT - barWidth * 1.25 - barHeight , barWidth, barHeight);
                
                ctx.beginPath();
                ctx.ellipse(x + (barWidth / 2), HEIGHT - barWidth * 1.25 - barHeight, barWidth * 1.25, barWidth / 2, 90 * Math.PI / 180, 0, 2 * Math.PI);
                ctx.fill();

                ctx.beginPath();
                ctx.ellipse(x + (barWidth / 2), HEIGHT - barWidth * 1.25, barWidth * 1.25, barWidth / 2, 90 * Math.PI / 180, 0, 2 * Math.PI);
                ctx.fill();

                x += barWidth * 1.5;
            }
        }
        audio.play();
        renderFrame();
    };
};
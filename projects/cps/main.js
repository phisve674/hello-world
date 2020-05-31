let mode = 0;
let time = 0;
let cps = 0;

let deg = 0;
let velocity = 0;
const acceleration = 1;
const friction = .99;

let spin = false;

window.onload = function() {
  window.button = document.getElementsByTagName("button")[0];

  window.cpsText = document.getElementsByTagName("p")[0];
  window.body = document.getElementsByTagName("body")[0];
  timer();
};

function buttonClick() {
  velocity += acceleration;
  
  cps = 100 / time;
  cpsText.innerHTML = Math.round(cps * 10) / 10 + " cps";
  time = 0;
}

function timer() {
  setTimeout(() => {
    time++;
    deg += velocity;

    if(spin == true) {
      button.style.transform = "rotate(" + deg + "deg)";
    }

    velocity *= friction;
    timer();
  }, 10);
}

function spinButton() {
  if(spin == true) {
    spin = false;
    button.style.transform = "";
  } else {
    spin = true;
    deg = 0;
    velocity = 0;
  }
}

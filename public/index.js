document.body.onload = dotGeneration;
  
function dotGeneration() {
  let container = document.getElementById("dot-container");
  let dots = [];
  let movementAngle = 0;

  function randomNum(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }

  function makeDot() {
    // for (let i=0; i < 2; i++) {
    let newDot = document.createElement("div")
    newDot.className = "new-dot"
    style = newDot.style;

    style.borderRadius = "100%";
    style.border = randomNum(10, 100) + "px solid black";
    console.log(style.border);
    style.position = "absolute";
    style.zIndex = "99999";
    style.top = randomNum(0, container.clientHeight) + "px";
    style.left = randomNum(0, container.clientHeight) + "px";
      
    return newDot;
    // container.appendChild(newDot);
    // }

  }

  function moveDot(newDot) {
    let style = newDot.style;
    let height = container.clientHeight;
    // console.log(height);
    let radius = parseInt(style.border, 10);
    let top = parseInt(style.top, 10);
    // top += Math.cos(movementAngle) + 1 + radius/2;
    top += 5;
    // console.log(top);

    if (top > height) {
      resetDot(newDot);
    } else {
      style.top = top + "px";
    }
  }

  function resetDot(newDot) {
    let style = newDot.style;
    style.top = "75px";
    style.left = randomNum(10, container.clientWidth-150) + "px";
    console.log(style.left);
  }

  function moveAllDots() {
    let dotLength = dots.length;
    movementAngle += 0.1;

    for (let i=0; i<dotLength; i++) {
      moveDot(dots[i]);
    }
  }

  function setup () {
    for (let i=0; i<5; i++) {
      let particle = dots[i] = makeDot();
      container.appendChild(particle);
    }
    animationInterval = setInterval(moveAllDots, 100);
  }
  // setInterval(makeDots, 1000);
  setup();
}




  
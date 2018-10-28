document.body.onload = makeDots;
  
function makeDots() {
  let container = document.getElementById("dot-container");
  console.log(container);
  for (let i=0; i < 10; i++) {
    let newDot = document.createElement("div");
    newDot.className = "new-dot";
    let dotSize = (Math.floor(Math.random() * 10) + 1);
    console.log(dotSize);
    newDot.style.height = dotSize + "px";
    newDot.style.width = dotSize + "px";
    container.appendChild(newDot);
  }
}


  
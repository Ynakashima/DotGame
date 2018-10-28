document.body.onload = makeDots;
  
function makeDots() {
  let container = document.getElementById("dot-container");
  console.log(container);
  for (let i=0; i < 50; i++) {
    let newDot = document.createElement("div");
    newDot.className = "new-dot";
    container.appendChild(newDot);
  }
}


  
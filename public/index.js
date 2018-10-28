document.body.onload = dotGeneration;
  
function dotGeneration() {
  function makeDots() {
    let container = document.getElementById("dot-container");

    // for (let i=0; i < 2; i++) {
      let newDot = document.createElement("div")
      newDot.className = "new-dot"

      let dotSize = (Math.floor(Math.random() * 100) + 10)
      console.log(dotSize)
      newDot.style.height = dotSize + "px"
      newDot.style.width = dotSize + "px"

      let startPoint = (Math.floor(Math.random() * 95) + 1);
      newDot.style.left = startPoint + "%";
      newDot.style.top = "0";

      container.appendChild(newDot);
    // }

  }

  setInterval(makeDots, 1000);
}




  
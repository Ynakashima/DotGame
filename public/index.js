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
      container.appendChild(newDot);
    // }

  }

  setInterval(makeDots, 1000);
}




  
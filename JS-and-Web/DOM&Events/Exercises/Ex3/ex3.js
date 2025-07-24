function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function checkAllBoxesSameColor() {
  const boxes = container.querySelectorAll(".box");
  if (boxes.length === 0) return;

  const firstColor = boxes[0].style.backgroundColor;
  const allSame = Array.from(boxes).every(box => box.style.backgroundColor === firstColor);

  if(allSame) {
    message.textContent = "Nice job!";
  } else {
    message.textContent = "";
  }
}

const container = document.getElementById("container");

const message = document.createElement("div");
message.classList.add("message");
container.after(message);

for(let i=0;i<312;i++){
const newBox = document.createElement("div");
newBox.classList.add("box");
newBox.textContent = i+1;


newBox.addEventListener("mouseenter", function() {
    this.style.backgroundColor = getRandomColor();
    // this.style.backgroundColor = "red";
    checkAllBoxesSameColor();
  });

container.appendChild(newBox);
}
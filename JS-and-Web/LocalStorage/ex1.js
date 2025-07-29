const input = document.getElementById("myInput");
const button = document.getElementById("myBtn");
const clear = document.getElementById("clear");
const output = document.getElementById("myOutput");

let wisdom = [];

function renderWisdom() {

  output.innerHTML = "";

  wisdom.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = "storage : " + item.text;

    const x = document.createElement("button")
    x.textContent = "x";

    x.addEventListener("click", () => {
        const index = wisdom.indexOf(item); 
        wisdom.splice(index, 1);
        localStorage.setItem("wisdom", JSON.stringify(wisdom));
        renderWisdom();
    })

      output.appendChild(p);
        output.appendChild(x);
  });
}

const stored = localStorage.getItem("wisdom");
if (stored) {
  wisdom = JSON.parse(stored);
  renderWisdom();
}

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  wisdom.push({ text: text });
  renderWisdom();

  if (wisdom.length % 2 === 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
    console.log("Saved to localStorage:", wisdom);
  }

  input.value = "";
});

input.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        button.click();
        return;
    }
})

clear.addEventListener("click", () =>{
    localStorage.removeItem("wisdom");
    output.innerHTML ="";
})
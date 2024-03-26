let counterEl = document.getElementById("counter");

counterButton.addEventListener("click", increment);
let counter = 0;

function increment() {
  counter++;
  counterEl.innerText = counter;
}

let saveEl = document.getElementById("paragraph");
saveButton.addEventListener("click", save);

function save() {
  let saver = counter + " - ";
  saveEl.textContent += saver;
  counterEl.textContent = 0;
  counter = 0;
}

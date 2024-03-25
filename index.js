let counterEl = document.getElementById("counter");

counterButton.addEventListener("click", increment);
let counter = 0;

function increment() {
  counter++;
  counterEl.innerText = counter;
}

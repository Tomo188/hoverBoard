import "./styles.scss";
const container = document.getElementsByClassName("container");
console.log(container);
const colors = ["#ddb0b2", "#5930da", "#e9423a", "#92b97b", "#a99189"];
const Squares = 500;
for (let i = 0; i < Squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container[0].append(square);
  square.addEventListener("mouseover", () => addColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
}
function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
}
function addColor(element) {
  const random = Math.round(Math.random() * 4);
  console.log(random);
  element.style.backgroundColor = colors[random];
}

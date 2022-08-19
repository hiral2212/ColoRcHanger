const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
//on the button click color will be chnage.
btn.addEventListener("click", function () {
  let hexColor = "#";
  //hex[0]
 // hexColor = hex[0];
  //hex[1]
  //hexColor = hex[1];
  //hex[2]
  //hexColor = hex[2];
  //hex[3]
  //loop is 0 to 6.  
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
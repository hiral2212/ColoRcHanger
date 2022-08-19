const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//array of the colors .
//colors[0]=green

//array of the colors .
//colors[1]=red

//array of the colors .
//colors[2]=rgba(133,122,200)

//array of the colors   
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
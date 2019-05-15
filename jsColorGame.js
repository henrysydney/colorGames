console.log("connected");
var numberOfSquare = 6;
var colors = generateRandomColors(numberOfSquare);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');


easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numberOfSquare = 3;
    colors = generateRandomColors(numberOfSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
      if (colors[i]){
        //change each color to match given colors
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    }
});
// check test uplaod github
hardButton.addEventListener("click", function(){
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  numberOfSquare = 6;
  colors = generateRandomColors(numberOfSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block"
  }
});

resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numberOfSquare);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent ="";
  //change colors squares
  for(var i = 0; i<squares.length; i++){
    //change each color to match given colors
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Color";
});

// replace RGB to textContent
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
  //add initial color to square
  squares[i].style.backgroundColor = colors[i];

  //add click addEventListener to each squares
  squares[i].addEventListener("click", function(){
    //graph color of clicked squares
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor);
    // compare color to pickedColor
    if(clickedColor === pickedColor){
      changeColors(clickedColor);
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again";
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor  = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color){
  //loop through all squares
  for(var i = 0; i<squares.length; i++){
    //change each color to match given colors
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  // Math.floor(Math.random() * 6
  //maximum is 5
  //Math.floor to cut off all number after dot
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num){
  // make an array
  var arr = [];
  //add num random colors to array
  for(var i=0; i<num;i++){
    //get random color and push to array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor(){
  //pick r from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick g from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick b from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}

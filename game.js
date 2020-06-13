var numberOfSquares = 6;
var colors = []
var pickedcolor;
var squares = document.querySelectorAll(".square");
var rgb=document.querySelector(".rgbcolor");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
// var easybtn = document.getElementById("easy");
// var hardbtn = document.getElementById("hard");
var modebutton = document.querySelectorAll(".mode");
init();

function init(){

    setupModeButtons();
    setupSquares();
    reset();

}
function setupSquares(){

    for(var i=0;i<squares.length;i++){
        //Add EventListeners to ths squares
        squares[i].addEventListener("click",function(){
            var usercolor = this.style.backgroundColor;
            if(usercolor === pickedcolor){
                messageDisplay.innerHTML="<span>Correct  <img src=\"icon/52707-party-popper-icon.png\"></span>";
                header.style.backgroundColor = usercolor;
                resetbutton.textContent = "Play Again";
                document.body.background = confetti();
                changeColor(pickedcolor);
            }
            else
            {
                this.style.backgroundColor="#232323"
                messageDisplay.textContent="Try Again"
            }
        });
    }

}

function setupModeButtons(){
    
    for(var i = 0; i < modebutton.length; i++){
        modebutton[i].addEventListener("click", function(){
            modebutton[0].classList.remove("selected");
            modebutton[1].classList.remove("selected");
            modebutton[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy")
                numberOfSquares = 3;
            else if(this.textContent === "Medium")
                numberOfSquares = 6;
            else
                numberOfSquares = 9;
            reset();
        })
    }

}

function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedcolor = pickColor(colors);
    for(var i = 0; i < squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
            squares[i].style.display = "none";
    }
    rgb.textContent = pickedcolor.substring(3);
    header.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetbutton.textContent = "new colors"
}
//To reset Colors (Alternate version).
// easybtn.addEventListener("click",function(){
//     easybtn.classList.add("selected");
//     hardbtn.classList.remove("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedcolor = pickColor(colors);
//     for(var i = 0; i < squares.length;i++){
//         if(colors[i])
//             squares[i].style.backgroundColor = colors[i];
//         else
//             squares[i].style.display = "none";
//     }
//     rgb.textContent = pickedcolor.substring(3);
//     header.style.backgroundColor = "steelblue";
//     messageDisplay.textContent = "";
//     resetbutton.textContent = "new color"
// })
// hardbtn.addEventListener("click",function(){
//     hardbtn.classList.add("selected");
//     easybtn.classList.remove("selected");
//     numberOfSquares = 6
//     colors = generateRandomColors(numberOfSquares);
//     pickedcolor = pickColor(colors);
//     for(var i = 0; i < squares.length;i++){
//             squares[i].style.backgroundColor = colors[i];
//             squares[i].style.display = "block";
//         }
//         rgb.textContent = pickedcolor.substring(3);
//         header.style.backgroundColor = "steelblue";
//         messageDisplay.textContent = "";
//         resetbutton.textContent = "new color";
// })
resetbutton.addEventListener("click",function(){
   reset();
})

//To set the heading with picked RGB.
function changeColor(color) {
    //loop through all squares
    for (var i=0;colors.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(colors) {
    var random_number=Math.floor(Math.random() * colors.length)
    return colors[random_number];
}

function randomColor() {
    //pick a "red" from 0 - 255
    var red = Math.floor(Math.random()*256);
    //pick a "green" from 0 - 255
    var green = Math.floor(Math.random()*256);
    //pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random()*256);
    var picked = "rgb(" + red +", "+ green + ", " + blue +")";
    return picked;
}

function generateRandomColors(num) {
    var colorspicked = [];
    for(var i=0; i < num; i++){
        colorspicked.push(randomColor());
    }
    return colorspicked;
}


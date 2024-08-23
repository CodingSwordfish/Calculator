let operator = "";
let previousValue = "";
let currentValue = "";

let clear =document.querySelector("#clear");
let equals = document.querySelector("#equals");
let decimal = document.querySelector("#decimal");
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");

 numbers.forEach((number)=>{
number.addEventListener("click",(e)=>{
    handleNumber(e.target.textContent);
    currentScreen.textContent= currentValue;
})
 })

 function handleNumber(num){
    if(currentValue.length <5){
        currentValue+= num;
    }

 }
let currentValue="";
let previousValue="";
let operator = "";

// Get references to the main elements
const calculator = document.getElementById('calculator');
const largeScreen = document.getElementById('largeScreen');
const prevScreen = document.getElementById('prevScreen');
const currentScreen = document.getElementById('currentScreen');

// Get references to the number buttons
const numberButtons = document.querySelectorAll('#numbers');

// Get references to the operator buttons
const operatorButtons = document.querySelectorAll('#operator');

// Get references to other buttons
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');


numberButtons.forEach((button)=>{
button.addEventListener("click",(e)=>{
  console.log("hii")
  });
})

operatorButtons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
    console.log("Helloo")
  })
})

equalsButton.addEventListener("click",(e)=>{
  console.log("equals")
})

decimalButton.addEventListener("click",(e)=>{
  console.log("decimal")
})



function handleNumbers(){

}

function handleOp(){

}

function clear(){

}
  
function calculate (){

}

function handleDecimal(){

}
  



 
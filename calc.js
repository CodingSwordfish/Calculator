// Get references to the main elements
const calculator = document.getElementById("calculator");
const largeScreen = document.getElementById("largeScreen");
const prevScreen = document.getElementById("prevScreen");
const currentScreen = document.getElementById("currentScreen");

// Get references to the number buttons
const numberButtons = document.querySelectorAll(".numbers");

// Get references to the operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// Get references to other buttons
const decimalButton = document.getElementById("decimal");
const equalsButton = document.getElementById("equals");

// Get reference to the AC button
const clearAll = document.querySelector("#ac");

//Get reference to the delete button
const del = document.querySelector("#del");

let currentValue = "";
let previousValue = "";
let operator = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleNumbers(e.target.textContent);
    currentScreen.textContent += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleOp(e.target.textContent);
    prevScreen.textContent = previousValue + "" + operator;
    currentScreen.textContent = currentValue;
    console.log(e);
  });
});

equalsButton.addEventListener("click", (e) => {
  console.log("equals");
});

decimalButton.addEventListener("click", (e) => {
  console.log("decimal");
});

clearAll.addEventListener("click", (e) => {
  currentValue = "";
  previousValue = "";
  currentScreen.textContent = "";
  prevScreen.textContent = "";
  operator = "";
});

del.addEventListener("click", (e) => {
  currentValue = currentValue.slice(0, -1);
  currentScreen.textContent = currentValue;
});

function handleNumbers(num) {
  currentValue += num;
}

function handleOp(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {}

function handleDecimal() {}

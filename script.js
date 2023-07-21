let currentInput = '';
let currentOperator = '';
let result = 0;
let isCalculated = false;

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  result = 0;
  isCalculated = false;
  updateDisplay();
}

function appendNumber(number) {
  if (isCalculated) {
    currentInput = '';
    isCalculated = false;
  }
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (isCalculated) {
    isCalculated = false;
  }
  currentOperator = operator;
  currentInput += ' ' + operator + ' ';
  updateDisplay();
}

function calculate() {
  try {
    result = eval(currentInput);
    currentInput = result;
    isCalculated = true;
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    isCalculated = true;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}

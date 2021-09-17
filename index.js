var numbersEl = document.getElementById('numbers');
var clearButtonEl = document.getElementById('clearButton');
var resultButtonEl = document.getElementById('resultButton');
var numberButtons = document.querySelectorAll('.countButton');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numberButtonClickListener);
}
var operationButtons = document.getElementsByClassName('operation-button');
for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
}
clearButtonEl.addEventListener("click", clear);
resultButtonEl.addEventListener('click', onResultButtonClick);
var operationLog = document.getElementById('operationLog');

// vvod 4isla 1
function numberButtonClickListener(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var addNumber = clickedElement.innerHTML;
    if (numbersEl.value === '0') {
        numbersEl.value = addNumber;
    } else {
        numbersEl.value = numbersEl.value + addNumber;

    }
    // console.log(numbersEl.value);
}
function clear() {
    numbersEl.value = 0;
}
// vibor operacii i zapominanie 1 4isla
function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    operation = clickedElement.innerHTML;
    number1 = Number(numbersEl.value);
    logg();
    clear();
}

function logg() {
    operationLog.innerText = number1 + operation;
    console.log('First number : ' + number1);
    console.log('operation : ' + operation);
}
// calc result
function onResultButtonClick() {
    var number2 = Number(numbersEl.value);
    if (operation === '+') {
        var result = plus(number1, number2);
    } else {
        if (operation === '-') {
            var result = minus(number1, number2);
        } else {
            if (operation === '*') {
                var result = multiply(number1, number2);
            } else {
                if (operation === '/') {
                    var result = divide(number1, number2);
                }
            }
        }
    }
    console.log('Second number : ' + number2);
    console.log('Result : ' + result);
    console.log('Next operation');
    numbersEl.value = result;
    operationLog.innerText = operationLog.innerText + number2 +'='+ result;
}


// add
const add = (a, b) => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    const total = num1 + num2;

    return Math.round(total * 10) / 10;
};


// subtract
const sub = (a,b) => {
    const total = a - b;
    return Math.round(total * 10) / 10;
}

// multiply
const multi = (a,b) => {
    const total = a * b;
    return Math.round(total * 10) / 10;
}

// divide
const divide = (a,b) => {
    return Math.round(a/b * 10) / 10;
}

// 
const operate = (operator,a,b) => {
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return sub(a,b);
        case 'x':
            return multi(a,b);
        case '/':
            return divide(a,b);
        default:
            return a;
    }
}

let currentNumber = 0;
let nextNumber = 0;
let operationSelect = '';

let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

let isNewNumber = true;
let isNextNumber = false;

numButtons.forEach(button => {
    button.addEventListener('click', function(){
        const screen = document.querySelector('.screen');
        let currentContent = screen.textContent;

        // if statement allows for the ability to string numbers together in succession
        if (isNewNumber) { // if it is a new number, can enter a fresh number
            screen.textContent = button.textContent;
            isNewNumber = false; // set false so more than 2 digit integers can be made
            console.log(isNewNumber)
        } else { // when false, allows user to string together multi digit numbers.
            const newContent = currentContent === '0' ? button.textContent : currentContent + button.textContent;
            screen.textContent = newContent;
            decimal.disabled = true;
        }

      })
   })

opButtons.forEach(button => {
    button.addEventListener('click', function(){
        // on operator button click save current number into a variable
        const screen = document.querySelector('.screen');
        let currentContent = screen.textContent;

        if (!isNextNumber) {
            // If the user is continuing the current number, set currentNumber
            currentNumber = currentContent;
            isNextNumber = true;
            decimal.disabled = false;
        } else {
            // while isNextNumber is true, set the nextNumber and perform the operate function
            nextNumber = currentContent;
            let calc = operate(operationSelect, currentNumber, nextNumber)
            screen.textContent = calc;
            currentNumber = calc;
            console.log('calc', calc)
        }

        // set operater value to variabe and reset screen
        operationSelect = button.value;
        isNewNumber = true;
      })
})

// event listener for clear button
clear.addEventListener('click', function(){
    // clear screen and revert all values to default
    document.querySelector('.screen').textContent = 0;
    currentNumber = 0;
    nextNumber = 0;
    operationSelect = '';
    isNewNumber = true;
    isNextNumber = false;
    decimal.disabled = false;
})

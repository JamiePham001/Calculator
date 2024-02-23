// add
const add = (a,b) => {
    return a+b;
}

// subtract
const sub = (a,b) => {
    return a-b;
}

// multiply
const multi = (a,b) => {
    return a*b;
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

// document.addEventListener('DOMContentLoaded', () => {

// })

let buttons = document.querySelectorAll('.number');
const clear = document.querySelector('.clear')

buttons.forEach(button => {
    button.addEventListener('click', function(){
        const screen = document.querySelector('.screen');
        const currentContent = screen.textContent;
        const newContent = currentContent === '0' ? button.textContent : currentContent + button.textContent;
        screen.textContent = newContent;
      })
   })

clear.addEventListener('click', function(){
    document.querySelector('.screen').textContent = 0;
})

// store number inputs as variables. i.e, num1, num2
// use the operate function when user clicks the operator button
// disable button upon pressing an operator button. Some exceptions are the subtract operator to allow for negative numbers during multiplication...
// on press of multiplication display the 'x' symbol and in the actual calculation use '*'
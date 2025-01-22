import { add, subtract, multiply, divide } from './second.js';

const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === '=' && operator) {
            const a = parseFloat(previousInput);
            const b = parseFloat(currentInput);

            try {
                let result;
                switch (operator) {
                    case '+': result = add(a, b); break;
                    case '-': result = subtract(a, b); break;
                    case '*': result = multiply(a, b); break;
                    case '/': result = divide(a, b); break;
                }
                display.textContent = result;
                previousInput = result.toString();
                currentInput = '';
                operator = '';
            } catch (error) {
                display.textContent = error.message;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

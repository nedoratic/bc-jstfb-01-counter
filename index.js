// DOM elements
const display = document.querySelector('.app__display');
const decrementBtn = document.querySelector('.btn--decrement');
const resetBtn = document.querySelector('.btn--reset');
const incrementBtn = document.querySelector('.btn--increment');

// State
let count = 0;

// Update Display function
const updateDisplay = () => {
	display.textContent = count;
};

// Decrement function
const decrement = () => {
	count--;
	updateDisplay();
};

// Reset function
const reset = () => {
	count = 0;
	updateDisplay();
};

// Increment function
const increment = () => {
	count++;
	updateDisplay();
};

// Event listeners
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
incrementBtn.addEventListener('click', increment);

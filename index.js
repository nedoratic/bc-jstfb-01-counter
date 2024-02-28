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

// Initial display update
updateDisplay();

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

// Event listeners for on click events
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);
incrementBtn.addEventListener('click', increment);

// Function to handle keydown events
function handleKeyDown(event) {
	// Check which key was pressed and call the corresponding function
	switch (event.key) {
		case 'ArrowDown':
		case 'ArrowLeft':
			decrement();
			break;
		case 'Escape':
		case 'Backspace':
			reset();
			break;
		case 'ArrowUp':
		case 'ArrowRight':
			increment();
			break;
		default:
			// Ignore other keys
			break;
	}
}

// Event listener for keydown events
document.addEventListener('keydown', handleKeyDown);

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
    } 
    else if (value === '⌫') {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } 
    else if (value === '=') {
      try {
        currentInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } 
    else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Keyboard Support
document.addEventListener('keydown', e => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
    currentInput += key;
    display.value = currentInput;
  } 
  else if (key === 'Enter') {
    try {
      display.value = eval(currentInput);
      currentInput = display.value;
    } catch {
      display.value = 'Error';
      currentInput = '';
    }
  } 
  else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } 
  else if (key.toLowerCase() === 'c') {
    currentInput = '';
    display.value = '';
  }
});

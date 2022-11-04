import { createModal } from './modal.js';
import PinPad from './pin-pad.js';
import * as Functionality from './functionality.js';
import { createAttemptsAlert } from './attemptsAlert.js';

const pinpad = new PinPad({ maxAttempts: 3, maxPinSize: 6 });

// add event listeners
const buttonsList = pinpad.el.numPad.querySelectorAll(
  '.pinpad__numbers-button'
);
buttonsList.forEach((button) => {
  button.addEventListener('click', () => {
    Functionality.handleButtonPress(button.textContent, pinpad);
  });
});

pinpad.el.displayText.addEventListener('input', () => {
  Functionality.handleKeyedValues(pinpad);
});
pinpad.el.displayText.addEventListener('click', () => {
  Functionality.handleKeyedValues(pinpad);
});

pinpad.el.visibilityButton.addEventListener('click', () => {
  Functionality.handleVisibiltyButton(pinpad);
});

// set up modals where necessary
createModal(pinpad);
createAttemptsAlert(pinpad.attempts);

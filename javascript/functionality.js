import { createModal } from './modal.js';
import { updateAttemptsRemaining } from './attemptsAlert.js';

// handler for values entered in input via buttons
export function handleButtonPress(keyText, pinpad) {
  if (keyText == 'C') {
    pinpad.inputValue = '';
    pinpad.el.displayText.value = pinpad.inputValue;
  } else if (keyText == 'Save') {
    savePin(pinpad);
  } else if (keyText == 'Ok') {
    validatePin(pinpad);
  } else if (pinpad.inputValue.length < pinpad.maxPinSize) {
    pinpad.inputValue += keyText;
    handleDisplay(pinpad);
  }
}

// handler for values entered in input via keyboard
export function handleKeyedValues(pinpad) {
  const { displayText } = pinpad.el;

  if (
    displayText.value == 'WRONG' ||
    displayText.value == 'SAVED' ||
    displayText.value == 'ERROR' ||
    displayText.value == 'NOT A NUMBER'
  ) {
    handleButtonPress('C', pinpad);
  } else {
    pinpad.inputValue = displayText.value;
  }
  handleDisplay(pinpad);
}

// applies styles for messages displayed on screen
function configDisplayForMessages(pinpad, text, isError) {
  let { displayText, visibilityButton, screen } = pinpad.el;

  displayText.type = 'text';
  visibilityButton.classList.add('no-visibility');
  displayText.value = text;
  if (isError == true) {
    screen.classList.add('incorrect-input');
  } else {
    displayText.classList.add('success-message');
  }
  pinpad.inputValue = '';
  setTimeout(() => {
    handleButtonPress('C', pinpad);
    handleDisplay(pinpad);
  }, 1000);
}

// handles saving the PIN
function savePin(pinpad) {
  if (/^[0-9]+$/.test(pinpad.inputValue)) {
    pinpad.secretPin = pinpad.inputValue;
    window.localStorage.setItem('secretPin', pinpad.inputValue);
    configDisplayForMessages(pinpad, 'SAVED', false);
    document.getElementById('validation-button').textContent = 'Ok';

    setTimeout(() => {
      createModal(pinpad);
      handleDisplay(pinpad);
    }, 1500);
  } else {
    configDisplayForMessages(pinpad, 'NOT A NUMBER', true);
  }
}

// handles URL redirections and attempts alert for PIN validation
function validatePin(pinpad) {
  if (pinpad.inputValue == pinpad.secretPin) {
    configDisplayForMessages(pinpad, 'CORRECT', false);
    setTimeout(() => {
      window.location.replace('https://www.codebay-innovation.com');
    }, 1500);
  } else {
    configDisplayForMessages(pinpad, 'WRONG', true);

    pinpad.attempts -= 1;
    document.getElementById('attempts-alert').style.display = 'block';
    updateAttemptsRemaining(pinpad.attempts);

    setTimeout(() => {
      handleButtonPress('C', pinpad);
      handleDisplay(pinpad);
    }, 1000);
  }

  if (pinpad.attempts === 0) {
    window.location.replace('https://policia.es/');
  }
}

// handles styling for visibility icon when clicked
export function handleVisibiltyButton(pinpad) {
  if (pinpad.visibility == 'visible') {
    pinpad.visibility = 'password';
  } else {
    pinpad.visibility = 'visible';
  }
  handleDisplay(pinpad);
}

// handles display styling when visibility icon is clicked
function handleDisplay(pinpad) {
  const { screen, displayText, visibilityButton } = pinpad.el;

  screen.classList.remove('incorrect-input');
  displayText.classList.remove('success-message');
  if (pinpad.visibility == 'visible') {
    visibilityButton.classList.remove('no-visibility');
    displayText.type = 'text';
    visibilityButton.textContent = 'visibility';
    displayText.value = pinpad.inputValue;
  } else if (pinpad.visibility == 'password') {
    displayText.value = '*'.repeat(pinpad.inputValue.length);
    visibilityButton.textContent = 'visibility_off';
    visibilityButton.classList.remove('no-visibility');
  }
}

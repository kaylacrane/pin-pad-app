export default class PinPad {
  constructor({ maxAttempts, maxPinSize }) {
    this.secretPin = window.localStorage.getItem('secretPin');
    this.maxPinSize = maxPinSize;
    this.attempts = maxAttempts;
    this.visibility = 'visible';
    this.inputValue = '';

    // build the pinpad
    this._buildPinpadCase();
    this._buildScreen();
    this._buildButtons();

    // identify important elements
    this.el = {
      main: document.getElementById('main-element'),
      numPad: document.querySelector('.pinpad__numbers'),
      screen: document.querySelector('.pinpad__screen'),
      displayText: document.querySelector('.pinpad__screen-text'),
      visibilityButton: document.querySelector('.pinpad__screen-visibility'),
    };
  }

  _buildPinpadCase() {
    const pinpadBack = document.createElement('div');
    pinpadBack.className = 'pinpad__back';
    document.querySelector('body').appendChild(pinpadBack);

    const pinpadFront = document.createElement('div');
    pinpadFront.className = 'pinpad__front';
    pinpadFront.setAttribute('id', 'main-element');
    pinpadBack.appendChild(pinpadFront);
  }

  _buildScreen() {
    const screen = document.createElement('div');
    screen.className = 'pinpad__screen';
    document.getElementById('main-element').appendChild(screen);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'pinpad__screen-text';
    screen.appendChild(input);

    const visibilityIcon = document.createElement('button');
    visibilityIcon.classList.add(
      'material-symbols-outlined',
      'pinpad__screen-visibility'
    );
    visibilityIcon.textContent = 'visibility';
    screen.appendChild(visibilityIcon);
  }

  _buildButtons() {
    const numpad = document.createElement('div');
    numpad.className = 'pinpad__numbers';

    const buttonsList = [
      '7',
      '8',
      '9',
      '4',
      '5',
      '6',
      '1',
      '2',
      '3',
      'C',
      '0',
      'Save/Ok',
    ];

    buttonsList.forEach((key) => {
      const keyElement = document.createElement('button');
      keyElement.classList.add('pinpad__numbers-button');
      keyElement.textContent = key;
      if (key == 'C') {
        keyElement.classList.add('button-red');
      } else if (key == 'Save/Ok') {
        keyElement.classList.add('button-green');
        keyElement.setAttribute('id', 'validation-button');

        this.secretPin
          ? (keyElement.textContent = 'Ok')
          : (keyElement.textContent = 'Save');
      }

      numpad.appendChild(keyElement);
      document.getElementById('main-element').appendChild(numpad);
    });
  }
}

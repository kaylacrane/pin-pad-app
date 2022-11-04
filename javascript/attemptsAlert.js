export function createAttemptsAlert(attempts) {
  // create alert div
  const body = document.querySelector('body');
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('attempts-alert');
  alertDiv.setAttribute('id', 'attempts-alert');

  // create messaging
  const message = document.createElement('p');
  message.classList.add('attempts-alert__message');
  message.innerHTML = `¡El pin no es correcto, te quedan <span id="attempts-remaining-number">${attempts}</span> intentos!`;

  alertDiv.appendChild(message);
  body.appendChild(alertDiv);
  if (attempts == 3) {
    alertDiv.style.display = 'none';
  }
}

// handles updating number of attempts remaining in the messaging above
export function updateAttemptsRemaining(attempts) {
  const attemptsSpan = document.getElementById('attempts-remaining-number');
  attemptsSpan.textContent = attempts;
}

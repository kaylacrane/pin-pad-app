export function createModal(pinpad) {
  const body = document.querySelector('body');
  const modalDiv = document.createElement('div');
  modalDiv.classList.add('modal');
  modalDiv.setAttribute('id', 'modal-window');
  body.appendChild(modalDiv);

  const closeIcon = document.createElement('button');
  closeIcon.textContent = 'close';
  closeIcon.classList.add('material-symbols-outlined', 'modal__close-icon');
  closeIcon.setAttribute('tabindex', '1');
  closeIcon.addEventListener('click', (e) => {
    closeWindow(e);
  });
  modalDiv.appendChild(closeIcon);

  const modalTitle = document.createElement('h3');
  modalTitle.className = 'modal__title';

  const modalText = document.createElement('p');
  modalText.className = 'modal__text';

  if (pinpad.secretPin == null) {
    modalTitle.textContent = 'Bienvenido a Pinpad';
    modalText.innerHTML =
      'Introduce un numero de 6 dígitos y dale a guardar.<br/>La proxima vez podrás usar tu numero para acceder.';
  } else {
    modalTitle.textContent = 'Introduce tu código';
    modalText.innerHTML =
      'Introduce un numero de 6 dígitos para continuar (tienes 3 intentos).';
  }

  modalDiv.appendChild(modalTitle);
  modalDiv.appendChild(modalText);
}

function closeWindow(e) {
  const modalWindow = e.target.parentNode;
  modalWindow.remove();
}

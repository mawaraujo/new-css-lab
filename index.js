const button = document.querySelector('#remove-input-button')

function removeInputElement() {
  const input = document.querySelector('.input-component')
  input.remove()
  button.remove()
}

button.addEventListener('click', removeInputElement)
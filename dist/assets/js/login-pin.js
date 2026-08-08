const inputPin = document.querySelector('input');
const buttonLanjutkan = document.querySelector('button');

buttonLanjutkan.addEventListener('click', () => {
  if (inputPin.value.trim().length === 6) {
    window.location.href = 'dashboard.html';
  } else {
    alert('Pin harus berisi 6 digit');
  }
});

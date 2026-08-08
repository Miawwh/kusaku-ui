const inputEmail = document.querySelector('input');
const buttonLanjutkan = document.querySelector('button');

buttonLanjutkan.addEventListener('click', () => {
  if (inputEmail.value.trim().length >= 1) {
    if (window.getComputedStyle(inputEmail).color === 'rgb(127, 29, 29)') {
      alert('Masukkan email dengan benar!');
      inputEmail.value = '';
    } else {
      window.location.href = 'login-pin.html';
    }
  } else {
    alert('Masukkan email');
  }
});

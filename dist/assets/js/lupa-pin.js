const inputEmail = document.querySelector('input');
const buttonReset = document.querySelector('button');

buttonReset.addEventListener('click', () => {
  if (window.getComputedStyle(inputEmail).color === 'rgb(127, 29, 29)') {
    alert('Isi email dengan benar');
  } else if (inputEmail.value.trim().length >= 1) {
    window.location.href = 'riset-pin.html';
  } else {
    alert('Isi email terlebih dahulu!');
  }
});

const inputanPin = document.querySelectorAll('input');
const buttonLanjutkan = document.querySelector('button');

buttonLanjutkan.addEventListener('click', () => {
  if (
    inputanPin[0].value.trim().length === 6 &&
    inputanPin[1].value.trim().length === 6
  ) {
    if (inputanPin[0].value === inputanPin[1].value) {
      window.location.href = 'konfirmasi.html';
    } else {
      alert('Pin tidak sama!');
    }
  } else {
    alert('Pin harus berisi 6 digit');
  }
});

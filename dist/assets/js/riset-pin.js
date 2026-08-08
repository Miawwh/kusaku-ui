const inputPin = document.querySelectorAll('input');
const buttonRiset = document.querySelector('button');

buttonRiset.addEventListener('click', () => {
  if (inputPin[0].value.trim().length === 6) {
    if (inputPin[0].value.trim().length === inputPin[1].value.trim().length) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Pin tidak sama');
    }
  } else {
    alert('Masukkan Pin');
  }
});

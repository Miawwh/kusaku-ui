const formRegister = document.querySelectorAll('input');
const lanjutkan = document.querySelector('button');

lanjutkan.addEventListener('click', () => {
  if (
    formRegister[0].value.trim().length >= 3 &&
    formRegister[1].value.trim().length >= 3
  ) {
    if (window.getComputedStyle(formRegister[1]).color === 'rgb(127, 29, 29)') {
      alert('Isi email dengan benar!');
    } else {
      window.location.href = 'register-pin.html';
    }
  } else {
    alert('Jangan lupa mengisi input "Nama" & "Email" minimal 3 kata');
  }
});

alert(
  'Mohon bertunggu dalam beberapa detik, untuk dipindahkan ke halaman dashboard',
);

setTimeout(() => {
  window.location.href = 'dashboard.html';
}, 3000);

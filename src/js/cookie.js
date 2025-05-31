const popup = document.getElementById('cookiePopup');
const buttons = document.querySelectorAll('.cookie-buttons .btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'none';
  });
});

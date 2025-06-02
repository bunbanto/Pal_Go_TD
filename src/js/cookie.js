const popup = document.getElementById('cookiePopup');
const buttons = document.querySelectorAll('.cookie-buttons .btn');

if (localStorage.getItem('cookiesAccepted') === 'true') {
  popup.style.display = 'none';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('accept')) {
      localStorage.setItem('cookiesAccepted', 'true');
    }
    popup.style.display = 'none';
  });
});

const popup = document.querySelector('[data-cookie-popup]');
const acceptBtn = document.querySelector('[data-cookie-accept]');
const declineBtn = document.querySelector('[data-cookie-decline]');

if (popup) {
  if (localStorage.getItem('cookiesAccepted') !== null) {
    popup.classList.add('hidden');
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      popup.classList.add('hidden');
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'false');
      popup.classList.add('hidden');
    });
  }
}
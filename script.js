const PHONE_NUMBER = '+1234567890';
const DEFAULT_MESSAGE =
  'Hello! I would like to schedule an executive ride. Could you please help me?';

function buildWhatsAppUrl(phone, message) {
  const sanitizedPhone = phone.replace(/[^\d+]/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${sanitizedPhone.replace('+', '')}?text=${encodedMessage}`;
}

function attachWhatsAppHandlers() {
  const buttons = document.querySelectorAll('.cta-whatsapp');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const phone = button.dataset.phone || PHONE_NUMBER;
      const message = button.dataset.message || DEFAULT_MESSAGE;
      window.open(buildWhatsAppUrl(phone, message), '_blank', 'noopener');
    });
  });
}

function setCurrentYear() {
  const target = document.getElementById('copyright-year');
  if (target) {
    target.textContent = new Date().getFullYear();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  attachWhatsAppHandlers();
  setCurrentYear();
});

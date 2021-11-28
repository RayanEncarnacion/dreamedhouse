// Stop page reload on form submittion
const form = document.querySelector('form');
const formBtn = form.querySelector('.accent-btn');

const showMessage = e => {
  e.preventDefault();

  if (form.querySelector('.message')) return;

  const message = '<p class="submit-message">Your message has been sent!</p>';

  formBtn.insertAdjacentHTML('beforebegin', message);
  form.reset();

  setTimeout(() => {
    form.querySelector('.submit-message').remove();
  }, 5000);
};

export default function () {
  form.addEventListener('submit', showMessage);
}

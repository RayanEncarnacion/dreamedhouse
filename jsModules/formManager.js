// Stop page reload on form submittion
const form = document.querySelector('form');
const formBtn = form.querySelector('.accent-btn');

export default function () {
  form.reset();

  formBtn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('form').reset();
  });
}

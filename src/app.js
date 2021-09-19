import { menuInit } from '../jsModules/overlayMenu';

window.addEventListener('load', () => {
  document.querySelector('form').reset();
  menuInit();

  // Stop page reload on form submittion
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
  });
});

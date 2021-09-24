const header = document.querySelector('header');
const overlayMenu = document.querySelector('.menu-overlay');
// Classes that trigger the menu to show/hide
const menuClasses = ['fas', 'far', 'menu-btn', 'menu-link'];

const menuTransition = () =>
  // if is visible, hide it and viceversa
  overlayMenu.style.transform === `translateX(105%)` ||
  overlayMenu.style.transform === ''
    ? (overlayMenu.style.transform = 'translateX(0)')
    : (overlayMenu.style.transform = '');

export default function () {
  setTimeout(() => (overlayMenu.style.display = 'block'), 2000);
  header.addEventListener('click', e => {
    // If the target contains a trigger class show/hide the menu
    if (menuClasses.some(className => e.target.classList.contains(className))) {
      menuTransition();
    } else return;
  });
}

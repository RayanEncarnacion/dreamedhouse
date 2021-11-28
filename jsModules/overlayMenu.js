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

const toggleMenu = () => {
  overlayMenu.classList.toggle('active');
};

export default function () {
  setTimeout(() => (overlayMenu.style.display = 'block'), 1000);

  header.addEventListener('click', e => {
    menuClasses.some(className => e.target.classList.contains(className))
      ? menuTransition()
      : '';
  });
}

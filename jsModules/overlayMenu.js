const header = document.querySelector('header');
export const overlayMenu = document.querySelector('.menu-overlay');
// Classes that trigger the menu to show/hide
const menuClasses = ['fas', 'far', 'menu-btn', 'menu-link'];

const menuTransition = () => overlayMenu.classList.toggle('active');

export default function () {
  header.addEventListener('click', e => {
    menuClasses.some(className => e.target.classList.contains(className))
      ? menuTransition()
      : '';
  });
}

import { menuInit } from '../jsModules/overlayMenu';
import { nav, navObserver } from '../jsModules/hideScrollText';
import {
  cardsContainers,
  cardsObserver,
  hideCards,
} from '../jsModules/cardsAnimations';

menuInit();

// Stop page reload on form submittion
document.querySelector('form').reset();
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
});

// Animations on desktop
if (document.body.clientWidth >= 100) {
  hideCards();
  navObserver.observe(nav);
  cardsContainers.forEach(container => cardsObserver.observe(container));
}

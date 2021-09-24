import menuInit from '../jsModules/overlayMenu';
import hideScrollText from '../jsModules/hideScrollText';
import cardsAnimation from '../jsModules/cardsAnimations';

menuInit();
hideScrollText();
cardsAnimation();

// Stop page reload on form submittion
document.querySelector('form').reset();
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
});

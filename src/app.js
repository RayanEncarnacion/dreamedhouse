import menuInit, { overlayMenu } from '../jsModules/overlayMenu';
import formSubmittion from '../jsModules/formManager';
import hideScrollText from '../jsModules/hideScrollText';
import cardsAnimation from '../jsModules/cardsAnimations';

menuInit();
hideScrollText();
cardsAnimation();
formSubmittion();

if (window.innerWidth <= 1024)
  setTimeout(() => {
    overlayMenu.style.display = 'block';
  }, 1000);

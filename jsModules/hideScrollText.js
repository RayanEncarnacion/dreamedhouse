export const nav = document.querySelector('nav');
const scrollText = document.querySelector('.scroll-text');

const hideScrollText = e => {
  const [observerEntry] = e;

  if (observerEntry.isIntersecting) return;

  scrollText.style.opacity = 0;
  navObserver.unobserve(nav);
};

export const navObserver = new IntersectionObserver(hideScrollText, {
  root: null,
  threshold: 0,
});

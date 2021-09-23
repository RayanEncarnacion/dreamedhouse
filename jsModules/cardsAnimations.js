const how = document.querySelector('#how');
const agents = document.querySelector('#agents');
const services = document.querySelector('#services');

// cards
const howCards = how.querySelectorAll('.flex-card');
const agentsCards = agents.querySelectorAll('.agent-card');
const servicesCards = services.querySelectorAll('.services-card');

export const cardsContainers = [how, services, agents];

export const hideCards = () => {
  howCards.forEach((card, i) => {
    card.style.transition = `all .5s ${i * 0.3}s linear`;
    card.style.opacity = 0;
    card.style.transform = `translateY(150px)`;
  });
  agentsCards.forEach((card, i) => {
    card.style.transition = `all .5s ${i * 0.3}s linear`;
    card.style.opacity = 0;
    card.style.transform = `translateX(300%)`;
  });
  servicesCards.forEach((card, i) => {
    card.style.transition = `all .5s ${i * 0.3}s linear`;
    card.style.opacity = 0;
    card.style.transform = `translateY(150px)`;
  });
};

const showVerticalCards = card => {
  card.style.opacity = 1;
  card.style.transform = `translateY(0)`;
};
const showHorizontalCards = card => {
  card.style.opacity = 1;
  card.style.transform = `translateX(0)`;
};

const showAllCards = e => {
  const [observerEntry] = e;

  if (!observerEntry.isIntersecting) return;

  if (observerEntry.target.id === 'how') {
    howCards.forEach(card => showVerticalCards(card));
    cardsObserver.unobserve(how);
  } else if (observerEntry.target.id === 'services') {
    servicesCards.forEach(card => showVerticalCards(card));
    cardsObserver.unobserve(services);
  } else {
    agentsCards.forEach(card => showHorizontalCards(card));
    cardsObserver.unobserve(agents);
  }
};

export const cardsObserver = new IntersectionObserver(showAllCards, {
  root: null,
  threshold: 0.2,
});

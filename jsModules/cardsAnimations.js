import { gsap } from 'gsap';

const howCards = document.querySelectorAll('.flex-card');
const servicesCards = document.querySelectorAll('.services-card');
const agentsCards = document.querySelectorAll('.agent-card');
const allCards = document.querySelectorAll(
  '.flex-card, .services-card, .agent-card'
);

const how = document.getElementById('how');
const services = document.getElementById('services');
const agents = document.getElementById('agents');
const cardsContainers = document.querySelectorAll('#how, #services, #agents');

const animateHow = () => {
  gsap.fromTo(
    '.flex-card',
    { y: 100 },
    { y: 0, opacity: 1, stagger: 0.3, duration: 1.2 }
  );
  containersObserver.unobserve(how);
};

const animateServices = () => {
  gsap.fromTo(
    '.services-card',
    { y: 100 },
    { y: 0, opacity: 1, stagger: 0.3, duration: 1.2 }
  );
  containersObserver.unobserve(services);
};

const animateAgents = () => {
  gsap.fromTo(
    '.agent-card',
    { x: 200 },
    { x: 0, opacity: 1, stagger: 0.3, duration: 1.2 }
  );
  containersObserver.unobserve(agents);
};

const animateCards = e => {
  const [entry] = e;
  if (!entry.isIntersecting) return;

  console.log(entry);

  const currentContainer = entry.target.id;

  currentContainer === 'how'
    ? animateHow()
    : currentContainer === 'services'
    ? animateServices()
    : currentContainer === 'agents'
    ? animateAgents()
    : '';
};

const containersObserver = new IntersectionObserver(animateCards, {
  root: null,
  threshold: 0.2,
});

export default function () {
  cardsContainers.forEach(container => containersObserver.observe(container));
  allCards.forEach(card => {
    card.addEventListener('mouseover', e => {
      console.log(card);
      e.target.classList.add('hover');
      gsap.to('.flex-card', { y: 10 });
    });
  });
}

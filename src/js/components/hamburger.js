const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

const removeClass = (element, className) => {
  element.classList.remove(className);
};

const updateBodyAndNavClasses = (isActive) => {
  const body = document.querySelector('body');
  const nav = document.querySelector('.nav__list');
  const hamburgerButton = document.getElementById('hamburger');

  if (isActive) {
    toggleClass(body, 'fixed');
    toggleClass(nav, 'active');
    toggleClass(hamburgerButton, 'active');
  } else {
    removeClass(body, 'fixed');
    removeClass(nav, 'active');
    removeClass(hamburgerButton, 'active');
  }
};

const toggleMobileNavigation = () => updateBodyAndNavClasses(true);
const closeMobileNav = () => updateBodyAndNavClasses(false);

const initEventListeners = () => {
  const hamburgerButton = document.getElementById('hamburger');
  const navLinks = document.querySelectorAll('.nav__link');

  hamburgerButton.addEventListener('click', toggleMobileNavigation);
  navLinks.forEach((link) => link.addEventListener('click', closeMobileNav));
};

initEventListeners();

const getAnchorLinks = () => document.querySelectorAll('a[href*="#"]');

const smoothScrollTo = (blockID) => {
  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const handleAnchorClick = (e) => {
  e.preventDefault();
  const blockID = e.currentTarget.getAttribute('href').substr(1);
  smoothScrollTo(blockID);
};

const initAnchorLinks = () => {
  const anchors = getAnchorLinks();
  anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
};

initAnchorLinks();

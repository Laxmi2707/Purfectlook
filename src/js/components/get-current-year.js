const getCurrentYear = () => new Date().getFullYear();

const setCopyrightYearRange = (startYear, outputSelector) => {
  const footerCopy = document.querySelector(outputSelector);
  const startCopyYear = startYear;

  if (getCurrentYear() > startCopyYear) {
    footerCopy.innerHTML = `${startCopyYear} - ${getCurrentYear()}`;
  }
};

setCopyrightYearRange(2023, '.footer__copy span');

export const scrollToSection = (sectionId: string): void => {
  const element = document.querySelector(sectionId);
  if (element) {
    const offset = 80; // Height of navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

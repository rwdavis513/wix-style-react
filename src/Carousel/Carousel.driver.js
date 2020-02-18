export const carouselDriverFactory = ({ element }) => {
  // It turns out that react-slick duplicates the children, so we ditch the cloned nodes
  const withoutClonedNodes = (selector = '') =>
    `.slick-slide:not(.slick-cloned) ${selector}`;

  return {
    exists: () => !!element,
    isLoading: () => {
      const loader = element.querySelector('[data-hook="loader"]');
      return !!loader;
    },
    getChildren: () => element.querySelectorAll(withoutClonedNodes()),
    getImages: () => {
      // Converting the result from NodeList to a real array
      return [
        ...element.querySelectorAll(
          withoutClonedNodes('[data-hook="carousel-img"]'),
        ),
      ].map(img => img.src);
    },
  };
};

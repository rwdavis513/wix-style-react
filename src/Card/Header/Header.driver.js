import { DataHooks } from './hooks';

const headerDriverFactory = ({ element }) => {
  const title = element.querySelector(`[data-hook="${DataHooks.title}"]`);
  const subtitle = element.querySelector(`[data-hook="${DataHooks.subtitle}"]`);

  return {
    exists: () => !!element,
    title: () => title && title.textContent,
    subtitle: () => subtitle && subtitle.textContent,
  };
};

export default headerDriverFactory;

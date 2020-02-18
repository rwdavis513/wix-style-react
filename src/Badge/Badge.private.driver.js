import badgeDriverFactory from './Badge.driver';

export const badgePrivateDriverFactory = args => {
  const publicDriver = badgeDriverFactory(args);
  return {
    ...publicDriver,
    getPrefixIcon: () => {
      const prefixIcon = publicDriver.getPrefixIcon();
      return {
        ...prefixIcon,
        exists: () => prefixIcon,
      };
    },
    getSuffixIcon: () => {
      const suffixIcon = publicDriver.getSuffixIcon();
      return {
        ...suffixIcon,
        exists: () => suffixIcon,
      };
    },
  };
};

import { baseUniDriverFactory } from '../../../../test/utils/unidriver';

export const sideMenuUniDriverFactory = base => {
  const getHeader = () => base.$('[data-hook=menu-header]');
  const getNavigation = () => base.$('[data-hook=menu-navigation]');
  const getNavigationLinks = () => base.$$('[data-hook=menu-navigation-link]');
  const getNavigationLinkWrappers = () =>
    base.$$('[data-hook=menu-navigation-link-wrapper]');
  const getNavigationSeparators = () =>
    base.$$('[data-hook=menu-navigation-separator]');
  const getNavigationCategories = () =>
    base.$$('[data-hook=menu-navigation-category]');
  const getNavigationBackLink = () =>
    base.$('[data-hook=menu-navigation-back-link]');
  const getPromotion = () => base.$('[data-hook=menu-promotion]');
  const getFooter = () => base.$('[data-hook=menu-footer]');
  const getBadge = link => link.$('[data-hook=menu-navigation-badge]');

  return {
    ...baseUniDriverFactory(base),
    hasHeader: () => getHeader().exists(),
    hasNavigation: () => getNavigation().exists(),
    hasPromotion: () => getPromotion().exists(),
    hasFooter: () => getFooter().exists(),
    hasBackLink: () => getNavigationBackLink().exists(),
    headerContent: () => getHeader().text(),
    navigationLinks: () => getNavigationLinks().map(link => link),
    navigationInnerLinks: () =>
      getNavigationLinkWrappers().map(wrapper => wrapper),
    isLinkActiveByIndex: async index => {
      const activeLinkWrapper = getNavigationLinkWrappers().get(index);
      const classExists = await activeLinkWrapper.hasClass('linkActive');
      const dataAttributeExists =
        (await activeLinkWrapper.attr('data-link-active')) === 'true';
      return classExists && dataAttributeExists;
    },
    isLinkDisabledByIndex: index =>
      getNavigationLinkWrappers()
        .get(index)
        .hasClass('linkDisabled'),
    isLinkBadgeVisibleByIndex: index =>
      getBadge(getNavigationLinkWrappers().get(index)).exists(),
    navigationSeparators: () =>
      getNavigationSeparators().map(separator => separator),
    navigationCategories: () =>
      getNavigationCategories().map(category => category),
    navigationCategoryContent: index =>
      getNavigationCategories()
        .get(index)
        .text(),
    clickLinkByIndex: index =>
      getNavigationLinks()
        .get(index)
        .click(),
    clickInnerLinkByIndex: index =>
      getNavigationLinkWrappers()
        .get(index)
        .$('a')
        .click(),
    clickBackLink: () => getNavigationBackLink().click(),
    promotionContent: () => getPromotion().text(),
    footerContent: () => getFooter().text(),
  };
};

export const ellipsiHOCDriverFactory = base => {
  return {
    hasEllipsis: async () => (await base.attr('data-fallback')) === 'true',
  };
};

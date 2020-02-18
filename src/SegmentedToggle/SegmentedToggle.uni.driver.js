export const segmentedToggleDriverFactory = base => {
  const findChild = hook => {
    if (typeof hook === 'string') {
      return base.$(`[data-hook="${hook}"]`);
    }

    return base.$(`[data-click="segmented-toggle-${hook}"]`);
  };
  return {
    /* fulfilled if element in the DOM */
    exists: async () => await base.exists(),
    /* get the actual element */
    element: async () => await base.getNative(), // eslint-disable-line no-restricted-properties
    /* selects child by given number (selection begins with 1) or dataHook */
    selectChild: async hook => findChild(hook).click(),
    /* returns true if child is selected by given number (selection begins with 1) or dataHook */
    isSelected: async hook =>
      (await findChild(hook).attr('aria-selected')) === 'true',
  };
};

export * from 'wix-ui-test-utils/unidriver';
export * from './ReactBase';

/**
 * Find element by `data-hook` (exact match)
 * @param {UniDriver} base
 * @param {string} hook
 */
export const findByHook = (base, hook) => base.$(`[data-hook="${hook}"]`);

/**
 * Wrapper function which returns null if base doesn't exist.
 * @param {UniDriver} base
 */
export const getElement = async base => ((await base.exists()) ? base : null);

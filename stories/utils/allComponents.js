import * as Icons from 'wix-ui-icons-common';
import * as SystemIcons from 'wix-ui-icons-common/system';
import * as base from '../../src/index';
import * as next from '../../src/beta/index';

/**
 * We are removing deprecated components from the list and add ones from next api
 */

const wsr = {
  ...base,
  ...next,
};

/*
 * This object contains all wix-style-react components including icons
 * It is used mainly for documentation in LiveCodeExample and code section.
 */

export default {
  ...wsr,
  Icons,
  SystemIcons,
};

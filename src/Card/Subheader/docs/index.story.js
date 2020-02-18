import { storySettings } from './storySettings';
import {
  tab,
  code as baseCode,
  api,
  importExample,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import { baseScope } from '../../../../stories/utils/LiveCodeExample';
import * as examples from './examples';

import Subheader from '../Subheader';

const code = config => baseCode({ components: baseScope, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Subheader,
  componentPath: '../Subheader.js',

  componentProps: {
    title: 'Card Subheader',
  },

  sections: [
    tab({
      title: 'Usage',
      sections: [
        importExample({
          source: `
            import Card from 'wix-style-react/Card';
const Subheader = Card.Subheader;
            `,
        }),
        code({
          title: 'Example usage',
          compact: true,
          source: examples.sampleUsage,
        }),
        code({
          title: 'With text title prop',
          compact: true,
          source: examples.textTitle,
        }),
        code({
          title: 'Neutral skin',
          compact: true,
          source: examples.neutralSkin,
        }),
        code({
          title: 'With custom node as title',
          compact: true,
          source: examples.nodeTitle,
        }),
        code({
          title: 'With custom suffix',
          compact: true,
          source: examples.suffix,
        }),
      ],
    }),

    ...[
      { title: 'API', sections: [api()] },
      { title: 'TestKit', sections: [testkit()] },
      { title: 'Playground', sections: [playground()] },
    ].map(tab),
  ],
};

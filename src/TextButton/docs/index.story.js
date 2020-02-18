import React from 'react';
import {
  tab,
  tabs,
  api,
  playground,
  description,
  divider,
  importExample,
  columns,
  header,
  title,
  code as baseCode,
} from 'wix-storybook-utils/Sections';

import TextButton from '..';
import { Layout } from '../../Layout';
import { storySettings } from '../test/storySettings';
import icons from '../../../stories/utils/icons-for-story';
import allComponents from '../../../stories/utils/allComponents';
import testkit from '!raw-loader!./testkit.md';
import * as examples from './examples';

const Link = ({ children, ...rest }) => <a {...rest}>{children}</a>;

const code = config =>
  baseCode({
    compact: true,
    components: { ...allComponents, Link },
    ...config,
  });

const example = ({ source, ...rest }) =>
  columns([description({ ...rest }), code({ source })]);

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: TextButton,
  componentPath: '..',

  componentProps: {
    as: 'button',
    children: 'Text button',
    skin: 'standard',
    underline: 'none',
    weight: 'thin',
    size: 'medium',
    disabled: false,
  },
  exampleProps: {
    onClick: () => 'Clicked!',
    prefixIcon: icons,
    suffixIcon: icons,
    as: ['button', 'a', 'span', 'div'],
  },

  sections: [
    header({
      component: (
        <Layout gap={0}>
          <TextButton>Text Button</TextButton>
        </Layout>
      ),
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/TextButton/TextButton.js',
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),
    tabs({
      tabs: [
        tab({
          title: 'Description',
          sections: [
            columns([
              description(
                'Text buttons have a low level of emphasis and are typically used for less important actions.',
              ),
            ]),

            importExample(
              "import TextButton from 'wix-style-react/TextButton';",
            ),

            divider(),

            title('Examples'),

            ...[
              {
                title: 'Skin',
                text:
                  'TextButton supports 4 styles of different skins. Light skin is designed to be used on dark backgrounds while dark skin is for coloured backgrounds.',
                source: examples.skins,
              },
              {
                title: 'Size',
                text:
                  'This action supports sizes – `tiny`, `small` and `medium`.',
                source: examples.size,
              },
              {
                title: 'Weight',
                text:
                  'Text weight can be adjusted to match adjacent components. TextButton supports two text weights – thin and normal.',
                source: examples.weight,
              },
              {
                title: 'Affix',
                text:
                  "TextButton allows using any icon before or after the text. For medium sized buttons use normal icons. For small buttons use small icons which ends with the 'Small' prefix",
                source: examples.affixes,
              },
              {
                title: 'Underline',
                text: `To emphasise an action, it is allowed to make underline always visible. While to make it more neutral, it's allowed to disable underline too.`,
                source: examples.underline,
              },
              {
                title: 'Inline Text Link',
                text:
                  'For text inline text link used in a paragraph with single or multiple lines, please use `<Text/>` component.',
                source: examples.inline,
              },
              {
                title: 'Custom HTML tag',
                text: `
                  This component can be rendered as any given HTML tag – \`<button/>\`, \`<a/>\`, \`<Link/>\` (from react router), \`<div/>\`, \`<span/>\` etc.<br/>
                  All props/attributes will pass to the <em>rendered</em> HTML tag.<br/>
                  <br/>
                  For example:<br/>
                  - as an \`<a/>\`, the component can have attributes like \`href\`, \`target\`, etc.<br/>
                  - as a \`<Link/>\` from react router, the component can have props like \`to\`, \`replace\`, etc.
                `,
                source: examples.custom,
              },
            ].map(example),
          ],
        }),

        tab({ title: 'API', sections: [api()] }),
        tab({ title: 'Testkit', sections: [description(testkit)] }),
        tab({ title: 'Playground', sections: [playground()] }),
      ],
    }),
  ],
};

import React from 'react';
import { storySettings } from './storySettings';
import { baseScope } from '../utils/LiveCodeExample';
import {
  header,
  title,
  description,
  table,
  importExample,
  columns,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';
import FormField from 'wix-style-react/FormField';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';

const code = config =>
  baseCode({
    components: baseScope,
    compact: true,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <FormField label="Rich Text Area">
            <RichTextInputArea placeholder="Placeholder" />
          </FormField>
        </div>
      ),

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),

    columns([
      description(
        'A rich text area can be used to allow for extended and formated user input.',
      ),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind="Components"
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind="Components"
              story="RichTextInputArea"
            >{`<RichTextInputArea/>`}</LinkTo>,
            'Component that receives rich data',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    columns([
      description({
        title: 'Plain Example',
        text: 'Default Rich text area setup.',
      }),
      code({ source: examples.basicExample }),
    ]),

    columns([
      description({
        title: 'Char Limit',
        text:
          'This component allows to limit number of characters can be inserted.',
      }),
      code({ source: examples.charLimitExample }),
    ]),

    columns([
      description({
        title: 'Resizable Height',
        text: 'It is allowed to make text area resizable.',
      }),
      code({ source: examples.resizableHeightExample }),
    ]),

    columns([
      description({
        title: 'Label Position',
        text: `Text Area's label can be position on top, left or can be hidden. Additional properties behave accordingly.`,
      }),
      code({ source: examples.positionExample }),
    ]),
  ],
};

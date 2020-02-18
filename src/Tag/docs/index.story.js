import React from 'react';

import Tag from '..';
import { createAutoExampleWrapper } from '../../../stories/utils/AutoExampleWrapper';
import {
  api,
  code as baseCode,
  columns,
  description,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/dist/src/Sections';
import { baseScope } from '../../../stories/utils/LiveCodeExample';
import * as examples from './examples';

const code = config =>
  baseCode({ components: baseScope, compact: true, ...config });

const GREEN_THUMB = (
  <div
    style={{
      height: '100%',
      width: '100%',
      backgroundColor: 'green',
    }}
  />
);

const TagWrapper = ({ story__withThumb, ...rest }) =>
  story__withThumb ? <Tag thumb={GREEN_THUMB} {...rest} /> : <Tag {...rest} />;
TagWrapper.propTypes = Tag.propTypes;
TagWrapper.displayName = Tag.displayName;

import { storySettings } from './storySettings';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: createAutoExampleWrapper(TagWrapper),
  componentPath: '..',
  componentProps: {
    children: 'Hello World',
    dataHook: storySettings.dataHook,
  },
  exampleProps: {
    onRemove: id => `ID: ${id} Removed!`,
    onClick: id => `ID: ${id} Clicked!`,
    thumb: [
      {
        label: 'green circle',
        value: GREEN_THUMB,
      },
    ],
  },
  sections: [
    header({
      component: <Tag id="tag">Hello World</Tag>,

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl: 'https://github.com/wix/wix-style-react/blob/master/src/Tag',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(`A Tag component.`),

          importExample("import Tag from 'wix-style-react/Tag';"),

          divider(),

          title('Examples'),

          ...[
            { title: 'Size', source: examples.sizes },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
          ...[
            { title: 'Status', source: examples.themes },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
          ...[
            { title: 'Thumb', source: examples.thumbs },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
          ...[
            { title: 'Removable', source: examples.removable },
          ].map(({ title, source }) =>
            columns([description({ title }), code({ source })]),
          ),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};

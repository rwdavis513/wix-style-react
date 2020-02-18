import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';
import CodeExample from 'wix-storybook-utils/CodeExample';

import SideMenuDrillReadme from '../DrillView/README.md';

import ExampleSideMenuDrill from './ExampleSideMenuDrill';
import ExampleSideMenuDrillRaw from '!raw-loader!./ExampleSideMenuDrill';

import ExampleSideMenuDrillRTL from './ExampleSideMenuDrillRTL';
import ExampleSideMenuDrillRTLRaw from '!raw-loader!./ExampleSideMenuDrillRTL';

storiesOf('Deprecated', module).add('SideMenuDrill', () => (
  <div>
    <h3>
      ✋🏻 This component is deprecated. Instead, we advise you to use the newer
      {' <Sidebar/>'} component. Please refer to it's documentation.
    </h3>

    <Markdown source={SideMenuDrillReadme} />

    <h1>Usage examples</h1>

    <CodeExample title="SideMenu " code={ExampleSideMenuDrillRaw}>
      <ExampleSideMenuDrill />
    </CodeExample>
    <CodeExample title="SideMenuDrill RTL" code={ExampleSideMenuDrillRTLRaw}>
      <ExampleSideMenuDrillRTL />
    </CodeExample>
  </div>
));

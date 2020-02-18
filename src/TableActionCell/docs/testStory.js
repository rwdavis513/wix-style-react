import React from 'react';
import { storiesOf } from '@storybook/react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { testStories, storySettings } from './storySettings';
import style from './TableActionCell.story.st.css';

import PrimaryBlueExample from './examples/PrimaryBlueExample';
import PrimaryWhiteExample from './examples/PrimaryWhiteExample';
import PrimarySecondaryExample from './examples/PrimarySecondaryExample';
import PrimarySecondaryHiddenExample from './examples/PrimarySecondaryHiddenExample';
import PopoverMenuPropsExample from './examples/PopoverMenuPropsExample';
import AlwaysVisibleSecondaryExample from './examples/AlwaysVisibleSecondaryExample';
import OnlySecondaryExample from './examples/OnlySecondaryExample';
import OnlyVisibleSecondaryExample from './examples/OnlyVisibleSecondaryExample';
import PrimarySecondaryRTLExample from './examples/PrimarySecondaryRTLExample';
import DisabledSecondaryExample from './examples/DisabledSecondaryExample';
import DisabledPrimaryExample from './examples/DisabledPrimaryExample';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.tableActionCell, () => (
  <div {...style('root')}>
    <div className={style.example}>
      <CodeExample title="Blue primary action">
        <PrimaryBlueExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="White primary action">
        <PrimaryWhiteExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Primary action and secondary actions">
        <PrimarySecondaryExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Primary action and hidden secondary action">
        <PrimarySecondaryHiddenExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="With custom PopoverMenu props">
        <PopoverMenuPropsExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Always visible secondary actions">
        <AlwaysVisibleSecondaryExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Only secondary actions">
        <OnlySecondaryExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Only visible secondary actions">
        <OnlyVisibleSecondaryExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Primary and secondary actions with RTL">
        <PrimarySecondaryRTLExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Disabled secondary actions">
        <DisabledSecondaryExample />
      </CodeExample>
    </div>

    <div className={style.example}>
      <CodeExample title="Disabled primary actions">
        <DisabledPrimaryExample />
      </CodeExample>
    </div>
  </div>
));

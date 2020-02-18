import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { dropdownBaseDriverFactory } from '../DropdownBase.uni.driver';
import DropdownBase from '..';
import TextButton from '../../TextButton';

const dataHook = 'interactive';
const triggerElementDatahook = 'interactive-button';

const dropdownBaseTestkitDriver = uniTestkitFactoryCreator(
  dropdownBaseDriverFactory,
);

const getDriver = () =>
  dropdownBaseTestkitDriver({
    wrapper: document.body,
    dataHook,
  });

const DropdownBaseWrapper = ({ componentDidMount, ...rest }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  });

  return <DropdownBase dataHook={dataHook} {...rest} />;
};

const defaultProps = {
  options: [
    { id: 0, value: 'First option' },
    { id: 1, value: 'Second option' },
    { id: 2, value: 'Third option' },
    { id: 3, value: 'Fourth option' },
    { id: 4, value: 'Fifth option' },
    { id: 5, value: 'Sixth option' },
  ],
  children: ({ toggle, selectedOption = {} }) => {
    return (
      <TextButton
        skin="dark"
        dataHook={triggerElementDatahook}
        onClick={toggle}
      >
        {selectedOption.value || 'Please choose'}
      </TextButton>
    );
  },
};

const tests = [
  {
    describe: 'DropdownBase',
    its: [
      {
        it: 'should render the RGB inputs when clicking on the RGB tab',
        props: {
          ...defaultProps,
        },
        componentDidMount: async () => {
          await getDriver().clickTargetElement(triggerElementDatahook);
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`DropdownBase${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div style={{ padding: '60px' }}>
          <DropdownBaseWrapper
            {...props}
            componentDidMount={componentDidMount}
          />
        </div>
      ),
    );
  });
});

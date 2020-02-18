import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import CustomModal from '../CustomModal';
import Text from '../../Text/Text';
import { dataHooks } from '../constants';
import Box from '../../Box';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { customModalPrivateDriverFactory } from './CustomModal.private.uni.driver';
import Checkbox from '../../Checkbox';

const LONG_CONTENT = (
  <Text>
    {new Array(5)
      .fill(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus
        eget nunc scelerisque viverra mauris in. Ridiculus mus mauris vitae
        ultricies leo integer malesuada nunc. Aliquet porttitor lacus luctus
        accumsan tortor posuere ac. Quam viverra orci sagittis eu volutpat odio
        facilisis mauris sit. Nibh nisl condimentum id venenatis a condimentum.
        Commodo quis imperdiet massa tincidunt nunc. Tincidunt ornare massa eget
        egestas purus viverra. Ultrices mi tempus imperdiet nulla malesuada. Quis
        risus sed vulputate odio ut. Cras fermentum odio eu feugiat pretium nibh
        ipsum. Nunc eget lorem dolor sed viverra. Viverra accumsan in nisl nisi
        scelerisque eu. Id diam maecenas ultricies mi eget mauris pharetra et
        ultrices. Proin sagittis nisl rhoncus mattis rhoncus urna neque. Quis
        viverra nibh cras pulvinar mattis nunc sed blandit. Senectus et netus et
        malesuada fames ac turpis egestas integer. Est ullamcorper eget nulla
        facilisi etiam dignissim diam quis enim. Vitae proin sagittis nisl rhoncu
        mattis rhoncus. Egestas integer eget aliquet nibh praesent tristique
        magna. Netus et malesuada fames ac turpis egestas sed. Imperdiet dui
        accumsan sit amet nulla facilisi. Etiam tempor orci eu lobortis elementum
        Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Amet
        venenatis urna cursus eget nunc scelerisque viverra mauris in. Adipiscing
        diam donec adipiscing tristique. Massa ultricies mi quis hendrerit dolor.
        Sit amet massa vitae tortor condimentum. Tempor commodo ullamcorper a
        lacus. Pulvinar neque laoreet suspendisse interdum consectetur. Sed turpis
        tincidunt id aliquet.`,
      )
      .join(' ')}
  </Text>
);
const SHORT_CONTENT = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Venenatis urna cursus.
  </Text>
);

const commonProps = {
  dataHook: dataHooks.customModal,
  primaryButtonText: 'Confirm',
  secondaryButtonText: 'Cancel',
  title: 'Title',
  subtitle: 'Subtitle',
  children: SHORT_CONTENT,
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {
          ...commonProps,
        },
      },
    ],
  },
  {
    describe: 'scroll',
    its: [
      {
        it: 'long text should be scrollable. title and footer should be sticky',
        props: {
          ...commonProps,
          children: LONG_CONTENT,
        },
      },
    ],
  },
  {
    describe: 'footer',
    its: [
      {
        it: 'empty footer',
        props: {
          title: 'Title',
          children: SHORT_CONTENT,
        },
      },
      {
        it: 'with sideActions',
        props: {
          ...commonProps,
          sideActions: <Checkbox>Check</Checkbox>,
        },
      },
    ],
  },
  {
    describe: 'footnote',
    its: [
      {
        it: 'basic',
        props: {
          ...commonProps,
          footnote: <span>Footnote text goes here</span>,
        },
      },
    ],
  },
  {
    describe: 'removeContentPadding',
    its: [
      {
        it: 'true',
        props: {
          ...commonProps,
          removeContentPadding: true,
        },
      },
    ],
  },
];

const customModalTestkitFactory = uniTestkitFactoryCreator(
  customModalPrivateDriverFactory,
);
const createDriver = dataHook =>
  customModalTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const InteractiveCustomModalLayout = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount && componentDidMount();
  }, [componentDidMount]);

  return <CustomModal {...props} />;
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`CustomModal${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box maxHeight={'600px'} maxWidth={'1000px'}>
          <InteractiveCustomModalLayout {...props} />
        </Box>
      ),
    );
  });
});

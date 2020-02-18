import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialButton from '../SocialButton';

const icons = ['facebook', 'instagram', 'linkedin', 'twitter', 'pinterest'];

const tests = [
  {
    describe: 'icon',
    its: icons.map(icon => ({ it: icon, props: { icon } })),
  },
  {
    describe: 'disabled',
    its: icons.map(icon => ({ it: icon, props: { icon, disabled: true } })),
  },
  {
    describe: 'text',
    its: icons.map(icon => ({
      it: icon,
      props: { icon, text: 'Share me please!' },
    })),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`SocialButton${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div style={{ maxWidth: 100 }}>
          <SocialButton {...props} />
        </div>
      ),
    );
  });
});

import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from '../Divider';
import Box from '../../Box';

const tests = [
  {
    describe: 'Direction',
    its: [
      {
        it: 'Should be displayed horizontally',
        props: {},
        hasFlexboxContainer: true,
      },
      {
        it: 'Should be displayed vertically',
        props: {
          direction: 'vertical',
        },
        hasFlexboxContainer: true,
      },
    ],
  },
  {
    describe: 'Skin',
    its: [
      {
        it: 'Should be displayed with dark color',
        props: {
          skin: 'dark',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, hasFlexboxContainer }) => {
    storiesOf(`Divider${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <React.Fragment>
          <div style={{ height: '50px' }}>
            <Divider {...props} />
          </div>

          {/* Checks the case of a flexbox container */
          hasFlexboxContainer && (
            <Box verticalAlign="middle" height="50px" marginTop={3}>
              <Divider {...props} />
            </Box>
          )}
        </React.Fragment>
      ),
    );
  });
});

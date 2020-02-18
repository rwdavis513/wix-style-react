import React from 'react';
import { storiesOf } from '@storybook/react';

import Carousel from '..';

const sampleImages = [
  {
    src:
      'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg',
  },
  {
    src:
      'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
  },
  {
    src:
      'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg',
  },
];

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Display images',
        props: {
          images: sampleImages,
        },
      },
      {
        it: 'Display custom nodes',
        props: {
          children: [
            <span>First</span>,
            <span>Second</span>,
            <span>Third</span>,
          ],
        },
      },
    ],
  },
  {
    describe: 'Button Skin',
    its: [
      {
        it: 'Display inverted buttons',
        props: {
          images: sampleImages,
          buttonSkin: 'inverted',
        },
      },
    ],
  },
  {
    describe: 'Variable width',
    its: [
      {
        it: 'Display item with variable width ',
        props: {
          variableWidth: true,
          children: [
            <div>
              <div
                style={{ width: '300px', height: '100px', background: 'red' }}
              />
            </div>,
            <div>
              <div
                style={{ width: '200px', height: '100px', background: 'green' }}
              />
            </div>,
            <div>
              <div
                style={{ width: '350px', height: '100px', background: 'blue' }}
              />
            </div>,
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Carousel${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <div style={{ maxWidth: '550px' }}>
          <Carousel {...props} />
        </div>
      ),
    );
  });
});

import ColorPicker from '..';
import { storySettings } from './storySettings';
import React from 'react';
import Swatches from '../../Swatches/Swatches';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: ColorPicker,
  componentPath: '..',

  componentProps: setProps => ({
    value: '#3899eb',
    onChange: value =>
      setProps({ value: value.alpha() === 0 ? '' : value.hex() }),
    dataHook: storySettings.dataHook,
    emptyPlaceholder: 'No Fill',
  }),

  exampleProps: {
    onAdd: color => color,
    onChange: ev => (ev.alpha() === 0 ? '' : ev.hex()),
    onCancel: () => 'Cancelled',
    onConfirm: () => 'Confirmed',
    children: [
      {
        label: 'node',
        value: <div>a node here</div>,
      },
      {
        label: 'function',
        value: ({ changeColor }) => (
          <Swatches
            colors={['red', 'green', 'blue']}
            onClick={_color => {
              changeColor(_color);
            }}
          />
        ),
      },
    ],
  },
};

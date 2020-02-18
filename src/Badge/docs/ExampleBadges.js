/* eslint-disable no-undef */
import React from 'react';
import Badge, { SIZE, SKIN, TYPE } from 'wix-style-react/Badge';

const skins = Object.keys(SKIN);
const sizes = Object.keys(SIZE);
const sizesString = sizes.join(', ');
const types = Object.keys(TYPE);
const typesString = types.join(', ');

const renderBadge = props => (
  <span style={{ padding: '5px' }}>
    <Badge {...props}>Some Badge</Badge>
  </span>
);

const renderTypes = props => types.map(type => renderBadge({ type, ...props }));
const renderSizes = props => sizes.map(size => renderTypes({ size, ...props }));

render(
  <div data-hook="badge-variations">
    {skins.map(skin => (
      <div key={skin}>
        skin: {skin} | sizes: {sizesString} | types: {typesString} | upppercase:
        true, false
        <div
          style={{ display: 'flex', alignItems: 'center', padding: '5px' }}
          key={skin}
        >
          {renderSizes({ skin })}
          {renderBadge({ uppercase: false, skin })}
        </div>
      </div>
    ))}
  </div>,
);

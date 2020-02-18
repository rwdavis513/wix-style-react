import React from 'react';

import Box from 'wix-style-react/Box';

import ComponentsNames from './ComponentsNames';
import SymbolName from './SymbolName';

const ComponentNaming = ({ name, componentsNames }) => (
  <Box direction="vertical">
    <SymbolName
      name={name}
      isDeveloped={componentsNames && componentsNames.length > 0}
    />
    {componentsNames && <ComponentsNames componentsNames={componentsNames} />}
  </Box>
);

export default ComponentNaming;

import React from 'react';

import Text from 'wix-style-react/Text';
import Box from 'wix-style-react/Box';
import TextButton from 'wix-style-react/TextButton';

const SymbolName = ({ name, isDeveloped }) => (
  <Box marginBottom="6px">
    {typeof name === 'string' ? (
      <Text
        secondary={!isDeveloped}
        light={!isDeveloped}
        size="medium"
        weight="bold"
      >
        {name}
      </Text>
    ) : (
      <TextButton
        skin="dark"
        underline="onHover"
        weight="normal"
        onClick={name.url}
      >
        {name.text}
      </TextButton>
    )}
  </Box>
);

export default SymbolName;

let prettierConfig = {
  singleQuote: true,
  trailingComma: 'all',
};

try {
  prettierConfig = require('eslint-config-yoshi-base').rules[
    'prettier/prettier'
  ][1];
} catch (error) {}

module.exports = prettierConfig;

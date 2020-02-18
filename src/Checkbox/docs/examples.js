export const simple = `
  <Checkbox>Hello World!</Checkbox>
`;

export const error = `
<Checkbox hasError errorMessage="Oops!" vAlign="top">
  <div>I have an error!</div>
  <div>Hover me...</div>
</Checkbox>
`;

export const selectionArea = `
<Box direction='vertical'>
  <Checkbox selectionArea='always' checked>Check me!</Checkbox>
  <br/>
  <Checkbox selectionArea='always'>Check me!</Checkbox>
  <br/>
  <Checkbox selectionArea='always' disabled>Check me!</Checkbox>
  <br/>
  <Checkbox selectionArea='hover'>Check me!</Checkbox>
</Box>
`;

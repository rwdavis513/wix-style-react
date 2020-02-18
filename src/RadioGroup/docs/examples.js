export const simple = `
  <RadioGroup value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  </RadioGroup>
`;

export const disabledRadios = `
  <RadioGroup disabledRadios={[2]} value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
    <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
  </RadioGroup>
`;

export const selectionArea = `
  <RadioGroup selectionArea='always' value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  </RadioGroup>
`;

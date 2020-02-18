export const simple = `
class ControlledAutoComplete extends React.Component {
  state = { value: '' }

  onSelect = (option) => {
    this.setState({ value: option.value });
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <AutoComplete
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fifth option' },
          { id: 4, value: 'Fourth option' },
        ]}
        value={value}
        onChange={this.onChange}
        onSelect={this.onSelect}
        placeholder={'Start typing'}
        emptyStateMessage={\`Couldn't find: \${this.state.value}\`}
        predicate={option =>
          option.value.toLowerCase().indexOf(value.toLowerCase()) !==
          -1
        }
      />
    );
  }
}
`;

export const states = `
<Layout cols={2}>
  <AutoComplete options={[
    { id: 0, value: 'First option' },
    { id: 1, value: 'Second option' },
    { id: 2, value: 'Third option' },
    { id: 3, value: 'Fifth option' },
    { id: 4, value: 'Fourth option' },
  ]}
  disabled 
  />
  <AutoComplete options={[
    { id: 0, value: 'First option' },
    { id: 1, value: 'Second option' },
    { id: 2, value: 'Third option' },
    { id: 3, value: 'Fifth option' },
    { id: 4, value: 'Fourth option' },
  ]}
  error
  />
</Layout>
`;

export const overflow = `
<div style={{ display:'flex', justifyContent:'center', alignItems: 'center', width: '400px', height: '150px', background: 'rgba(240, 244, 247, 1)', overflow:'scroll'}}>
 <AutoComplete 
  popoverProps={{ appendTo:"window" }}
  options={[
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
  ]}
placeholder={'Start typing'}
/>
</div>
`;

export const simple = `
class MyComponent extends React.Component {
  state = { text: '' };

  render() {
    const { text } = this.state;
    return (
      <Layout>
        <Cell>
          <Search
            debounceMs={250}
            value={text}
            onChange={e => this.setState({ text: e.target.value })}
          />
        </Cell>
        <Cell>
          <Text>Value searched (debounced):</Text>
          <Text size="small" tagName="div">{text}</Text>
        </Cell>
      </Layout>
    );
  }
}
`;

export const predicate = `
class MyComponent extends React.Component {
  state = { text: '' };

  render() {
    const { text } = this.state;
    return (
      <Search
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
          options={Array(26)
                .fill(0)
                .map((_, id) => ({
                  id,
                  value: 'Option ' + String.fromCharCode(97 + id),
                }))}
          predicate={ option => option.value.indexOf(text) !== -1 }
      />
    );
  }
}
`;

export const expandable = `
<Search debounceMs={250} expandable/>
`;

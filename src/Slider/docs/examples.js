export const plainExample = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
        <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </Cell>
      </Layout>
    );
  }
}
`;

export const rangeSlider = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [2,4],
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
        <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </Cell>
      </Layout>
    );
  }
}
`;

export const plainSliderMarks = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <div style={{ padding:'20px 0'}}>
          <Slider onChange={this.change} min={1} max={10} value={value} />\
      </div>
    );
  }
}
`;

export const rangeSliderPushable = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [3,4,5],
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} pushable={1} />
        </Cell>
      </Layout>
    );
  }
}
`;

export const states = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 2,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} disabled />
        </Cell>
      </Layout>
    );
  }
}
`;

export const customMarks = `
class SliderWithState extends React.Component {

  state = { value: 0 };

  change = value => this.setState({ value });

  render() {
    const { value } = this.state;
    const marks = {
            '-10': '-10°C',
            0: '0°C',
            26: '26°C',
            37: '37°C',
            50: '50°C',
            100:'100°C'
        };

    return (
       <Layout>
        <Cell>
          <Slider marks={marks} onChange={this.change} min={-10} max={100} value={value} />
        </Cell>
      </Layout>
    );
  }
}

`;

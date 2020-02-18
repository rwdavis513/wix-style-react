export const numbers = `
<Layout cols={4}>
  <Cell span={1}>
    <CounterBadge>0</CounterBadge>
  </Cell>
  <Cell span={1}>
    <CounterBadge>5</CounterBadge>
  </Cell>
  <Cell span={1}>
    <CounterBadge>36</CounterBadge>
  </Cell>
  <Cell span={1}>
    <CounterBadge>128</CounterBadge>
  </Cell>
</Layout>
`;

export const skins = `
<Layout cols={8}>
  <Cell span={1}>
    <CounterBadge skin="general">1</CounterBadge>
  </Cell>
  <Cell span={3}>general</Cell>
  <Cell span={1}>
    <CounterBadge skin="standard">1</CounterBadge>
  </Cell>
  <Cell span={3}>standard</Cell>
  <Cell span={1}>
    <CounterBadge skin="danger">1</CounterBadge>
  </Cell>
  <Cell span={3}>danger</Cell>
  <Cell span={1}>
    <CounterBadge skin="warning">1</CounterBadge>
  </Cell>
  <Cell span={3}>warning</Cell>
  <Cell span={1}>
    <CounterBadge skin="urgent">1</CounterBadge>
  </Cell>
  <Cell span={3}>urgent</Cell>
  <Cell span={1}>
    <CounterBadge skin="success">1</CounterBadge>
  </Cell>
  <Cell span={3}>success</Cell>
</Layout>
`;

export const custom = `
<Layout cols={4}>
  <Cell span={1}>
    <CounterBadge><Icons.Check/></CounterBadge>
  </Cell>
  <Cell span={1}>
    <CounterBadge><Icons.More/></CounterBadge>
  </Cell>
  <Cell span={1}>
    <CounterBadge skin="danger"><Icons.HeartFilled/></CounterBadge>
  </Cell>
  <Cell span={1}>
    <CounterBadge skin="success">New!</CounterBadge>
  </Cell>
</Layout>
`;

export const advanced = `
<Layout cols={3}>
  <Cell span={1}>
    <span style={{position: 'relative'}}>
      <IconButton>
        <Icons.Cart/>
      </IconButton>
      <div style={{position: 'absolute', top: '-20px', left: '25px', pointerEvents: 'none'}}>
        <CounterBadge>0</CounterBadge>
      </div>
    </span>
  </Cell>
  <Cell span={1}>
    <span style={{position: 'relative'}}>
      <IconButton>
        <Icons.Cart/>
      </IconButton>
      <div style={{position: 'absolute', top: '-20px', left: '25px', pointerEvents: 'none'}}>
        <CounterBadge>21</CounterBadge>
      </div>
    </span>
  </Cell>
  <Cell span={1}>
    <span style={{position: 'relative'}}>
      <IconButton>
        <Icons.Cart/>
      </IconButton>
      <div style={{position: 'absolute', top: '-20px', left: '25px', pointerEvents: 'none'}}>
        <CounterBadge>555</CounterBadge>
      </div>
    </span>
  </Cell>
</Layout>
`;

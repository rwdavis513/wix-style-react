import React from 'react';
import styles from './Divider.st.css';

class Divider extends React.PureComponent {
  static displayName = 'Divider';

  render() {
    return <div {...styles('root', {}, this.props)} />;
  }
}

export default Divider;

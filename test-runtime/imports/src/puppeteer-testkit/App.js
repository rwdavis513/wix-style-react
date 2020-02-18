import React from 'react';
import Button from '../../../../Button';
import Heading from '../../../../Heading';

class App extends React.Component {
  state = {
    clicked: false,
  };
  render() {
    return (
      <div>
        <Button
          dataHook="action-button"
          onClick={() => this.setState({ clicked: true })}
        >
          Click here
        </Button>
        {this.state.clicked && (
          <Heading dataHook="approval-text">It was clicked!</Heading>
        )}
      </div>
    );
  }
}

export default App;

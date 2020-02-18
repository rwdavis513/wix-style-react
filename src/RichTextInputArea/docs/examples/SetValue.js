/* eslint-disable no-undef */
import React from 'react';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';
import Button from 'wix-style-react/Button';
import { Layout, Cell } from 'wix-style-react/Layout';

class RichTextInputAreaSetValueExample extends React.Component {
  render() {
    return (
      <Layout>
        <Cell>
          <RichTextInputArea
            initialValue="hello world"
            ref={ref => (this._ref = ref)}
          />
        </Cell>
        <Cell>
          <Layout>
            <Button onClick={() => this._ref.setValue('hello world')}>
              reset
            </Button>
            <Button onClick={() => this._ref.setValue('')}>clean</Button>
          </Layout>
        </Cell>
      </Layout>
    );
  }
}

render(<RichTextInputAreaSetValueExample />);

# Deprecating `<RichTextArea/>` component

[`<RichTextInputArea/>`](https://wix-wix-style-react.surge.sh/?selectedKind=Components&selectedStory=RichTextInputArea&full=0&addons=0&stories=1&panelRight=0) is the new replacement.

Below you have full detailed examples on how to migrate your components.

## Differences:

1. `Error` & `ErrorMessage` became `Status` & `StatusMessage`
2. In contrast to `RichTextArea` controlled behaviour the new `RichTextInputArea` is uncontrolled.

## Migration Examples

### How to control the value:

Old code using `<RichTextArea/>`
```
import React from 'react';
import RichTextArea from 'wix-style-react/RichTextArea';
import Button from 'wix-style-react/Button';

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "<p>hello world</p>",
      }
    }
    render() {
        const { value } = this.state;
        return (
          <div>
            <Button onClick={() => this.setState({value: "<p>hello world</p>"})}>
              reset
            </Button>
            <Button onClick={() => this.setState({value: "<p></p>"})}>
              clean
            </Button>  
            <RichTextArea 
              onChange={(value) => this.setState({value})} 
              value={value}/>
          </div>
        );
    }
};
```

New code using `RichTextInputArea`
```
import React from 'react';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';
import Button from 'wix-style-react/Button';

class RichTextInputAreaSetValueExample extends React.Component {
  render() {
    return (
      <div>
          <RichTextInputArea
            initialValue="hello world"
            ref={ref => (this._ref = ref)}
          />
          <Button onClick={() => this._ref.setValue('hello world')}>
            reset
          </Button>
          <Button onClick={() => this._ref.setValue('')}>clean</Button>
      </div>
    );
  }
}


```

### How to display an error:

Old code using `<RichTextArea/>`
```
import React from 'react';
import StatsWidget from '..';

export default () => (
  <RichTextArea error errorMessage="this is an error"/>
);
```

New code using `RichTextInputArea`
```
import React from 'react';
import RichTextInputArea from 'wix-style-react/RichTextInputArea';

export default () => (
    <RichTextInputArea status="error" statusMessage="this is an error"/>
);
```



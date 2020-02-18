import React from 'react';
import { object, func, string } from 'prop-types';

import WixComponent from '../BaseComponents/WixComponent';
import Input from '../Input';

import css from './ColorPickerConverter.st.css';
import ColorPickerConverterViewer from './ColorPickerConverterViewer';
import { safeColor, getHexOrEmpty, isTransparent } from './utils';

export default class ColorPickerConverterHex extends WixComponent {
  static propTypes = {
    current: object.isRequired,
    onChange: func.isRequired,
    placeholder: string,
  };

  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.state = {
      hex: getHexOrEmpty(props.current),
      inFocus: false,
    };
  }

  render() {
    return (
      <div {...css('root', {}, this.props)}>
        <Input
          size="small"
          value={this.state.hex}
          placeholder={this.props.placeholder}
          onChange={this.change}
          onFocus={this.handleOnFocus}
          onBlur={this.handleOnBlur}
          onKeyDown={this.handleKeyDown}
          {...css('colorInput', {}, this.props)}
        />
        <ColorPickerConverterViewer
          {...this.props}
          color={this.props.current}
        />
      </div>
    );
  }

  UNSAFE_componentWillReceiveProps(props) {
    const hex = getHexOrEmpty(props.current);
    if (!this.state.inFocus && this.state.hex !== hex) {
      this.setState({
        hex,
      });
    }
  }

  change({ target: { value } }) {
    this.setState({ hex: value }, () => {
      const _color = safeColor(value, this.props.allowEmpty);
      if (_color) {
        this.props.onChange(_color);
      }
    });
  }

  handleOnFocus = () => {
    this.setState({
      inFocus: true,
    });
  };

  handleOnBlur = () => {
    this.setState({
      inFocus: false,
      hex: getHexOrEmpty(this.props.current),
    });
  };

  handleKeyDown = event => {
    const { key } = event;

    if (key === 'Enter') {
      this.props.onEnter();
    }
  };
}

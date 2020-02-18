import React from 'react';
import ImageViewer from '..';

const style = {
  display: 'inline-block',
  verticalAlign: 'middle',
  padding: '0 25px 25px',
};

const imageUrlForExample =
  'https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg';

const transparentImageUrlForExample =
  'https://onlinepngtools.com/images/examples-onlinepngtools/palm-fronds-and-sky.png';

/**
 * Renders an ImageViewer alternating between 2 images on every click
 */
class ImageViewerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: undefined,
    };
  }

  getNextImage() {
    return this.state.imageUrl === imageUrlForExample
      ? transparentImageUrlForExample
      : imageUrlForExample;
  }

  render() {
    const { exampleName, ...imageViewerProps } = this.props;
    const { imageUrl } = this.state;

    return (
      <div style={style}>
        {exampleName}
        <br />
        <br />
        <ImageViewer
          onRemoveImage={() => {
            this.setState({ imageUrl: undefined });
          }}
          onAddImage={() => {
            this.setState({ imageUrl: imageUrlForExample });
          }}
          onUpdateImage={() => {
            this.setState({
              imageUrl: this.getNextImage(),
            });
          }}
          imageUrl={imageUrl}
          {...imageViewerProps}
        />
      </div>
    );
  }
}

const Example = () => (
  <div>
    <ImageViewerExample exampleName="Without image (interactive)" />

    <ImageViewerExample
      exampleName="With image"
      imageUrl={imageUrlForExample}
    />

    <ImageViewerExample
      exampleName="With transparent image"
      imageUrl={transparentImageUrlForExample}
    />

    <ImageViewerExample
      exampleName="With error"
      error
      errorMessage="Just a demo"
      onAddImage={() => {}}
    />
  </div>
);

export default Example;

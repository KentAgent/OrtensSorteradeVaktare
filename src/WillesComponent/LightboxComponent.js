import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app






export default class LightboxComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props.isOpen, props.photoIndex)
    this.state = {
      photoIndex: props.photoIndex,
      isOpen: false,
      images: props.images
    };
    this.updateState = this.updateState.bind(this)
  }

  updateState(setOpen, imgIndex){
      this.setState({
        photoIndex: imgIndex,
        isOpen: setOpen
      });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    {console.log(this.state.images, this.state.isOpen, this.state.photoIndex);}
    return (
      <div>

        {isOpen && (
          <Lightbox
            mainSrc={this.state.images[photoIndex]}
            nextSrc={this.state.images[(photoIndex + 1) % this.state.images.length]}
            prevSrc={this.state.images[(photoIndex + this.state.images.length - 1) % this.state.images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + this.state.images.length - 1) % this.state.images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.state.images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

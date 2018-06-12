import React from 'react'
import './WillesComponent.css'
import Lightbox from "./LightboxComponent"

import Dog1 from './dog1.jpeg'
import Dog2 from './dog2.jpg'
import Dog3 from './dog3.jpg'

const download = require('image-downloader')


class willesComponent extends React.Component {

  getImg(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>{
      return response.json();
    })
    .then(result =>{
      console.log(result);
      var newImageArray = this.state.imagesArray;
      var img = result.message

      newImageArray.push(img);
      this.setState ({
        img_URL : result.message,
        imagesArray : newImageArray
    })
  })
}

constructor(props){
    super(props);
    this.state = {
      img_URL : '',
      imagesArray : [Dog1, Dog2, Dog3],
      photoIndex: 0,
    }
    this.getImg = this.getImg.bind(this);
    this.thumbNailClicked = this.thumbNailClicked.bind(this);
    this.downloadImg = this.downloadImg.bind(this);
  }

  componentDidMount(){
    this.getImg();
  }

  downloadImg(){
    if (this.state.img_URL === ''){
      return;
    }

    var downloadOptions = {
      url: this.state.img_URL,
      dest: './saved_images/'
    }

    download.image(downloadOptions)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      console.error(err)
    })
    }

  thumbNailClicked(e, index){

    this.setState({
      isOpen: true,
      photoIndex: index
    })
    {console.log(this.state.imagesArray, this.state.isOpen, this.state.photoIndex);}
//    updateState(true, index)
    this.foo.updateState(true, index);
  }


  render(){
    const imgThumbNails = this.state.imagesArray.map((img, index) => {
      // data-index={index}
        return <img src={img} className="thumbNail" key={index} onClick={(event) => this.thumbNailClicked(event, index)}/>
    })
      return (
        <div>
          <h1>Tjo Dog</h1>
          <section><button className="refreshBtn" onClick={this.getImg}>New Dog</button>
            </section>
          <div className="imgWrapper">
            <section><img className="imgBox" src={this.state.img_URL} alt="Dog img"></img></section>
            <button className="refreshBtn" onClick={this.downloadImg}>Download</button>
            <div className ="thumbNailContainer">{imgThumbNails}</div>
          </div>
          <div><Lightbox images={this.state.imagesArray} photoIndex={this.state.photoIndex} ref={foo => {this.foo = foo;}} /></div>
        </div>
    )
  }
}

export default willesComponent;

import React from 'react'
import './WillesComponent.css'
import DownloadLink from "react-download-link";
import LightBox from "./LightboxComponent"

import Dog1 from './dog1.jpeg'
import Dog2 from './dog2.jpg'
import Dog3 from './dog3.jpg'
var Dogg = require('./dog2.jpg')




console.log(Dog2);

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
      console.log(newImageArray);
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
      imagesArray : [Dog1, Dog2, Dog3]
    }
    this.getImg = this.getImg.bind(this);
    this.thumbNailClicked = this.thumbNailClicked.bind(this);
  }

  componentDidMount(){
    this.getImg();
  }

  thumbNailClicked(e){
    console.log(e.target);
  }

  render(){
    const imgThumbNails = this.state.imagesArray.map(img => (
        <img src={img} style={{width: 50, height: 50}} key={img} onClick={this.thumbNailClicked}/>
    ))
      return (
        <div>
          <h1>Tjo Dog</h1>
          <section><button className="refreshBtn" onClick={this.getImg}>New Dog</button>
            <DownloadLink filename="myfile.txt" exportFile={() => "My cached data"}>
              Save to disk
            </DownloadLink></section>
          <section><img className="imgBox" src={this.state.img_URL} alt="Dog img"></img></section>
          <div>{imgThumbNails}</div>
          <div><LightBox images={this.state.imagesArray} /></div>
        </div>
    )
  }
}

export default willesComponent;

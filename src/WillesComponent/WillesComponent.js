import React from 'react'
import './WillesComponent.css'
import Lightbox from "./LightboxComponent"
import FileSaver from 'file-saver'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import {fetchDog, downloadDog, dogThumbNailClicked} from '../actions/dogActions'

import Dog1 from './dog1.jpeg'
import Dog2 from './dog2.jpg'
import Dog3 from './dog3.jpg'

class willesComponent extends React.Component {

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

  getImg(){

    this.props.fetchDog();
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      return response.json();
    })
    .then(result => {
      var newImageArray = this.state.imagesArray;
      var img = result.message
      newImageArray.push(img);
      this.setState ({
        img_URL : result.message,
        imagesArray : newImageArray
      })
    })

  }

  componentDidMount(){
    this.getImg();
  }

  downloadImg(){
    fetch('https://cors-anywhere.herokuapp.com/' + this.state.img_URL)
    .then(function(response){
      return response.blob();
    })
    .then(function(blob){
      FileSaver.saveAs(blob, 'doggle');
    })
  }

  thumbNailClicked(e, index){
    this.setState({
      isOpen: true,
      photoIndex: index
    })
    console.log(this.state.imagesArray, this.state.isOpen, this.state.photoIndex);
    this.foo.updateState(true, index);
  }

  render(){
    const imgThumbNails = this.state.imagesArray.map((img, index) => {
        return <img src={img} className="thumbNail" key={index} alt={img} onClick={(event) => this.thumbNailClicked(event, index)}/>
    })
      return (
        <div class="dogPage">
          <h1>Tjo Dog</h1>
          <section><button className="refreshBtn" onClick={this.getImg}>New Dog</button>
            </section>
          <div className="imgWrapper">

          {/* Normal State
            <section><img className="imgBox" src={this.state.img_URL} alt="Dog img"></img></section>*/
          }
          {/* Redux State */}
            <section><img className="imgBox" src={this.props.dogImage} alt="Dog img"></img></section>

            <button className="refreshBtn" disabled={!this.state.img_URL} onClick={this.downloadImg}>Download</button>
            <div className ="thumbNailContainer">{imgThumbNails}</div>
          </div>
          <div><Lightbox images={this.state.imagesArray} photoIndex={this.state.photoIndex} ref={foo => {this.foo = foo;}} /></div>
        </div>
    )
  }
}

willesComponent.propTypes = {
    fetchDog: PropTypes.func.isRequired,
    dogImage: PropTypes.string.isRequired,
    doggoImageArray: PropTypes.string.isRequired,
    downloadDog: PropTypes.func.isRequired,
    dogThumbNailClicked: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    dogImage: state.doggoReducer.img_URL,
    doggoImageArray: state.doggoReducer.imagesArray
    // categories: state.chuckReducer.categories,
    // chuckJoke: state.chuckReducer.joke,
    //someOneElseJoke: state.categories.someOneElseJoke
})

export default connect(mapStateToProps, {fetchDog, downloadDog, dogThumbNailClicked})(willesComponent)

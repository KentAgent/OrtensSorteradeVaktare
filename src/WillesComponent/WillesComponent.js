import React from 'react'
import './WillesComponent.css'
import DownloadLink from "react-download-link";

class willesComponent extends React.Component {

  getImg(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response =>{
      return response.json();
    })
    .then(result =>{
      console.log(result);
      this.setState ({
        img_URL : result.message
      })
    })
  }

  constructor(props){
    super(props);
    this.state = {
      img_URL : ''
    }
    this.getImg = this.getImg.bind(this)
  }

  componentDidMount(){
    this.getImg();
  }

  render(){
      return (
        <div>
          <h1>Tjo Dog</h1>
          <section><button className="refreshBtn" onClick={this.getImg}>New Dog</button>
            <DownloadLink filename="myfile.txt" exportFile={() => "My cached data"}>
              Save to disk
            </DownloadLink></section>
          <section><img className="imgBox" src={this.state.img_URL} alt="Dog img"></img></section>
        </div>
    )
  }
}

export default willesComponent;

import React from 'react'
import './WillesComponent.css'

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
          <h1>Tjenaaaa</h1>
          <button onClick={this.getImg}>Refresh</button>

          <img className="imgBox" src={this.state.img_URL} alt="Dog img"></img>
        </div>
    )
  }

}

export default willesComponent;

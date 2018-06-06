import React from 'react'
import Button from 'react-button-component';

class willesComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      img_URL : ''
    }
  }
  onNewImgClick = function(e){

  }

  componentDidMount(){
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

  render(){
      return (
        <div>
          <h1>Tjenaaaa</h1>
          <Button onClick={() => console.log('dada')}></Button>
          <img src={this.state.img_URL} alt="Dog img"></img>
        </div>
    )
  }
}

export default willesComponent;

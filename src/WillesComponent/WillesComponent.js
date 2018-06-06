import React from 'react'

class willesComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      img_URL : ''
    }

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
          <h1>Tjena</h1>
          <img src={this.state.img_URL} alt="Dog img"></img>
        </div>
    )
  }
}

export default willesComponent;

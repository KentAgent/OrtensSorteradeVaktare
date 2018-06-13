import React from 'react'

var firebase = require('firebase')
var config = {
apiKey: "AIzaSyAslmo3QM6YEdmk9z_eyjF3jCoj0Z4QBew",
authDomain: "jsprojekt1-6cf97.firebaseapp.com",
databaseURL: "https://jsprojekt1-6cf97.firebaseio.com",
projectId: "jsprojekt1-6cf97",
storageBucket: "jsprojekt1-6cf97.appspot.com",
messagingSenderId: "824745951506"
};

firebase.initializeApp(config);

class Firebase extends React.Component{

  constructor (props){
      super(props);
      this.state = {
        firebase:[],
        value: '',
        message: ''
      };
      this.getChat = this.getChat.bind(this);
      this.writeOnOurWall = this.writeOnOurWall.bind(this);
      this.getFirebaseList = this.getFirebaseList.bind(this);
      this.deletePost = this.deletePost.bind(this);
  }

getChat(){
    var database = firebase.database();
    database.ref().on('value', function(element){
    element.forEach(function(child){
      var wall = child.val();
      console.log(Object.entries(wall), 'funkar');
      Object.keys(wall);
      console.log(Object.keys(wall), 'yo');
      this.setState({firebase: Object.entries(wall)})

      // var name = child.val().forEach(function(child){
      //
      // });
    }.bind(this));
  }.bind(this));
}


  componentDidMount() {
    this.update();
    //this.getChat();
    //this.getFirebaseList();
  }



   writeOnOurWall(){
      var name = this.state.value;
      var message = this.state.message;
      console.log(name,message,'kusin');
      firebase.database().ref('Wall/').push({
      username: name,
      message: message
    });
  }



  update(){
    var database = firebase.database();
    database.ref().on('value', function(element){
      console.log(Object.entries(element.val().Wall));
      var newList = Object.entries(element.val().Wall);
      this.setState({
        firebase: newList
      })
    }.bind(this));
  }

getFirebaseList(){
  var mylist = this.state.firebase.map(event =>{
     var newList = this.state.firebase
     newList.push({key: event[0] ,message: event[1].message, username: event[1].username})
     console.log('newlist' + newList);
     this.setState({
       firebase: newList
     })
 });
 console.log(mylist);
}

deletePost(event, index){
    var refe = firebase.database();
    refe.ref('Wall/').child(index).remove();
    console.log(refe.ref(index));

}

   render(){
      const firebaseList = this.state.firebase.map(function(post){
            return <ul key={post[0]}>
              <li> {post[1].username}</li>
              <li> {post[1].message}</li>
              <button onClick={(event)=>this.deletePost(event, post[0])}>Delete</button>
            </ul>
      }.bind(this));
       return (
         <div>
           <h1>Tjena</h1>
           <h2>Write on our wall!</h2>
           <div>
          <p>our wall</p>
          {firebaseList}
           </div>
           <div>
             <input onChange={event => this.setState({value: event.target.value})} value={this.state.value} placeholder="Förnamn" type="text" />
             <input onChange={event => this.setState({message: event.target.value})} message={this.state.message} placeholder="Medelande" type="text" />
             <button onClick={this.writeOnOurWall}>Sign</button>
           </div>
         </div>
     );
   }
}

export default Firebase;

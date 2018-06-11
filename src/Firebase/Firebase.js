import React, { Component } from 'react'

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

var database = firebase.database();






class Firebase extends React.Component{


  constructor (props){
      super(props);
      this.readData();
  }

  readData(){
    var mydb = firebase.database().ref('Wall');
    mydb.on('value', function(snapshot){
      console.log(snapshot.val());
    })
}

   writeOnOurWall(){
      var name = document.getElementById('firstName').value;
      var message = document.getElementById('lastName').value
      console.log(name,message);
      firebase.database().ref('Wall/').set({
      username: name,
      message: message

    });
  }


   render(){
       return (
         <div>
           <h1>Tjena</h1>
           <h2>Write on our wall!</h2>
           <div>
          <p>our wall</p>
           </div>
           <div>
             <input id ='firstName' placeholder="Förnamn"></input>
             <input id = 'lastName' placeholder="Medelande"></input>
             <button onClick={this.writeOnOurWall}>Sign</button>
           </div>
         </div>
     );
   }


}



export default Firebase;

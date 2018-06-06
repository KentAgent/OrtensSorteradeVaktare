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

function writeUserData(userId, name, email) {
 firebase.database().ref('users/' + userId).set({
   username: name,
   email: email
 });
}

writeUserData(123,'Robban','Kamo');



class Firebase extends React.Component{



  // writeUserData('1231', 'robin', 'bror');

   render(){
       return (
         <div>
           <h1>Tjena</h1>
         </div>
     );
   }


}



export default Firebase;

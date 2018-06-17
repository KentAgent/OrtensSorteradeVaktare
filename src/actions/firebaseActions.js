import { GET_CHAT } from './types'
import firebase from 'firebase'

export const getChat = () => dispatch => {

      var database = firebase.database();
      database.ref().on('value', function(element){
      element.forEach(function(child){
        var wall = child.val();
        console.log(Object.entries(wall), 'funkar');
        Object.keys(wall);
        console.log(Object.keys(wall), 'yo');
        dispatch ({
          type: GET_CHAT,
          payload: Object.entries(wall)
        })

        // var name = child.val().forEach(function(child){
        //
        // });
      });
    });

}

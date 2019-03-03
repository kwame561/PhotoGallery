import * as firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAuRdR69OmJu-iECQ5DF8z6mT3aYCtC-Nw",
  authDomain: "photowall-ea942.firebaseapp.com",
  databaseURL: "https://photowall-ea942.firebaseio.com",
  projectId: "photowall-ea942",
  storageBucket: "photowall-ea942.appspot.com",
  messagingSenderId: "431928077249"
}

firebase.initializeApp(config)

const database = firebase.database()

export {database}
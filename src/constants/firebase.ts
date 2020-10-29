import firebase from 'firebase'
import firestore from 'firebase/firestore'
 const config = {
  apiKey: "AIzaSyA6qfhNOg54A8Evfe0G2PeRS2h4f81Pt3k",
  authDomain: "oppa-coding-challenge.firebaseapp.com",
  databaseURL: "https://oppa-coding-challenge.firebaseio.com",
  projectId: "oppa-coding-challenge",
  storageBucket: "oppa-coding-challenge.appspot.com",
  messagingSenderId: "246738910516",
  appId: "1:246738910516:web:155d7bef48ef1f1132f961"
};

let firebaseApp = firebase.initializeApp(config)
// firebase.auth().createUserWithEmailAndPassword('asmaa.hamdy9327@gmail.com','0149316741').then(res=>{
//   console.log(res)
// })

// firebase.auth().signInWithEmailAndPassword('sun80826@gmail.com','123456789');
// const db = firebaseApp.firestore()
 
export default firebaseApp
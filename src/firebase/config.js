import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALc8UfTKx8Tp6lJWOyfSFv8I416jf8Rrk",
    authDomain: "cooking-recipes-site-b6111.firebaseapp.com",
    projectId: "cooking-recipes-site-b6111",
    storageBucket: "cooking-recipes-site-b6111.appspot.com",
    messagingSenderId: "401493335565",
    appId: "1:401493335565:web:3fd896965ba4f9f5d6ff44"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }
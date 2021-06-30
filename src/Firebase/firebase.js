import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC7K9BO-crfhhS-K-XPtqBCU-b8Nuo0fLE',
  authDomain: 'gpuminershop-ecommerce.firebaseapp.com',
  projectId: 'gpuminershop-ecommerce',
  storageBucket: 'gpuminershop-ecommerce.appspot.com',
  messagingSenderId: '502654838504',
  appId: '1:502654838504:web:7608e27844f1d3d918cb5d'
}

const fb = firebase.initializeApp(firebaseConfig)

export const dataBase = fb.firestore()

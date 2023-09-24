import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseCredentials = {
  apiKey: "AIzaSyCHPJZfi2paZA8SS2yMn7mt16un2MyFUlA",
  authDomain: "nft-marketplace-108fe.firebaseapp.com",
  projectID: "nft-marketplace-108fe",
  storageBucket: "nft-marketplace-108fe.appspot.com",
  messagingSenderId: "631266110542",
  appId: "1:631266110542:web:4e47e11baed20ba4e9a71f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials);
}

export default firebase;

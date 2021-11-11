// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDlE5j01C7l_FQa4gqlrye-TeTYLVEmKA",
  authDomain: "bit-gallery.firebaseapp.com",
  databaseURL: "https://bit-gallery-default-rtdb.firebaseio.com",
  projectId: "bit-gallery",
  storageBucket: "bit-gallery.appspot.com",
  messagingSenderId: "725472383146",
  appId: "1:725472383146:web:65a467083fa64e443e00d3"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// exporting all of the firebase data
export default firebase;
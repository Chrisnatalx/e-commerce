import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDVODMMOV4prPX6jSL0m67MJ9rr5SznK8",
  authDomain: "e-commerce-coderhouse-51d7e.firebaseapp.com",
  projectId: "e-commerce-coderhouse-51d7e",
  storageBucket: "e-commerce-coderhouse-51d7e.appspot.com",
  messagingSenderId: "344105268348",
  appId: "1:344105268348:web:735c2d12d4fc7e1c4a45f9",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}

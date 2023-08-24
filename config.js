import * as firebase from "firebase"
export const firebaseConfig = {
  apiKey: "AIzaSyDmQeOWLmOJejMBnMW93yKk6R1jiBPrdpg",
  authDomain: "project-63-64cc7.firebaseapp.com",
  databaseURL: "https://project-63-64cc7-default-rtdb.firebaseio.com",
  projectId: "project-63-64cc7",
  storageBucket: "project-63-64cc7.appspot.com",
  messagingSenderId: "422933391300",
  appId: "1:422933391300:web:17e69ba7a1d06215b82691"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
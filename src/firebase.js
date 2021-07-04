import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQbjSi3eP9gxhjxB88zsnP4LOtVwSJTEM",
  authDomain: "tesla-clone-auth.firebaseapp.com",
  projectId: "tesla-clone-auth",
  storageBucket: "tesla-clone-auth.appspot.com",
  messagingSenderId: "947329235292",
  appId: "1:947329235292:web:558e76211971b3ec60a999",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };

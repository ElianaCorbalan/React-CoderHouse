import firebase from 'firebase/app';
import 'firebase/firestore';

const fbConfig = {
    apiKey: "AIzaSyCb2O0xlUV8KssWGnkEqUTsLtimcfV598Y",
    authDomain: "scenic-shift-312317.firebaseapp.com",
    projectId: "scenic-shift-312317",
    storageBucket: "scenic-shift-312317.appspot.com",
    messagingSenderId: "606423736567",
    appId: "1:606423736567:web:a6af49bca0369820c933f2"
};

const app = firebase.initializeApp(fbConfig);

export const firestore = firebase.firestore(app);

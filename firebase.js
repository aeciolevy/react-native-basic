import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC1KA1hQyOyFe21fMj_aexrbgDCKcE_B18",
    authDomain: "reactnative-52d94.firebaseapp.com",
    databaseURL: "https://reactnative-52d94.firebaseio.com",
    projectId: "reactnative-52d94",
    storageBucket: "reactnative-52d94.appspot.com",
    messagingSenderId: "402040914147"
};


var fire = firebase.initializeApp(config);
const databaseRef = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
databaseRef.settings(settings);    
    
export const occupationsFirestore = databaseRef.collection('occupations');
    



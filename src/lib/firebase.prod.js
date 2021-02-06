import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow send the database

//  we need a config here
const config = {
  apiKey: 'AIzaSyBZlofgl59iOFAo4_e03HbV31IueWp8Bwc',
  authDomain: 'netflix-f4973.firebaseapp.com',
  projectId: 'netflix-f4973',
  storageBucket: 'netflix-f4973.appspot.com',
  messagingSenderId: '880635559416',
  appId: '1:880635559416:web:c9a35943780748b1deaa0d',
};
const firebase = Firebase.initializeApp(config);

export { firebase };

import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKBudpsuvqx5X0LsSJpg2NSMrZ1JOX41c",
  authDomain: "marioplan-46ee7.firebaseapp.com",
  databaseURL: "https://marioplan-46ee7.firebaseio.com",
  projectId: "marioplan-46ee7",
  storageBucket: "marioplan-46ee7.appspot.com",
  messagingSenderId: "496423778023",
  appId: "1:496423778023:web:91d47407d143a5d9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
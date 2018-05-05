import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBMBphkVCCM1d_ItqpZBDCcXMi-t5oqEh0",
    authDomain: "goal-coach-fd375.firebaseapp.com",
    databaseURL: "https://goal-coach-fd375.firebaseio.com",
    projectId: "goal-coach-fd375",
    storageBucket: "goal-coach-fd375.appspot.com",
    messagingSenderId: "1096235804648"
};

export const firebaseApp = firebase.initializeApp(config);
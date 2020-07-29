import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAONvHm8IPBz0FjjkThidDyjjudWJJzHt0",
    authDomain: "authentication-f55b3.firebaseapp.com",
    databaseURL: "https://authentication-f55b3.firebaseio.com",
    projectId: "authentication-f55b3",
    storageBucket: "authentication-f55b3.appspot.com",
    messagingSenderId: "534638573138",
    appId: "1:534638573138:web:9c8365b26f61ed4c7b918b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (user, additionalData) => {
    if(!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        try{
            console.log(user.user);

            userRef.set({
                displayName: user.displayName,
                email: user.email,
                id: user.uid,
                ...additionalData
            });
        } catch(error){
            console.error(error.message);
        }
        
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);


export default firebase;
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyD1mxfqmd6762qUzoohACUnxwLHEFMsLAY",
        authDomain: "preguntas-respuestas-sofka.firebaseapp.com",
        projectId: "preguntas-respuestas-sofka",
        storageBucket: "preguntas-respuestas-sofka.appspot.com",
        messagingSenderId: "37586708611",
        appId: "1:37586708611:web:abe8843d97321155e393b6"
})

export const google = new firebase.auth.GoogleAuthProvider();
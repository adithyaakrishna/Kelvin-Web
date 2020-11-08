import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDxPYW_muFja_LXEWLgSz_P9hVjvmeKO2E",
  authDomain: "kelvin-863e6.firebaseapp.com",
  databaseURL: "https://kelvin-863e6.firebaseio.com",
  projectId: "kelvin-863e6",
  storageBucket: "kelvin-863e6.appspot.com",
  messagingSenderId: "999774462302",
  appId: "1:999774462302:web:7b5d0a82a1473ed721afcf",
  measurementId: "G-N2HMCLRHXP"
};

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth;
  export const firestore = firebase.firestore;
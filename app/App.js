import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import * as firebase from 'firebase'
import Main from './components/Main'
import routes from './config/routes'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDiyrQwYKNBU1ScUeCodiKwF1-JTAWk9t0",
    authDomain: "github-notetaker-demo.firebaseapp.com",
    databaseURL: "https://github-notetaker-demo.firebaseio.com",
    storageBucket: "github-notetaker-demo.appspot.com",
    messagingSenderId: "142928810951"
};
firebase.initializeApp(config);

render((
    <Router history={hashHistory}>
        {routes}
    </Router>
), document.getElementById('app'));

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, DefaultRoute, hashHistory, browserHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'

module.exports = (
    <Route path="/" component={Main}>
        {/*Each route is define with Route*/}
        <Route path="profile/:username" component={Profile} />
        <IndexRoute component={Home} />
    </Route>
);
import React, {Component} from 'react'
import {Router} from 'react-router'
import * as firebase from 'firebase'
import {ReactFireMixin} from 'reactfire'
import UserProfile from './Github/userProfile'
import Repos from './Github/Repos'
import Notes from './Notes/Notes'
import helpers from '../utils/helper'


class Profile extends Component {
    // mixins: [ReactFireMixin],
    // mixins: [Router.State],
    constructor(props){
        super(props)
        this.state = {
            notes:['note1','note2','note3'],
            bio: {name: 'Brian Paintsil'},
            repos:[1,2,3]
        }
    }   
    //runs after the component output has been rendered to the DOM
    componentDidMount(){
        const rootRef = firebase.database().ref().child(this.props.routeParams.username);
        const fullNameRef = rootRef.child('Fullname');
        fullNameRef.on('value', snap => {
            this.setState({
                notes: snap.val()
            });
        });

        helpers.getGithubInfo(this.props.routeParams.username)
            .then(function(dataObj){
                // console.log(dataObj.bio);
                this.setState({
                    bio: dataObj.bio,
                    repos: dataObj.repos
                });
            }.bind(this));
        // this.ref = new firebase('https://github-notetaker-demo.firebaseio.com');
        // const childRef = this.ref.childRef(this.props.routeParams.username);
        // this.bindAsArray(childRef, 'notes');
    }

    render(){
        // const username = this.props.params.username
        const username = this.props.routeParams.username;
        return(
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes} />
                </div>
            </div>
        )
    }
}

export default Profile
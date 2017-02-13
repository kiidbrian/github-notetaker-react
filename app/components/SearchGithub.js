import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'
import {Router, hashHistory} from 'react-router'

export default class SearchGithub extends Component {
    constructor(){
        super()
        this.state = {
            username: ""
        }

        this.onUsernameInputChange = this.onUsernameInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){
        const username = this.state.username;
        // console.log(username);
        hashHistory.push(`/profile/${username}`);
    }

    onUsernameInputChange(e) {
        this.setState({
            username: e.target.value
        },()=>{
            console.log(this.state.username);
        })    
    }

    render(){
        return(
            <div className='col-sm-12'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group col-sm-7'>
                        <input type='text' 
                            className='form-control' 
                            value={this.state.username}
                            onChange={this.onUsernameInputChange} />
                    </div>  
                    <div className='form-group col-sm-5'>
                        <button type='submit' className='btn btn-block btn-primary'>Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
}
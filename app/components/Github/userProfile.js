import React, { Component } from 'react'

class UserProfile extends Component {
    
    render(){
        return(
            <div> 
                USER PROFILE <br />
                Username: {this.props.username} <br />
            </div>
        )
    }
}

UserProfile.propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
}

export default UserProfile
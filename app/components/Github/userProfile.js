import React, { Component } from 'react'

export default class UserProfile extends Component {
    
    render(){
        return(
            <div> 
                <h3>User Profile</h3>
                <ul className="list-group">
                    {this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url} className="img-rounded"/></li>}
                    {this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
                    {this.props.bio.login && <li className="list-group-item">Username: {this.props.bio.login}</li>}
                    {this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
                    {this.props.bio.location && <li className="list-group-item">Location: {this.props.bio.location}</li>}
                </ul>
            </div>
        )
    }
}

UserProfile.propTypes = {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
}
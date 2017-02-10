import React, { Component } from 'react'

class Repos extends Component {

    render(){
        const repos = this.props.repos.map(function(repo,index){
            // console.log(repo);
            return <li className="list-group-item" key={index}> {repo.name} </li>
        });
        return(
            <div> 
                <h3>REPOS</h3> <br/>
                {repos}
            </div>
        )
    }
}

Repos.propTypes = {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
}

export default Repos
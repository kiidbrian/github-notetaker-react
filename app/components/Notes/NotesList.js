import React, { Component } from 'react'
import {render} from 'react-dom'

class NotesList extends Component {
    render(){
        const notes = this.props.notes.map(function(note,index){
            return <li className="list-group-item" key={index}> {note} </li>
        });
        return(
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
}

export default NotesList

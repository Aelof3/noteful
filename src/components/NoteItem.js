import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class NoteItem extends Component {
    render(){
        const { id, name, modified, folderId, content, path } = this.props;
        const d = new Date(modified);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return (
            <li key={id} data-id={folderId} className={`note--item ${path.includes(id) ? 'note--item--checked' : ''}`}>
                <Link 
                    className="note--item--link"
                    to={`/note/${id}`}
                >
                    {name}
                </Link>
                <div className="section--row">
                    <p className="note--item--modified">{`Date modified on ${d.toLocaleString()}`}</p>
                    <button className="note--item--delete">Delete Note</button>
                </div>
                <p className="note--item--content hidden">{content}</p>
            </li>
       );
    }
}

export default NoteItem;

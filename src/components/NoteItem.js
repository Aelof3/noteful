import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import DefaultContext from './context/DefaultContext';

class NoteItem extends Component {
    static contextType = DefaultContext;
    deleteNote = () => {
        fetch(`http://localhost:9090/notes/${this.props.id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json'
            },
          })
          .then( r=>{
            this.context.updateStore();
            this.props.history.push('/');
          });
    }
    render(){
        const { id, name, modified, folderId, content, history } = this.props;
        const d = new Date(modified);
        
        return (
            <li data-id={folderId} className={`note--item ${history.location.pathname.includes(id) ? 'note--item--checked' : ''}`}>
                <Link 
                    className="note--item--link"
                    to={`/note/${id}`}
                >
                    {name}
                </Link>
                <div className="section--row">
                    <p className="note--item--modified">{`Date modified on ${d.toLocaleString()}`}</p>
                    <button 
                        onClick={this.deleteNote}
                        className="note--item--delete"
                    >
                        Delete Note
                    </button>
                </div>
                <p className="note--item--content hidden">{content}</p>
            </li>
       );
    }
}

export default withRouter(NoteItem);
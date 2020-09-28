import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultContext from './context/DefaultContext';

class NoteItem extends Component {
    static contextType = DefaultContext;
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
                        onClick={e=>{
                            this.context.deleteNote(id, ()=>{
                                history.push('/');
                            });
                        }}
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

export default NoteItem;

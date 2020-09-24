import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteItem from '../NoteItem';

class MainSection extends Component {
    getNoteList = () => {
        if ( typeof this.props.store !== "object" ) return;
        
        return this.props.store.notes.map(note => {
            return (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    path={this.props.path}
                    name={note.name}
                    modified={note.modified}
                    folderId={note.folderId}
                    content={note.content}
                />
            );
        });
    }
    getBottomContents = () => {
        if ( !this.props.path.includes(`/note/`) ) return (<button className="note--item--add">Add note</button>);
        return (<p className="note--item--content">{this.props.store.notes[0].content}</p>);
    }
    render(){
        return (
            <main className="section--main">
                <ul>
                    {this.getNoteList()}
                </ul>
                <div className="section--row">
                    {this.getBottomContents()}
                </div>
            </main>
       );
    }
}

export default MainSection;
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderSection from '../sections/HeaderSection';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SidebarSection';

class NoteRoute extends Component {
    state = {
        name: "Note"
    }

    render(){
        const store = {
            notes: this.props.store.notes.filter( note => this.props.path.includes(note.id) ),
            folders: this.props.store.folders
        }
        return (
            <div className="App">
                              
                <SidebarSection 
                    store={store}
                    path={this.props.path}
                    history={this.props.history}
                />
                <MainSection 
                    store={store}
                    path={this.props.path}
                    history={this.props.history}
                />

            </div>
       );
    }
}

export default NoteRoute;
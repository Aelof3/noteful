import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderSection from '../sections/HeaderSection';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SidebarSection';

class FolderRoute extends Component {
    state = {
        name: "Folder"
    }

    render(){
        const store = {
            notes: this.props.store.notes.filter( note => this.props.path.includes(note.folderId) ),
            folders: this.props.store.folders
        }

        return (
            <div className="App">
                              
                <SidebarSection 
                    store={store}
                    path={this.props.path}
                />
                <MainSection 
                    store={store}
                    path={this.props.path}
                />

            </div>
       );
    }
}

export default FolderRoute;

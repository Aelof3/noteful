import React, { Component } from 'react';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SidebarSection';

class FolderRoute extends Component {
    render(){
        const store = {
            notes: this.props.store.notes.filter( note => this.props.history.location.pathname.includes(note.folderId) ),
            folders: this.props.store.folders
        }

        return (
            <div className="App">
                              
                <SidebarSection 
                    store={store}
                    history={this.props.history}
                />
                <MainSection 
                    store={store}
                    history={this.props.history}
                />

            </div>
       );
    }
}

export default FolderRoute;

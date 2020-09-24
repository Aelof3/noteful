import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FolderItem from '../FolderItem';
import FolderRoute from '../routes/FolderRoute';

class SidebarSection extends Component {
    getFolderList = () => {
        if ( typeof this.props.store !== "object" || this.props.path.includes("/note/") ) return;

        return this.props.store.folders.map(folder => {
            return (
                <FolderItem
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    path={this.props.path}
                />
            );
        });
    }
    getBottomButton = () => {
        if ( !this.props.path.includes("/note/") ) return (<button className="folder--item--add">Add folder</button>);
        return (<Link 
                    to={`/`}
                    className="button--back"
                >
                    Go back
                </Link>
        );
    }
    getFolderName = () => {
        if (this.props.path.includes("/note/")) {
            let folder = this.props.store.folders.find( folder => {
                return folder.id === this.props.store.notes[0].folderId
            } );
            return (
                <h3>Folder: {folder.name}</h3>
            )
        }
    }
    render(){
        return (
            <section className="section--sidebar">
                <ul>
                    {this.getFolderList()}
                </ul>
                {this.getBottomButton()}
                {this.getFolderName()}
            </section>
       );
    }
}

export default SidebarSection;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FolderItem from '../FolderItem';
import DefaultContext from '../context/DefaultContext';

class SidebarSection extends Component {
    static contextType = DefaultContext;
    getFolderList = () => {
        if ( typeof this.props.store !== "object" || this.props.history.location.pathname.includes("/note/") ) return;

        return this.props.store.folders.map(folder => {
            return (
                <FolderItem
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    history={this.props.history}
                />
            );
        });
    }
    getBottomButton = () => {
        if ( !this.props.history.location.pathname.includes("/note/") ) {
            return (
            <Link 
                to={`/addfolder/`}
                className="folder--item--add"
            >
                Add Folder
            </Link>);
        }

        return (<Link 
                    to={`/`}
                    className="button--back"
                >
                    Go back
                </Link>
        );
    }
    getFolderName = () => {
        if (this.props.history.location.pathname.includes("/note/")) {
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

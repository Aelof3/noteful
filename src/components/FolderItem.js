import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class FolderItem extends Component {
    render(){
        const { id, name, path } = this.props;

        return (
            <li key={id} className={`folder--item ${path.includes(id) ? 'folder--item--checked' : ''}`}>
                <Link 
                    to={`/folder/${id}`}
                >
                    {name}
                </Link>
            </li>
       );
    }
}

export default FolderItem;

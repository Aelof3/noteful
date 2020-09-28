import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FolderItem extends Component {
    render(){
        const { id, name, history } = this.props;

        return (
            <li key={id} className={`folder--item ${history.location.pathname.includes(id) ? 'folder--item--checked' : ''}`}>
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

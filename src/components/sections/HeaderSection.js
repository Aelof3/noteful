import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HeaderSection extends Component {
    render(){
        return (
            <header>
                <Link to={'/'}>
                    <h1>Noteful</h1>
                </Link>
            </header>
       );
    }
}

export default HeaderSection;

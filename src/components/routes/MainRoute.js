import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderSection from '../sections/HeaderSection';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SidebarSection';

class MainRoute extends Component {
    state = {
        name: "Main"
    }

    render(){
        return (
            <div className="App">
              
                <SidebarSection 
                    store={this.props.store}
                    path={this.props.path}
                />
                <MainSection 
                    store={this.props.store}
                    path={this.props.path}
                />

            </div>
       );
    }
}

export default MainRoute;
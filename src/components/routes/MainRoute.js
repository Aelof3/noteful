import React, { Component } from 'react';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SidebarSection';

class MainRoute extends Component {
    render(){
        return (
            <div className="App">
              
                <SidebarSection 
                    store={this.props.store}
                    history={this.props.history}
                />
                <MainSection 
                    store={this.props.store}
                    history={this.props.history}
                />

            </div>
       );
    }
}

export default MainRoute;
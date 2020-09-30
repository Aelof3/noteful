import React, { Component } from 'react';
import MainSection from '../sections/MainSection';
import SidebarSection from '../sections/SidebarSection';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../errors/ErrorBoundary';

class MainRoute extends Component {
    render(){
        return (
            <div className="App">
                <ErrorBoundary message="Sidebar Section Error">
                    <SidebarSection 
                        store={this.props.store}
                    />
                </ErrorBoundary>
                <ErrorBoundary message="Main Section Error">
                    <MainSection 
                        store={this.props.store}
                    />
                </ErrorBoundary>
            </div>
       );
    }
}

export default withRouter(MainRoute);
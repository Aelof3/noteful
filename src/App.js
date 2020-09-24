import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import { createBrowserHistory } from "history";
import './App.css';
import FolderRoute from './components/routes/FolderRoute';
import MainRoute from './components/routes/MainRoute';
import NoteRoute from './components/routes/NoteRoute';
import HeaderSection from './components/sections/HeaderSection';
import SidebarSection from './components/sections/SidebarSection';
import MainSection from './components/sections/MainSection';
import store from './dummy-store';

class App extends Component {
  state = {
    store: store
  }
  
  render(){
    return (
      <Router>
        <HeaderSection 
            store={this.state.store}
        />
            <Route 
              exact path='/'
              render={()=>{
                  return ( 
                    <MainRoute store={this.state.store} path={createBrowserHistory().location.pathname} />
                  )
                }
              }
            />
            <Route 
              path='/folder/:folderId'
              render={()=>{
                  return ( 
                    <FolderRoute store={this.state.store} path={createBrowserHistory().location.pathname} />
                  )
                }
              }
            />
            <Route 
              path='/note/:id'
              render={()=>{
                  return ( 
                    <NoteRoute store={this.state.store} path={createBrowserHistory().location.pathname} />
                  )
                }
              }
            />
      </Router>
    );
  }
}

export default App;
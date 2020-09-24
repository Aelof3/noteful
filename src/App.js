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
import DefaultContext from './components/context/DefaultContext';
import store from './dummy-store';

class App extends Component {
  static contextType = DefaultContext;
  state = {
    store: store,
    url: 'http://localhost:9090'
  }
  getFolders = () => {
    fetch(`${this.state.url}/folders`)
      .then( r=>r.json())
      .then( r=>{
        this.setState({
          store: {
            folders: r,
            notes: this.state.store.notes
          }
        })
      })
  }
  getNotes = () => {
    fetch(`${this.state.url}/notes`)
      .then( r=>r.json())
      .then( r=>{
        this.setState({
          store: {
            folders: this.state.store.folders,
            notes: r
          }
        })
        //this.props.h.push('/');
      })
  }
  deleteNote = (id) => {
    fetch(`${this.state.url}/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
      .then( r=>this.getNotes() );
  }
  deleteFolder = (id) => {
    fetch(`${this.state.url}/folders/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
      .then( r=>this.getNotes() );
  }
  componentDidMount(){
    this.getFolders();
    this.getNotes();
  }
  render(){
    const contextValue = {
      getNotes: this.getNotes,
      getFolders: this.getFolders,
      deleteFolder: this.deleteFolder,
      deleteNote: this.deleteNote,
    }

    return (
      <DefaultContext.Provider value={contextValue}>
        <Router>
          <HeaderSection 
              store={this.state.store}
          />
              <Route 
                exact path='/'
                render={({history})=>{
                    return ( 
                      <MainRoute history={history} store={this.state.store} path={createBrowserHistory().location.pathname} />
                    )
                  }
                }
              />
              <Route 
                path='/folder/:folderId'
                render={({history})=>{
                    return ( 
                      <FolderRoute history={history} store={this.state.store} path={createBrowserHistory().location.pathname} />
                    )
                  }
                }
              />
              <Route 
                path='/note/:id'
                render={({history})=>{
                    return ( 
                      <NoteRoute history={history} store={this.state.store} path={createBrowserHistory().location.pathname} />
                    )
                  }
                }
              />
        </Router>
      </DefaultContext.Provider>
    );
  }
}

export default App;
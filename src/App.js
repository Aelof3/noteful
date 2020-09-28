import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import FolderRoute from './components/routes/FolderRoute';
import MainRoute from './components/routes/MainRoute';
import NoteRoute from './components/routes/NoteRoute';
import AddFolder from './components/AddFolder';
import AddNote from './components/AddNote';
import HeaderSection from './components/sections/HeaderSection';
import DefaultContext from './components/context/DefaultContext';
import store from './dummy-store';

class App extends Component {
  static contextType = DefaultContext;
  state = {
    store: store,
    url: 'http://localhost:9090'
  }
  getFolders = (callback) => {
    fetch(`${this.state.url}/folders`)
      .then( r=>r.json())
      .then( r=>{
        if ( typeof callback === "function" ) callback(this.state.store);
        this.setState({
          store: {
            folders: r,
            notes: this.state.store.notes
          }
        });
      })
  }
  getNotes = (callback) => {
    fetch(`${this.state.url}/notes`)
      .then( r=>r.json())
      .then( r=>{
        if ( typeof callback === "function" ) callback(this.state.store);
        this.setState({
          store: {
            folders: this.state.store.folders,
            notes: r
          }
        });
      })
  }
  deleteNote = (id, callback) => {
    fetch(`${this.state.url}/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
      .then( r=>{
        this.getNotes(callback);
      });
  }
  deleteFolder = (id,callback) => {
    fetch(`${this.state.url}/folders/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        },
      })
      .then( r => {
        this.getNotes(callback);
      } );
  }
  addNote = (data, callback) => {
    fetch(`${this.state.url}/notes/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( r=>{
        this.getNotes(callback);
      });
  }
  addFolder = (data,callback) => {
    fetch(`${this.state.url}/folders/`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( r => {
        this.getFolders(callback);
      } );
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
      addFolder: this.addFolder,
      addNote: this.addNote,
    }

    return (
      <DefaultContext.Provider value={contextValue}>
          <HeaderSection 
              store={this.state.store}
          />
          <Route 
            exact path='/'
            render={({history})=>{
                return ( 
                  <MainRoute 
                    history={history} 
                    store={this.state.store} 
                  />
                )
              }
            }
          />
          <Route 
            path='/folder/:folderId'
            render={({history})=>{
                return ( 
                  <FolderRoute 
                    history={history} 
                    store={this.state.store} 
                  />
                )
              }
            }
          />
          <Route 
            path='/addfolder/'
            render={({history})=>{
                return ( 
                  <AddFolder 
                    history={history} 
                    store={this.state.store} 
                  />
                )
              }
            }
          />
          <Route 
            path='/note/:id'
            render={({history})=>{
                return ( 
                  <NoteRoute 
                    history={history} 
                    store={this.state.store} 
                  />
                )
              }
            }
          />
          <Route 
            path='/addnote/'
            render={({history})=>{
                return ( 
                  <AddNote 
                    history={history} 
                    store={this.state.store} 
                  />
                )
              }
            }
          />
      </DefaultContext.Provider>
    );
  }
}

export default App;
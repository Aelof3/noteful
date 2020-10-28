import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import FolderRoute from './components/routes/FolderRoute';
import MainRoute from './components/routes/MainRoute';
import NoteRoute from './components/routes/NoteRoute';
import NotFoundRoute from './components/routes/NotFoundRoute';
import AddFolder from './components/AddFolder';
import AddNote from './components/AddNote';
import HeaderSection from './components/sections/HeaderSection';
import DefaultContext from './components/context/DefaultContext';

class App extends Component {
  
  static contextType = DefaultContext;

  state = {
    store: {
      folders: [],
      notes: []
    },
    url: 'https://rocky-dawn-01034.herokuapp.com'
    //url: 'http://localhost:8000'
  }
  updateStore = () => {
    this.getFolders();
    this.getNotes();
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
        });
      })
      .catch( e => {
          throw new Error(`Error retrieving folders: ${e.message}`);
      } );
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
        });
      })
      .catch( e => {
          throw new Error(`Error retrieving notes: ${e.message}`);
      } );
  }
  componentDidMount(){
    this.updateStore();
  }
  render(){
    const contextValue = {
      ...this.state,
      updateStore: this.updateStore
    }

    return (
      <DefaultContext.Provider value={contextValue}>
          <HashRouter >
            <HeaderSection />
            <Switch>
              <Route 
                exact path='/'
                render={()=><MainRoute store={this.state.store}/>}
              />
              <Route 
                path='/folder/:folderId'
                render={()=><FolderRoute store={this.state.store}/>}
              />
              <Route 
                path='/note/:id'
                render={()=><NoteRoute store={this.state.store}/>}
              />
              <Route 
                path='/add-folder/'
                render={()=><AddFolder store={this.state.store}/>}
              />
              <Route 
                path='/add-note/'
                render={()=><AddNote store={this.state.store}/>}
              />
              <Route 
                render={()=><NotFoundRoute />}
              />
            </Switch>
        </HashRouter>
      </DefaultContext.Provider>
    );
  }
}

export default App;
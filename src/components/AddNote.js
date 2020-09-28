import React, { Component } from 'react';
import SidebarSection from './sections/SidebarSection';
import DefaultContext from './context/DefaultContext';

class AddNote extends Component {
    static contextType = DefaultContext;
    handleOnSumbit = (form) => {
        console.log(form);
        let f = new FormData(form);
        let data = {
            name: f.get("noteName"),
            modified: new Date().toISOString(),
            content: f.get("noteContent"),
            folderId: f.get("folderId")
        }
        this.context.addNote(data,()=>{
            this.props.history.push("/");
        });
    }
    getFolderList = () => {
        if ( typeof this.props.store !== "object" || this.props.history.location.pathname.includes("/note/") ) return;

        return this.props.store.folders.map(folder => {
            return (
                <option
                    value={folder.id}
                >
                    {folder.name}
                </option>
            );
        });
    }
    render() {

        // id, name, modified, folderId, content

        return (
            <div className="App">
              
                <SidebarSection 
                    store={this.props.store}
                    history={this.props.history}
                />
                <main className="section--main">
                    <form
                        className="add--form"
                        onSubmit={(e)=>{
                            e.preventDefault();
                            this.handleOnSumbit(e.target);
                        }}
                    >   
                        <label htmlFor="noteName">Note name:</label>
                        <input type="text" id="noteName" name="noteName" />
                        <label htmlFor="noteContent">Content:</label>
                        <textarea id="noteContent" name="noteContent"></textarea>
                        <select name="folderId" id="folderId">
                            {this.getFolderList()}
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default AddNote;
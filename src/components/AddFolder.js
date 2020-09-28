import React, { Component } from 'react';
import SidebarSection from './sections/SidebarSection';
import DefaultContext from './context/DefaultContext';

class AddFolder extends Component {
    static contextType = DefaultContext;
    handleOnSumbit = (form) => {
        console.log(form);
        let f = new FormData(form);
        let name = f.get("folderName");
        this.context.addFolder({name:name},()=>{
            this.props.history.push("/")
        });
    }
    render() {
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
                        <label htmlFor="folderName">Folder name:</label>
                        <input type="text" id="folderName" name="folderName" />
                        <button type="submit">Submit</button>
                    </form>
                </main>
            </div>
        )
    }
}

export default AddFolder;
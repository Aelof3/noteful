import React from 'react';

const DefaultContext = React.createContext({
    getNotes: () => {},
    getFolders: () => {},
    deleteNote: () => {},
    deleteFolder: () => {},
    addNote: () => {},
    addFolder: () => {},
  })

export default DefaultContext
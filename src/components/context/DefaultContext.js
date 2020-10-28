import React from 'react';

const DefaultContext = React.createContext({
    updateStore: () => {},
    url: 'http://localhost:8000'
})

export default DefaultContext;
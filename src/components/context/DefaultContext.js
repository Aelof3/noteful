import React from 'react';

const DefaultContext = React.createContext({
    updateStore: () => {},
    url: 'https://rocky-dawn-01034.herokuapp.com'
    //url: 'http://localhost:8000'
})

export default DefaultContext;
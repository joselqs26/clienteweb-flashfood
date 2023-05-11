import {createContext, useState} from 'react';

const ContextGeneral = createContext ();

const ContextGeneralProvider = ({children}) => {
    const [user, setUser] = useState({});

    const updateUser = (newUser) => {
        setUser({...user, ...newUser});
    }

    const contextValue = {user, updateUser};

    return (
        <ContextGeneral.Provider value={contextValue}>
            {children}
        </ContextGeneral.Provider>
    )
}
const ContextGeneralConsumer = ContextGeneral.Consumer

export { ContextGeneralProvider, ContextGeneral };
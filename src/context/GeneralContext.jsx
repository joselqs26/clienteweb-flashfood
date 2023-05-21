import {createContext, useState} from 'react';

const ContextGeneral = createContext ();

const ContextGeneralProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [flagPedido, setFlagPedido] = useState(false);

    const updateUser = (newUser) => {
        setUser({...user, ...newUser});
    }

    const contextValue = {user, updateUser, flagPedido, setFlagPedido, };

    return (
        <ContextGeneral.Provider value={contextValue}>
            {children}
        </ContextGeneral.Provider>
    )
}
const ContextGeneralConsumer = ContextGeneral.Consumer

export { ContextGeneralProvider, ContextGeneral };
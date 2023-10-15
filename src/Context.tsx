import { FC, ReactNode, useState, createContext, useContext } from 'react';
import { ContextType, ContextDataType } from './types';

const Context = createContext<ContextType>({} as ContextType);

const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {

    const [context, setContext] = useState<ContextDataType>({
        client_id: "",
        client_secret: "",
        access_token: null
    });

    return (
        <Context.Provider value={{
            context,
            setContext
        }}>
            {children}
        </Context.Provider>
    )

};

export default Context;

export { ContextProvider };
import { useState, createContext } from 'react';
import { ContextType, ContextDataType } from './types';

const [context, setContext] = useState<ContextDataType>({
    client_id: "",
    client_secret: "",
    access_token: null
});

const Context = createContext<ContextType>({
    context: context,
    setContext: setContext
});

export default Context;
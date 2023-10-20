import { createContext } from 'react';
import { ContextType } from './types';

// Create a new context instance that will hold application state and a function to update it.
const Context = createContext<ContextType>({} as ContextType);

export default Context;
import { createContext } from 'react';
import { ContextType } from './types';

const Context = createContext<ContextType>({} as ContextType);

export default Context;
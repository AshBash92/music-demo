import React from 'react';
import { ContextDataType } from './types';

const Context = React.createContext<ContextDataType>({});

export default Context;
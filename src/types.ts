import { Dispatch, SetStateAction } from 'react';

export interface ContextDataType {
    client_id: string;
    client_secret: string;
    access_token: null | string;
    route: string;
  }
  

export type ContextType = {
    context: ContextDataType;
    setContext: Dispatch<SetStateAction<ContextDataType>>;
}
import { Dispatch, SetStateAction } from 'react';

// Define the structure of the state object, representing application data.
export interface StateType {
  clientId: string; // Spotify client ID
  clientSecret: string; // Spotify client secret
  accessToken: null | string; // Access token (null if not fetched, string if available)
  route: string; // Current route or page
}

// Define the structure of the context object, which holds the state and a function to set the state.
export type ContextType = {
  state: StateType; // Represents the application's state
  setState: Dispatch<SetStateAction<StateType>>; // A function to update the state
}
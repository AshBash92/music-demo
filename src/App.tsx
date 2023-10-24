import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import getToken from './requests/tokenRquest'; // Import the function to retrieve a Spotify API token
import Search from './views/Search'; // Import the Search view component
import Play from './views/Play'; // Import the Play view component
import Context from './Context'; // Import the application context provider
import { StateType } from './types';

const App: React.FC = () => {
  // Initialize the application state, including Spotify credentials and access token
  const [state, setState] = useState<StateType>({
    clientId: process.env.REACT_APP_CLIENT_ID!, // Spotify client ID
    clientSecret: process.env.REACT_APP_CLIENT_SECRET!, // Spotify client secret
    accessToken: null, // Initially set to null and will be fetched later
    route: 'Home', // Home page route set to 'Search'
  });

  useEffect(() => {
    // Use the 'getToken' function to retrieve and update the access token in the application state
    getToken({ state, setState });
  }, []);

  return (
    <Context.Provider value={{ state, setState }}>
      {/* Set up application routing using React Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<Search />} /> {/* Route for the 'Search' view */}
          <Route
            path="/play/:title/:artist/:id/:img"
            element={<Play />}
          /> {/* Route for the 'Play' view with dynamic parameters */}
          <Route path="/*" element={<Search />} /> {/* Default route, which redirects to 'Search' */}
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
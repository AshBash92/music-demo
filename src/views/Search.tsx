import React, { useContext, useState } from 'react';
import '../App.css';
import Tiles from '../components/TileComponent';
import Context from '../Context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Search: React.FC = () => {
  // Access the application state and state updater function from the context
  const { state, setState } = useContext(Context);

  // State for the search input and Spotify data
  const [searchInput, setSearchInput] = useState<string>('');
  const [spotifyData, setSpotifyData] = useState<any | null>(null);

  // Event handler for input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Event handler for search when the 'Enter' key is pressed
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetchData(state.accessToken, searchInput);
    }
  };

  // Function to fetch data from the Spotify API
  const fetchData = async (accessToken: string | null, searchInput: string) => {
    const sanitizedSearchInput = searchInput.replace(/ /g, '+');
    const apiUrl = `https://api.spotify.com/v1/search?q=${sanitizedSearchInput}&type=album%2Ctrack%2Cartist&market=US&limit=12&offset=4&sort=popularity`;

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSpotifyData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="Search">
        <header className="Search-header">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ margin: '0px' }}>Ongaku</h1>
            <MusicNoteIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
          </Box>
          <h6 style={{ marginTop: '0px' }}>music to your ears</h6>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <TextField
              id="searchBar"
              label="Search for Song"
              variant="standard"
              value={searchInput}
              onKeyUp={handleSearch}
              onChange={handleInputChange}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
          </Box>
          {/* Tiles show up after search fires */}
          {spotifyData && <Tiles data={spotifyData} />}
        </header>
      </div>
    </>
  );
};

export default Search;

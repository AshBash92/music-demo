import React, { useContext, useState } from 'react';
import '../App.css';
import Tiles from '../components/TileComponent';
import Searchbar from '../components/SearchbarComponent';
import getSearch from '../requests/searchRequest';
import Context from '../Context';
import Box from '@mui/material/Box';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Search: React.FC = () => {
  // Access the application state and state updater function from the context
  const { state, setState } = useContext(Context);

  // State to store the Spotify data fetched by the SearchbarComponent
  const [searchData, setSearchData] = useState<any | null>(null);

  const updateSearchData = (data: any) => {
    setSearchData(data);
  };

  return (
    <>
      <div style={{minHeight: '100vh'}}>
        <header style={{ display: 'flex', margin: '25px'}}>
          <div style={{ display: 'flex', alignItems: 'flex-end', width: '45%' }}>
            <h1 style={{ margin: '0px' }}>Ongaku</h1>
            <MusicNoteIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
          </div>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Searchbar state={state} updateSearchData={updateSearchData} getSearch={getSearch} />
          </Box>
        </header>
        {/* <div>
          <label>Items per page: </label>
          <select>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div> */}
        {/* Tiles show up after search fires */}
        {searchData && <Tiles searchData={searchData} />}
      </div>
    </>
  );
};

export default Search;

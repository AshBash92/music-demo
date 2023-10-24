import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

// Props for a single tile component
interface SearchbarProps {
    state: { accessToken: string | null };
    updateSearchData: ( data: any ) => void;
    getSearch: ( 
        accessToken: string | null,
        searchInput: string
    ) => Promise<any>;
  }

const Searchbar: React.FC<SearchbarProps> = ({ state, updateSearchData, getSearch }) => {
    const [ searchInput, setSearchInput ] = useState<string>('');

    // Event handler for input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
        };
        
        // Event handler for search when the 'Enter' key is pressed
        const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            try {
                const data = await getSearch(state.accessToken, searchInput);
                updateSearchData(data);
            } catch (error) {
                console.error('Error: ', error);
            }
        }
    };

    return (
        <>
            <SearchIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <TextField
              id="searchBar"
              label="Search for Song"
              variant="standard"
              value={searchInput}
              onKeyDown={handleSearch}
              onChange={handleInputChange}
              InputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }}
            />
        </>
    );
}

export default Searchbar;
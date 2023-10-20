import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from 'react-router-dom';

// Define the Play component
const Play: React.FC = () => {
  // Retrieve route parameters (title, artist, id, img) using useParams
  const { title, artist, id, img } = useParams<any>();
  const theme = useTheme(); // Access the theme from Material-UI

  return (
    <>
      <div className="Play">
        <header className="Play-header">
          {/* Create a link back to the search page */}
          <Link to="/search" style={{ textDecoration: 'none', color: 'white' }}>
            {/* Create a header with the Ongaku title and a MusicNote icon */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ fontWeight: 'bold' }}>Ongaku</p>
              <MusicNoteIcon sx={{ color: 'white', marginRight: 1, margin: '0.5rem' }} />
            </Box>
          </Link>
        </header>

        {/* Embedded Player for the Spotify track */}
        <iframe
          src={`https://open.spotify.com/embed/track/${id}`}
          width="300"
          height="380"
          style={{ border: 0 }} // Remove the iframe border
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </div>
    </>
  );
}

export default Play;
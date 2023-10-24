import React, { useState, useEffect } from 'react';
import Grow from '@mui/material/Grow';
import { Link } from 'react-router-dom';

// Props for a single tile component
interface TileProps {
  index: string;
  data: any;
}

const Tile: React.FC<TileProps> = ({ index, data }) => {
  // State to control the visibility of the tile with an animation
  const [isTileVisible, setIsTileVisible] = useState(false);
  const item = data.tracks.items[index];

  useEffect(() => {
    // When the component mounts, set the tile as visible to trigger the animation
    setIsTileVisible(true);
  }, []);

  if ( item ) {
    const title = item.album.name;
    const artist = item.album.artists[0].name;
    const cover = item.album.images[1].url;
    const id = item.id;

    if (cover) {
      // Modify the cover image URL for display
      const modifiedCover = cover.replace(/^https:\/\/i\.scdn\.co\/image\//, '');

      return (
        <Grow in={isTileVisible} timeout={1000}>
          <Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to={`/play/${title}/${artist}/${id}/${modifiedCover}`}>
            <div className='tileLink' style={{ display: 'flex', padding: '25px', flexDirection: 'column' }}>
              <img
                style={{ width: '30vw', minWidth: '100px', maxWidth: '300px' }}
                src={cover}
                alt={`Album cover for ${title} by ${artist}`}
              />
              <div>
                <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '5px', overflow: 'hidden', width: '30vw', minWidth: '100px', maxWidth: '300px' }}>{title}</div>
                {artist}
              </div>
            </div>
          </Link>
        </Grow>
      );
    }
  }

  // If there is no data, display a message
  return <div>No data available</div>;
};

// Props for the Tiles component
interface TilesProps {
  searchData: any; // Spotify data
}

// Display a grid of up to 12 tiles
const Tiles: React.FC<TilesProps> = ({ searchData }) => {
  const tileComponents = [];
  
    for (let index = 0; index < 12; index++) {
      tileComponents.push(<Tile key={index.toString()} index={index.toString()} data={searchData} />);
    }

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tileComponents}
      </div>
    );
  };

export default Tiles;

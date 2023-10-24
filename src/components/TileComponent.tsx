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
            <div className='tileLink' style={{ display: 'flex', margin: '25px' }}>
              <img
                style={{ width: '10vw', minWidth: '100px', maxWidth: '300px' }}
                src={cover}
                alt={`Album cover for ${title} by ${artist}`}
              />
              <div style={{ marginLeft: '15px' }}>
                <div style={{ fontSize: '25px', fontWeight: 'bold', marginBottom: '5px' }}>{title}</div>
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
const Tiles: React.FC<TilesProps> = ({ searchData }) => (
  <>
      <Tile index="0" data={searchData}/>
      <Tile index="1" data={searchData}/>
      <Tile index="2" data={searchData}/>
      <Tile index="3" data={searchData}/>
      <Tile index="4" data={searchData}/>
      <Tile index="5" data={searchData}/>
      <Tile index="6" data={searchData}/>
      <Tile index="7" data={searchData}/>
      <Tile index="8" data={searchData}/>
      <Tile index="9" data={searchData}/>
      <Tile index="10" data={searchData}/>
      <Tile index="11" data={searchData}/>
  </>
);

export default Tiles;

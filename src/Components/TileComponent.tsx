import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import { Link } from 'react-router-dom';

// Props for a single tile component
interface TileProps {
  index: string; // Index of the tile in the list
  data: any; // Spotify data
}

const Tile: React.FC<TileProps> = ({ index, data }) => {
  // State to control the visibility of the tile with an animation
  const [isTileVisible, setIsTileVisible] = useState(false);

  useEffect(() => {
    // When the component mounts, set the tile as visible to trigger the animation
    setIsTileVisible(true);
  }, []);

  if (data.tracks && Array.isArray(data.tracks.items) && data.tracks.items[index]) {
    // Extract relevant Spotify data for the tile
    const title = data.tracks.items[index].name;
    const artist = data.tracks.items[index].artists[0].name;
    const id = data.tracks.items[index].id;
    const cover = data.tracks.items[index].album.images[1]?.url;

    if (cover) {
      // Modify the cover image URL for display
      const modifiedCover = cover.replace(/^https:\/\/i\.scdn\.co\/image\//, '');

      return (
        <Grow in={isTileVisible} timeout={1000}>
          <Link style={{ textDecoration: 'none' }} to={`/play/${title}/${artist}/${id}/${modifiedCover}`}>
            <Card className="tile" sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 250 }}
                image={cover}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    maxWidth: '30vw',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {artist}
                </Typography>
              </CardContent>
            </Card>
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
  data: any; // Spotify data
}

// Display a grid of up to 12 tiles
const Tiles: React.FC<TilesProps> = ({ data }) => (
  <>
    <div className="tile-row">
      {/* Display four tiles in the first row */}
      <Tile index="0" data={data} />
      <Tile index="1" data={data} />
      <Tile index="2" data={data} />
      <Tile index="3" data={data} />
    </div>
    <div className="tile-row">
      {/* Display four tiles in the second row */}
      <Tile index="4" data={data} />
      <Tile index="5" data={data} />
      <Tile index="6" data={data} />
      <Tile index="7" data={data} />
    </div>
    <div className="tile-row">
      {/* Display four tiles in the third row */}
      <Tile index="8" data={data} />
      <Tile index="9" data={data} />
      <Tile index="10" data={data} />
      <Tile index="11" data={data} />
    </div>
  </>
);

export default Tiles;
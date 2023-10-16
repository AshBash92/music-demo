import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context';
import '../App.css';
import Tiles from '../Components/Tiles';

const getToken = async (clientId: string, clientSecret: string) => {
    const url = 'https://accounts.spotify.com/api/token';
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    data.append('client_id', clientId);
    data.append('client_secret', clientSecret);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });
  
      if (response.ok) {
        type DataType = {
            access_token: string;
            token_type: string;
            expires_in: number;
        };
        const data: DataType = await response.json();
        return data
      } else {
        console.error('Failed to fetch token:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

const getAlbum = async (accessToken: string, setSpotifyData: (data: any) => void, setShowTiles: (value: boolean) => void) => {
    const apiUrl = 'https://api.spotify.com/v1/search?q=fire&type=album%2Ctrack%2Cartist&market=US&limit=12&offset=4';

    const headers = {
        Authorization: `Bearer ${accessToken}`
    };

    fetch(apiUrl, {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        setSpotifyData(data);
        setShowTiles(true);
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

const HelloWorld: React.FC = () => {

    const { context, setContext } = useContext(Context);
    const [showTiles, setShowTiles] = useState(false);
    const [spotifyData, setSpotifyData] = useState<any | null>(null);

    useEffect( () => {

        const fetchData = async () => {
            try {
                const result = await getToken(context.client_id, context.client_secret);

                setContext((context) => {
                    return {
                        ...context,
                        access_token: result ? result.access_token : null
                    };
                });
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    },[])

    const handleSearchClick = () => {
        if (context.access_token !== null) {
            getAlbum(context.access_token, setSpotifyData, setShowTiles);
        } else {
            console.error('Access token is null. Unable to call getAlbum.');
        }
    };

    console.log(spotifyData);

    return (
        <>
            <div className="center">
                <input
                    type="text"
                    placeholder="Search for an album"
                />
                <button onClick={handleSearchClick}>Search Button</button>
            </div>
            <div className="tile-grid">
                {/* pass the fucking data please */}
                {showTiles && <Tiles />}
            </div>
        </>
    );
}

export default HelloWorld;
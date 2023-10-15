import React, { useContext } from 'react';
import Context from '../Context';
import '../App.css';

//I WILL USE THIS TO SEARCH FOR ALBULMS
// const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your Spotify access token

// const url = 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb';

// fetch(url, {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${accessToken}`,
//   }
// })
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


const HelloWorld: React.FC = () => {

    const { context, setContext } = useContext(Context)

    setContext((context) => {
        return {
            ...context,
            access_token: "access token here"
        }
    })

    return (
        <div>
            {context.client_id}!
            <br />
            <input
                type="text"
                placeholder="Search for an album"
            />
        </div>
    );
}

export default HelloWorld;
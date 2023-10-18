import React, { useState, useEffect } from 'react';

interface TokenComponentProps {
  client_id: string;
  client_secret: string;
  onTokenReceived: (token: string) => void;
}

const TokenComponent: React.FC<TokenComponentProps> = ({ client_id, client_secret, onTokenReceived }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This function is responsible for fetching the access token
    const getToken = async () => {
      const url = 'https://accounts.spotify.com/api/token';
      const data = new URLSearchParams();
      data.append('grant_type', 'client_credentials');
      data.append('client_id', client_id);
      data.append('client_secret', client_secret);

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: data.toString(),
        });

        if (response.ok) {
          const tokenData = await response.json();
          onTokenReceived(tokenData.access_token);
        } else {
          setError(`Failed to fetch token: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        setError(`Error: ${error}`);
      }
    };

    getToken();
  }, [client_id, client_secret, onTokenReceived]);

  // If error, display on the screen
  // if (error) {
  //   return <div>{error}</div>;
  // }

  return null;
};

export default TokenComponent;

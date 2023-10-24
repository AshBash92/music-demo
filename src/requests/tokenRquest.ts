import { ContextType } from '../types';

// This function retrieves an access token from the Spotify API and updates the context with the token.
const getToken = async ( context: ContextType ) => {
  try {
    // Extract the client ID and client secret from the context state
    const { clientId, clientSecret } = context.state;

    // Define the URL for Spotify API token retrieval
    const url = 'https://accounts.spotify.com/api/token';

    // Prepare the request data
    const formData = new URLSearchParams();
    formData.append('grant_type', 'client_credentials');
    formData.append('client_id', clientId);
    formData.append('client_secret', clientSecret);

    // Make a POST request to fetch the token
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (response.ok) {
      // If the response is successful, extract the token and update the context with the access token
      const result = await response.json();
      context.setState((prevState) => ({
        ...prevState,
        accessToken: result.access_token,
      }));
    } else {
      // If the response is not successful, throw an error
      throw new Error('Failed to fetch access token');
    }
  } catch (error) {
    // Rethrow the error or create an unknown error if needed
    throw error instanceof Error ? error : new Error('An unknown error occurred');
  }
};

export default getToken;
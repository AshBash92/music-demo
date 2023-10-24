// This function retrieves an access token from the Spotify API and updates the context with the token.
const getSearch = async ( accessToken: string | null, searchInput: string ) => {
    const sanitizedSearchInput = searchInput.replace(/ /g, '+');
    const apiUrl = `https://api.spotify.com/v1/search?q=${sanitizedSearchInput}&type=album%2Ctrack%2Cartist&market=US&limit=12&offset=4&sort=popularity`;

    const headers = { Authorization: `Bearer ${accessToken}` };

  try {
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    //   const data = await response.json();
    //   setSearchData(data);
      return response.json();
    } catch (error) {
      console.error('Error:', error);
    }
};

export default getSearch;
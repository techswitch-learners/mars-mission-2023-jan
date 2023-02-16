const REACT_APP_APIKEY = 'jPTvIJZBife9yXLo9XXW1vDRXpKunAZUdbEGn5LM';

export async function getAstroImageUrl(): Promise<string> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_APIKEY}`;

    const apodData = await fetch(url)
        .then(response => response.json());

    return apodData.url;
}

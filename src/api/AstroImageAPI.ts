

export async function getAstroImageUrl() {

    const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

    const apodData = await fetch(url)
        .then(response => response.json());

    return apodData.url
}

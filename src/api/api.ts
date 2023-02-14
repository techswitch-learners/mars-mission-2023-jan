import React from "react";


export async function nasaAPI (date:string,rover:string,camera:string) {

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${camera}&${date}api_key=jPTvIJZBife9yXLo9XXW1vDRXpKunAZUdbEGn5LM`;
    
    let imageData = await fetch(url);
    let validImageData = await imageData.json();
    // declare type
    let imageURL = [];

    validImageData.photos.map(photo => {
        imageURL.push(photo.camera.img_src);
    });
   
    return imageURL;
}

console.log(nasaAPI("2015-05-30","curiosity","fhaz"))



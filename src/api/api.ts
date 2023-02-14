export interface imageApiModel {
    imageURL:string;
    camera:string;
    rover:string;
    landingDate:string;
    launchDate:string;
    earthDate:string;
}

export async function imageAPI (date:string,rover:string,camera:string) {

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${camera}&${date}api_key=jPTvIJZBife9yXLo9XXW1vDRXpKunAZUdbEGn5LM`;
    
    let imageData = await fetch(url);
    let validImageData = await imageData.json();

    let imageInfo:Array<imageApiModel> = [];

    validImageData.photos.map((photo:any) => {
        imageInfo.push({
          imageURL: photo.img_src,
          camera: photo.camera.full_name,
          rover:photo.rover.name,
          landingDate:photo.rover.landing_date,
          launchDate:photo.rover.launch_date,
          earthDate: photo.camera.earth_date,
        });
    });
   
    return imageInfo;
}

console.log(imageAPI("2015-05-30","curiosity","fhaz"))



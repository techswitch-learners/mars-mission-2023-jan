export interface imageApiModel {
    id:number;
    sol:number;
    camera:cameraModel;
    earthDate:string;
    rover:roverModel;
}

export interface cameraModel {
    id: number;
    name:string;
    rover_id: number;
    full_name:string;
}

export interface roverModel {
    id:number;
    name:string;
    landing_date:string;
    launch_date:string;
    status:string;
}

export async function imageAPI (date:string,rover:string,camera:string):Promise<imageApiModel[]> {

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?camera=${camera}&earth_date=${date}&api_key=jPTvIJZBife9yXLo9XXW1vDRXpKunAZUdbEGn5LM`;
    
    let imageData = await fetch(url)
    .then (response => response.json());

    return imageData.photos;
}

// console.log(imageAPI("2015-05-30","curiosity","fhaz"))



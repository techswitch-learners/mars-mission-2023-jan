import React, { useEffect, useState } from "react";
import { getImagesFromApi, imageApiModel } from "../../api/imagesApi";
import "./ImageSelector.scss";

export function ImageSelector(props: {
    setState: React.Dispatch<React.SetStateAction<string>>,
    date: string,
    rover: string,
    camera: string,
}) {
    const [apiImages, setApiImages] = useState<imageApiModel[]>();

    useEffect(() => {
        getImagesFromApi(props.date, props.rover, props.camera)
            .then(data => setApiImages(data))
            .then(() => { if (apiImages) props.setState(apiImages[0].img_src) });
    }, [props.date, props.rover, props.camera]);

    const images = apiImages
        ? apiImages.slice(0, Math.min(apiImages.length, 12))
            .map(data => <img src={data.img_src}
                key={data.id}
                className="individualImage"
                alt='Mars image'
                onClick={() => props.setState(data.img_src)} />)
        : <p>No Image to Display</p>;

    return <div>
        <h4>Select a Photo</h4>
        <h5>Showing for the {props.rover} rover's {props.camera} on {props.date}.</h5>
        <div className="imageSelector">{images}</div>
    </div>
}

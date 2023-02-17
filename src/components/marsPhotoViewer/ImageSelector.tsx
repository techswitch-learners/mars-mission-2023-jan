import React, { useEffect, useState } from "react";
import { getImagesFromApi, imageApiModel } from "../../api/imagesApi";
import "./ImageSelector.scss";

export function ImageSelector(props: {
    setState: React.Dispatch<React.SetStateAction<string>>,
    date: string,
    rover: string,
    camera: string,
}) {
    const [imgUrl, setImgUrl] = useState<imageApiModel[]>();

    useEffect(() => {
        getImagesFromApi(props.date, props.rover, props.camera)
            .then(data => setImgUrl(data))
            .then(() => { if (imgUrl) props.setState(imgUrl[0].img_src) });
    }, []);

    const urls = imgUrl ? imgUrl.slice(0, Math.min(imgUrl.length, 12)).map(url => <img src={url.img_src} key={url.id} className="individualImage" alt='Mars image'
        onClick={() => props.setState(url.img_src)} />) : <p>No Image to Display</p>;

    return <div>
        <h4>Select a Photo</h4>
        <h5>Showing for the {props.rover} rover's {props.camera} on {props.date}.</h5>
        <div className="imageSelector">{urls}</div>
    </div>
}

import React, { useState } from "react";
import { getAstroImageUrl } from "../api/AstroImageAPI";
import { useEffect } from "react";

export function AstroImage() {

    const [imageUrl, setImageUrl] = useState<string>()

    useEffect(() => {
        // const getImage = async () => { };
        getAstroImageUrl().then(data => setImageUrl(data));
    },[]);
 
    return <img  className="astroImg" src={imageUrl} />
   

}

import React from "react";

export function ImageSelector(props: {
    setState: React.Dispatch<React.SetStateAction<string>>,
    image: string
}) {
    
    // const urls = [];


    // const jsxElement = [];
    // for (let i = 0; i < urls.length; i++) {
    //     const newUrl = urls[i];
    //     jsxElement.push(
    //         <img className={newUrl === props.image ? "thumbnail-image-selected thumbnail-image" : "thumbnail-image"}
                
    //             key={i}
    //             src={urls[i]}
    //             onClick={function () {
    //                 props.setState(newUrl);
    //             }}>
    //         </img>)
    // }

    return (
        <>
            <h2>Select your photo</h2>
            <div className="selector-image">
                {jsxElement}
            </div>
        </>
    )

}

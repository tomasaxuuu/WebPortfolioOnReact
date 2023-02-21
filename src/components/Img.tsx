import React from "react";
import { ImgType } from "./Interfaces";



export const Img: React.FC<ImgType> = ({src, alt}) => {
    return (
        <img src={src} alt={alt}/>
    );
}
 
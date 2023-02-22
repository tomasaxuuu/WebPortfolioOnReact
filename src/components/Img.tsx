import React from "react";
import { ImgType } from "./Interfaces";



export const Img: React.FC<ImgType> = ({className, src, alt}) => {
    return (
        <img className={className} src={src} alt={alt}/>
    );
}
 
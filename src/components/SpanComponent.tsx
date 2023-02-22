import React from "react";
import { Ispan } from "./Interfaces";

export const Span: React.FC<Ispan> = ({className, value}) => {
    return ( 
        <span className={className}>{value}</span>
    );
}
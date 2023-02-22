import React from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "./Interfaces";
export const ItemNav: React.FC<ILink> = ({path, title}) => {
    
    return ( 
        <>
            <li>
                <NavLink to={path}>{title}</NavLink>
            </li>
        </>
    );
}
 
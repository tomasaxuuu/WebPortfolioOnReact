import React from "react";

import { Item } from "./Item";
import { items } from "./Interfaces";

export const Items: React.FC = () => {
    
    return (
        <>
            <ul className="items">
                {items.map((el) => {
                    return (
                        <Item key={el.id} img={el.img} title={el.title}/>
                    )
                })}
            </ul>
        </>
    );
}
import React, { useEffect, useState } from "react";
import { typeItem } from "../components/Interfaces";
import { Item } from "../components/Item";


export const HomePage: React.FC = () => {
    const [items, setItems] = useState<Array<typeItem>>([])
    useEffect(() => {
        fetch("http://localhost:3000/items")
        .then(response => response.json())
        .then(data => setItems(data));
    }, []);
    return (
        <>
            <ul className="items">
                {items.map(({id, img, title}) => {
                    return (
                        <Item key={id} img={img} title={title}/>
                    )
                })}
            </ul>
        </>
    );
}
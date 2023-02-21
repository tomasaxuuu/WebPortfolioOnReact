import React, { useEffect, useState } from "react";

import { typeItem } from "./Interfaces";
import { Item } from "./Item";
export const Footer: React.FC = () => {

    const[footerImg, setImg] = useState<Array<typeItem>>([])

    useEffect(() => {
        fetch(" http://localhost:3000/footerImgs")
        .then(response => response.json())
        .then(data => setImg(data))
    }, [])

    return (
        <footer>
            <div className="wrap">
                <div className="footer-row">
                    <ul className="social">
                        {footerImg.map(el => {
                            return (
                                <Item key={el.id} img={el.img} alt={el.alt}/>
                            )
                        })}
                    </ul>
                    <span>© 2023 - frontend-dev.com</span>
                </div>
            </div>
        </footer>
    );
}
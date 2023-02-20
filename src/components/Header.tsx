import React, { useState } from "react";
import man from "../images/main/Gleb.png";
import { Img } from "./Img";
import { NavLink } from "react-router-dom";
export const Header: React.FC = () => {
    const [btnTheme, setTheme] = useState<boolean>(false)
    return (
        <div className="header-row">
            <div className="left-content">
                <span className="hello">Hello</span>
                <span className="name">I’m Timur
                    tomasaxuu</span>
                <span className="abzac">I've been doing web design, front-end and back-end development for a year now. 
                            Do you need a website design, site layout, or maybe a 
                            turnkey website? Then contact me
                </span>
                <NavLink to="/contacts">
                    <div onClick={() => setTheme(prev => !prev)} className={btnTheme ? 'contact' : 'contact-black'}>
                        Contact me
                    </div>
                </NavLink>
            </div>
            <Img src={man} alt='me' />
        </div>
    );
}

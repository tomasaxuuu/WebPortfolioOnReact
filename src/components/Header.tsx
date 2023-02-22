import React, { useState } from "react";
import man from "../images/main/Gleb.png";
import { Img } from "./Img";
import { NavLink } from "react-router-dom";
import { Span } from "./SpanComponent";
export const Header: React.FC = () => {
    const [btnTheme, setTheme] = useState<boolean>(false)
    return (
        <div className="header-row">
            <div className="left-content">
                <Span className="hello" value="Hello" />
                <Span className="name" value="I’m Timur tomasaxuu" />
                <Span className="abzac" value="I've been doing web design, front-end and back-end development for a year now. 
                    Do you need a website design, site layout, or maybe a 
                    turnkey website? Then contact me" />

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

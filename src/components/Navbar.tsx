import React from "react";

import { Img } from "./Img";
import logo from "../images/header/logo.svg";

import { ItemNav } from "./NavMeniItem";
import { BtnDarkMode } from "./BtnDark";
import { navPaths } from "./Interfaces";

export const Navbar: React.FC = () => {
    return (
        <header> 
            <div className="wrap">
                <div className="header-nav">
                    <div className="logo-block">
                        <Img src={logo} alt='logotype'/>
                        <span>Notitanic</span>
                    </div>
                    <nav className="nav-menu">
                        <ul>
                            {navPaths.map(({id, path, title}) => {
                                return ( 
                                    <ItemNav key={id} path={path} title={title}/>
                                )
                            })};
                        </ul>
                    </nav>
                    <BtnDarkMode />
                </div>
            </div>
        </header>
    );
}
 

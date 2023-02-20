import React, { useState } from "react";

import { Img } from "./Img";
import logo from "../images/header/logo.svg";

import { ItemNav } from "./NavMeniItem";
import { BtnDarkMode } from "./BtnDark";
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
                            <ItemNav key={1} path='/' title='Home'/>
                            <ItemNav key={2} path='/about' title='About me'/>
                            <ItemNav key={3} path='/portfolio' title='Portfolio'/>
                            <ItemNav key={4} path='/contacts' title='Contact'/>
                        </ul>
                    </nav>
                    <BtnDarkMode />
                </div>
            </div>
        </header>
    );
}
 

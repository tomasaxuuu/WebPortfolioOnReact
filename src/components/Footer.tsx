import React from "react";
import vk from "../images/footer/vk.svg";
import github from "../images/footer/gh.svg";
import tg from "../images/footer/tg.svg";
import gmail from "../images/footer/gmail.svg";
import lol from "../images/footer/lol.svg";
import { Img } from "./Img";
export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="wrap">
                <div className="footer-row">
                    <ul className="social">
                        <li><Img src={vk} alt='vkontakte'/></li>
                        <li><Img src={tg} alt='telegram'/></li>
                        <li><Img src={github} alt='github'/></li>
                        <li><Img src={gmail} alt='gmail'/></li>
                        <li><Img src={lol} alt='leagueOfLegends'/></li>
                    </ul>
                    <span>© 2023 - frontend-dev.com</span>
                </div>
            </div>
        </footer>
    );
}
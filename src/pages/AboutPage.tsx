import React from "react";
import ph1 from "../images/main/ph-1.png";
import ph2 from "../images/main/ph-2.png";
import ph3 from "../images/main/ph-3.png";
import { Img } from "../components/Img";
export const AboutPage: React.FC = () => {
    return (  
        <div className="about-row">
            <div className="info-block">
                <h1>About me</h1>
                <div className="info">
                    Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood, 
                    I live in Donetsk, Ukraine. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - 
                    travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility a
                    nd love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an 
                    order as quickly and uniquely as possible, taking into account all the edits and wishes.
                    By trusting me, you will get the maximum return for your project, save your nerves and time.
                    If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below.
                </div>
                <div className="ellipse-1"></div>
                <div className="ellipse-2"></div>
                <div className="ellipse-3"></div>
                <div className="ph-1">
                    <Img src={ph1} alt='ph-1'/>
                </div>
                <div className="ph-2">
                    <Img src={ph2} alt='ph-2'/>
                </div>
                <div className="ph-3">
                    <Img src={ph3} alt='ph-3'/>
                </div>
            </div>
        </div>
    );
}
 

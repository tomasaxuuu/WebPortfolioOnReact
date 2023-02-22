import React, { useState } from "react";
import { Img } from "../components/Img";
import arrowleft from "../images/main/left.svg";
import arrowright from "../images/main/right.svg";
import card1 from "../images/main/content-1.png";
import card2 from "../images/main/content-2.png";
import card3 from "../images/main/content-3.jpg";
import { Span } from "../components/SpanComponent";
export const Portfolio: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const nextImg = (): void => {
        if(index < 2) {
            setIndex(prev => prev + 1);
        } else {
            setIndex(0)
        }
    } 
    const prevImg = (): void => {
        if(index == 0) {
            setIndex(2);
        } else {
            setIndex(prev => prev - 1)
        }
    } 

    const MyCollection = [
        {
            id: 1,
            h3: "Landing Ice-cream",
            imgPath: card1,
        },
        {
            id: 2,
            h3: "Landing Neo",
            imgPath: card2,
        },
        {
            id: 3,
            h3: "Landing Pages",
            imgPath: card3,
        }
    ];
       
    return (
        <>
            <div className="portfolio-col">
                <div className="content-row">
                    <h1>Portfolio</h1>
                    <div className="content-portfolio">
                        <Img key={MyCollection[index].id} src={MyCollection[index].imgPath} alt='content' />
                        <div className="right">
                            <h3>{MyCollection[index].h3}</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, 
                                accumsan bibendum magna. 
                                Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                            </div>
                            <Span value="More"/>
                        </div>
                    </div>
                    <div onClick={prevImg} className="left-arrow"><Img src={arrowright} alt='arrow-left'/></div>
                    <div onClick={nextImg} className="right-arrow"><Img src={arrowleft} alt='arrow-right' /></div>
                </div>
            </div>
        </>
    );
}
 
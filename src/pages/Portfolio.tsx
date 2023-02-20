import React from "react";
import content1 from "../images/main/content-1.png";
import { Img } from "../components/Img";
import arrowleft from "../images/main/left.svg";
import arrowright from "../images/main/right.svg";
export const Portfolio: React.FC = () => {
    return (
        <>
            <div className="portfolio-col">
                <div className="content-row">
                    <h1>Portfolio</h1>
                    <div className="content-portfolio">
                        <Img src={content1} alt='content' />
                        <div className="right">
                            <h3>Landing Ice-cream</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, 
                                accumsan bibendum magna. 
                                Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="left-arrow"><Img src={arrowright} alt='arrow-left'/></div>
                    <div className="right-arrow"><Img src={arrowleft} alt='arrow-right' /></div>
                </div>
            </div>
        </>
    );
}
 
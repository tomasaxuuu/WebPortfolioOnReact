export interface IItem {
    id?: number;
    className?: string;
    img: string;
    title: string;
}
import first from "../images/items/1.svg";
import second from "../images/items/2.svg";
import third from "../images/items/3.svg";
import fourth from "../images/items/4.svg";
import five from "../images/items/5.svg";
import six from "../images/items/6.svg";
import seven from "../images/items/7.svg";
export const items: IItem[] = [
    {
        id: 1,
        img: first,
        title: "Product Design"   
    },
    {
        id: 2,
        img: second,
        title: "UX/UI Design"   
    },
    {
        id: 3,
        img: third,
        title: "Icon Design"   
    },
    {
        id: 4,
        img: fourth,
        title: "Logo Design"   
    },
    {
        id: 5,
        img: five,
        title: "Backend"   
    },
    {
        id: 6,
        img: six,
        title: "Frontend"   
    },
    {
        id: 7,
        img: seven,
        title: "Motion"   
    }
]

export interface ILink {
    id?: number;
    path: string;
    title: string;
}
import telegram from "../images/main/telegram.png";
import adress from "../images/main/locator.png";
import phone from "../images/main/call.png";
import website from "../images/main/asteroid.png";
export const contacts: IItem[] = [
    {
        id: 1,
        img: adress,
        title: "Address: 198 West 21th Street, Suite 721 New York NY 10016",  
    },
    {
        id: 2,
        img: phone,
        title: "Phone: + 1235 2355 98",  
    },
    {
        id: 3,
        img: telegram,
        title: "Email: info@yoursite.com",   
    },
    {
        id: 4,
        img: website,
        title: "Website yoursite.com",
    },
]
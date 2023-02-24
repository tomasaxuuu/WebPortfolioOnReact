export type typeItem =  {
    id?: number;
    img: string;
    className?: string;
    title?: string;
    alt?: string;
}
export type Card = {
    id?: number;
    img: string;
    h3: string;
}


export interface ImgType {
    className?: string;
    src: string;
    alt: string;
}

export interface ILink {
    path: string;
    title: string;
}
export interface NavItems {
    id: number;
    path: string;
    title: string;
}
export const navPaths: NavItems[] = [
    {
        id: 1,
        path: "/",
        title: "Home",
    },
    {
        id: 2,
        path: "/about",
        title: "About me",
    },
    {
        id: 3,
        path: "/portfolio",
        title: "Portfolio",
    },
    {
        id: 4,
        path: "/contacts",
        title: "Contacts",
    },
]

export interface Ispan {
    className?: string;
    value: string;
}

export const MyCollection = [
    {
        id: 1,
        h3: "Landing Ice-cream",
        imgPath: "./src/images/main/content-1.png",
    },
    {
        id: 2,
        h3: "Landing Neo",
        imgPath: "./src/images/main/content-2.png",
    },
    {
        id: 3,
        h3: "Landing Pages",
        imgPath: "./src/images/main/content-3.jpg",
    }
];

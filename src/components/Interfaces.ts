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
        title: "Contact",
    },
]

export interface Ispan {
    className?: string;
    value: string;
}

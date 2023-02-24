import React, { useState, useEffect, useRef } from "react";
import { Img } from "./Img";
import sun from "../images/header/sun.svg";
import dark from "../images/header/moon.svg";
export const BtnDarkMode: React.FC = () => {
    const [themeClick, setTheme] = useState<string>(() => {
        return JSON.parse(localStorage.getItem('themeCur') || '[]');
    });
    // передаем пустой массив => данный эффект вызывается один раз когда реакт соединил шаблон данного компонента с дом деревом
    useEffect(() => {
        setTheme(JSON.parse(localStorage.getItem('themeCur') || '[]'))
      }, []) 
    
      // сохранение в local storage
    useEffect(() => {
        localStorage.setItem('themeCur', JSON.stringify(themeClick));
    }, [themeClick]) 
    const btnRef = useRef<HTMLButtonElement>(null);
    const toggleTheme = () => {
        setTheme((current) => {
            return current === "light" ? "dark" : "light";
        });
    };

    // эффект смены темы, а именно добавления и удаления классов при нажатии на кнопку смены темы, зависит от переменной из хука состояния
    // ref - текущий элемент
    useEffect(() => {
        if (themeClick === "light") {
            document.body.classList.add("dark");
            btnRef.current!.classList.add("dark-mode-btn--active");
        } else {
            document.body.classList.remove("dark");
            btnRef.current!.classList.remove("dark-mode-btn--active");
        }
    }, [themeClick]);

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleTheme}>
            <Img src={dark} alt="dark" />
            <Img src={sun} alt="light" />
        </button>
    );
};
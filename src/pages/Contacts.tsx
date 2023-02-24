import React, { useEffect, useState } from "react";
import { FormComp } from "../components/Form";


export const ContactsPage: React.FC = () => {
    
    const [showForm, setVisibleForm] = useState<string>(() => {
        return JSON.parse(localStorage.getItem('form') || 'false')
    });

    useEffect(() => {
        setVisibleForm(JSON.parse(localStorage.getItem('form') || 'false'))
      }, []) 
    
      // сохранение в local storage
    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(showForm));
    }, [showForm])
    const toggleForm = () => {
        setVisibleForm((current) => {
            return current === 'true' ? 'false': 'true';
        });
    };
    return ( 
        <>
            <div className="contacts-col">
                <div className="main-block">
                    <h1>Contact me. Only for commercial offers. </h1>
                    <div onClick={toggleForm} className="buttonShow"><a>Show</a></div>
                    {showForm === 'true' && <FormComp />}
                </div>
            </div>
        </>
    );
}

import React, { useEffect, useState } from "react";
import { FormComp } from "../components/Form";


export const ContactsPage: React.FC = () => {
    
    const [showForm, setVisibleForm] = useState<boolean>(false);

    return ( 
        <>
            <div className="contacts-col">
                <div className="main-block">
                    <h1>Contact me. Only for commercial offers. </h1>
                    <div onClick={() => setVisibleForm(prev => !prev)} className="buttonShow"><a>Show Form</a></div>
                    {showForm && <FormComp />}
                </div>
            </div>
        </>
    );
}

import React, { useEffect, useState } from "react";
import { contacts } from "../components/Interfaces";
import { Item } from "../components/Item";
export const ContactsPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    // определения касаний по полям
    const [emailTouch, setEmailTouch] = useState<boolean>(false);
    const [nameTouch, setNameTouch] = useState<boolean>(false);
    // уведомления об ошибках
    const[emailError, setEmailError] = useState<string>('Поле email не может быть пустым');
    const[nameError, setNameError] = useState<string>('Поле name не может быть пустым');
    const [form, setFormValid] = useState<boolean>(false);
    const ErrorHundler = (e: { target: { name: any; }; }) => {
        switch (e.target.name) {
            case 'email':
                setEmailTouch(true);
            break;
            case 'name':
                setNameTouch(true);
            break;
        }
    }

    const emailHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный ввод почты');
        } else {
            setEmailError('');
        }
    }
    const nameHandler = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
        if (e.target.value.length < 7 || !e.target.value) {
            setNameError('Некорректный ввод Имени');
        } else {
            setNameError('');
        }
    }
    useEffect (() => {
        if(emailError || nameError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, nameError])
    
    return ( 
        <>
            <div className="contacts-col">
                <div className="main-block">
                    <h1>Contact me</h1>
                    <div className="contact-menu">
                        <div className="left-form">
                            <h3>Send us a message</h3>
                            <form>
                                {(nameTouch && nameError) && <div className="error">{nameError}</div>}
                                <input onChange={e => nameHandler(e)} value={name} onBlur={(e) => ErrorHundler(e)} name="name"type="text" placeholder="Name"></input>
                                {(emailTouch && emailError) && <div className="error">{emailError}</div>}
                                <input onChange={e => emailHandler(e)} value={email} onBlur={(e) => ErrorHundler(e)} name="email"type="email" placeholder="Email"></input>
                                <input type="text" placeholder="Subject"></input>
                                <textarea placeholder="Message"></textarea>
                                <button disabled={!form} type="submit">Send message</button>
                            </form>
                        </div>
                        <div className="right-form">
                            <h3>Contact me</h3>
                            <span className="span-form">I`m open for any suggestion or just to have a chat</span>
                            <ul>
                                {contacts.map(({id, img, title}) => {
                                    return (
                                        <Item className="contacts-li" key={id} img={img} title={title}/>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

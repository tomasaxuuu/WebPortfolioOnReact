import React, { useEffect, useRef, useState } from "react";
import { Item } from "../components/Item";
import { typeItem } from "../components/Interfaces";
import { Span } from "../components/SpanComponent";
import { Input } from "../components/InputField";

export const ContactsPage: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null)
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

    const[contacts, setContactsItems] = useState<Array<typeItem>>([]);

    useEffect(() => {
        fetch(" http://localhost:3000/contacts")
        .then(response => response.json())
        .then(data => setContactsItems(data))
    }, [])
    
    const sendMessege = () => {
        ref.current!.value = ''
    }
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
                                <Input
                                    valueInput={name}
                                    nameValue="name"
                                    typeValue="text"
                                    placeholderValue="Name"
                                    changeInput={e => nameHandler(e)}
                                    BlurInput={e => ErrorHundler(e)}
                                />
                                {(emailTouch && emailError) && <div className="error">{emailError}</div>}
                                <Input
                                    valueInput={email}
                                    nameValue="email"
                                    typeValue="email"
                                    placeholderValue="Email"
                                    changeInput={e => emailHandler(e)}
                                    BlurInput={e => ErrorHundler(e)}
                                />
                                <Input typeValue="text" placeholderValue="Subject" />
                                <textarea placeholder="Message"></textarea>
                                <button onClick={sendMessege} disabled={!form} type="submit">Send message</button>
                            </form>
                        </div>
                        <div className="right-form">
                            <h3>Contact me</h3>
                            <Span className="span-form" value="I`m open for any suggestion or just to have a chat" />
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

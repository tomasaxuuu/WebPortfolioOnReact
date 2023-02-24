import React from "react";

interface IInput  {
    changeInput?: (e: any) => void;
    valueInput?: string;
    BlurInput?: (e: any) => void;
    nameValue?: string;
    typeValue: string;
    placeholderValue: string;
}
export const Input: React.FC<IInput> = 
    ({
        changeInput, 
        valueInput, 
        BlurInput, 
        nameValue, 
        typeValue, 
        placeholderValue,
    }) => {   
        return ( 
            <input 
                onChange={changeInput}
                value={valueInput}
                onBlur={BlurInput}
                name={nameValue}
                type={typeValue}
                placeholder={placeholderValue}
            />
    );
}
 
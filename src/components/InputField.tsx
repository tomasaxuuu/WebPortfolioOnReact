import React from "react";

interface IInput  {
    changeInput?: (e: any) => void;
    valueInput?: string;
    BlurInput?: (e: any) => void;
    nameValue?: string;
    typeValue: string;
    placeholderValue: string;
    refI: React.RefObject<HTMLInputElement>;
}
export const Input: React.FC<IInput> = 
    ({
        refI,
        changeInput, 
        valueInput, 
        BlurInput, 
        nameValue, 
        typeValue, 
        placeholderValue,
    }) => {   
        return ( 
            <input
                ref={refI}
                onChange={changeInput}
                value={valueInput}
                onBlur={BlurInput}
                name={nameValue}
                type={typeValue}
                placeholder={placeholderValue}
            />
    );
}
 
import React from 'react';

const Input = ({styling, placeholder, name, value, onChange, type}) => {
    return (
        <input className={styling}
               type={type}
               name={name}
               value={value}
               placeholder={placeholder}
               onChange={event => {
                   onChange(event.target.value)
               }}
        />
    );
};

export default Input;
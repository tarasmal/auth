import React from 'react';

const Button = ({text, fnc, btnStyle, textStyle}) => {
    return (
        <button className={btnStyle} onClick={() => fnc()}>
            <p className={textStyle}>{text}</p>
        </button>
    );
};

export default Button;
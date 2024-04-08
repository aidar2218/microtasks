import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}

export const Button = ({callback, name}: ButtonPropsType) => {
    const onClickHandler = () => {
        callback();
    }
    return (
        <button onClick={onClickHandler}> {name} </button>
    );
};
import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (value: string) => void
}

export const Input = ({title, setTitle}: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        <input type="text" value={title} onChange={onChangeHandler}/>
    );
};
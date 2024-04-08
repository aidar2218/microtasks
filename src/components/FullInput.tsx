import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (message: string) => void;
}

export const FullInput = ({addMessage}: FullInputPropsType) => {

    const [title, setTitle] = useState<string>("");

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };

    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle("");
    };

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};


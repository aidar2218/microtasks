import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    const [messages, setMessages] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    );

    const [title, setTitle] = useState('');

    const addMessage = (messageValue: string) => {
        setMessages([{message: messageValue}, ...messages]);
        setTitle("");
    }

    return (
        <div className="App">
            <Input title={title} setTitle={setTitle}/>
            <Button name={"Add"} callback={() => addMessage(title)} />
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;

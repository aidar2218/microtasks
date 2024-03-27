import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    // const firstSubscriber = (event: number) => {
    //     console.log("hello i'm Aidar")
    // }
    //
    // const secondSubscriber = () => {
    //     console.log("hello i'm Ivan")
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(`hello i'm ${name}`)
    // }

    // const firstFunc = () => {
    //     console.log(101);
    // }
    //
    // const secondFunc = (num: number) => {
    //     console.log(num);
    // }

    const buttonFunc = (name?: string, age?: number, address?: string) => {
        if (name && age && address) {
            return console.log(`Hi, my name is ${name}, I'm ${age} years old, I live in ${address}`);
        }
        if (name && age) {
            return console.log(`Hi, my name is ${name}, I'm ${age} years old`);
        }
        if (name) {
            return console.log(`Hi I'm ${name}`);
        }
        console.log("I'm stupid button")
    }

    return (
        <div>
            {/*<button onClick={(event) => onClickHandler("Vasya")}>button1</button>*/}
            {/*<button onClick={() => onClickHandler("Ivan")}>button2</button>*/}

            {/*<button onClick={firstFunc}>1</button>*/}
            {/*<button onClick={() => secondFunc(11)}>2</button>*/}



            <Button name={"BUTTON1"} callback={() => buttonFunc("Vasya")}/>
            <Button name={"BUTTON2"} callback={() => buttonFunc("Ivan", 24)}/>
            <Button name={"BUTTON3"} callback={() => buttonFunc("Dima", 33, "Moscow")}/>
            <Button name={"Stupid button"} callback={() => buttonFunc()}/>
        </div>
    );
}

export default App;

import React, {useCallback, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    let [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1);
    }

    const decrement = () => {
        setNum(num - 1)
    }

    const clearNum = () => {
        setNum(num = 0);
    }

    return (
        <div className={"App"}>
            <h1>{num}</h1>
            <div className={"buttons"}>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={clearNum}>clear</button>
            </div>

        </div>
    );
}

export default App;

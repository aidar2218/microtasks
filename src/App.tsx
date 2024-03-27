import React, {useState} from 'react';
import './App.css';
import {Money} from "./components/Money";


export type BanksType = "all" | "RUBLS" | "Dollars"

export type MoneyType = {
    banknots: BanksType
    value: number
    number: string
}

function App() {

    const [money, setMoney] = useState<MoneyType[]>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [banks, setBanks] = useState<BanksType>("all")

    let currentMoney = money;

    if (banks === "RUBLS") {
        currentMoney = money.filter(m => m.banknots === "RUBLS");
    }
    if (banks === "Dollars") {
        currentMoney = money.filter(m => m.banknots === "Dollars");
    }


    const onClickHandler = (banknot: BanksType) => {

        setBanks(banknot);

        console.log(banknot)
    }


    return (
        <div className={"App"}>
            <Money money={currentMoney} filterMoney={onClickHandler}/>
        </div>
    );
}

export default App;

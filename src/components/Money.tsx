import React from 'react';
import {BanksType, MoneyType} from "../App";

type MoneyPropsType = {
    money: MoneyType[];
    filterMoney: (banks: BanksType) => void
}

export const Money = (props: MoneyPropsType) => {
    return (
        <>
            <ul>
                {props.money.map(m => {
                    return (
                        <li key={m.number}>
                            <span>--{m.banknots}--</span>
                            <span>--{m.value}--</span>
                            <span>--{m.number}--</span>
                        </li>
                    )
                })}
            </ul>
            <div className={"buttons"}>
                <button onClick={() => props.filterMoney("all")}>all</button>
                <button onClick={() => props.filterMoney("RUBLS")}>ruble</button>
                <button onClick={() => props.filterMoney("Dollars")}>dollar</button>
            </div>
        </>
    );
};
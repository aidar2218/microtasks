import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <div>
            <Header titleForHeader={"Super Header"}/>
            <Body titleForBody={"Super Body"}/>
            <Footer titleForFooter={"Super Footer"}/>
        </div>
    );
}

export default App;

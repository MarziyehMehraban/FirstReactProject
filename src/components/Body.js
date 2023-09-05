//this component is done by js too, to see the js codes uncomment them below and comment Body component

import React, {useState} from 'react';
import styles from "./Body.module.css";

const Body = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [result, setResult] = useState("");
    const [color, setColor] = useState("");

    const changeHandler1 = event => {
        setNumber1(event.target.value);
    }

    const changeHandler2 = event => {
        setNumber2(event.target.value);
    }

    const sum = () => {
        const reesult= parseInt(number1) * parseInt(number2);
        setResult(prevResult =>
            prevResult + (prevResult && ' ') + reesult);
        if(reesult > 10){
            setColor('rgb(255 160 155)')
        } else if (reesult < 10) {
            setColor('rgb(191 255 162)')
        }else {
            setColor('rgb(193 235 255)')
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.inCountainer}>
                <input type="number" onChange={changeHandler1} placeholder='عدد اول را وارد کنید...'></input>
                <input type="number" onChange={changeHandler2} placeholder='عدد دوم را وارد کنید...'></input>
                <button onClick={sum}>نتیجه ضرب</button>
            </div>
            <div className={styles.result} style={{backgroundColor: color}}>
                <p>{result}</p>
            </div>
        </div>
    );
};

export default Body;


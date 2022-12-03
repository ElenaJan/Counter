import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";


const Counter = () => {
    let [ counter, setCounter ] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(counter = 0);
    }

    return (
        <>
        <div className="number">{counter}</div>
        <div className="buttons">
            <Button className="btn-danger button" onClick={increment}>Инкремент</Button>
            <Button className="btn-success button" onClick={decrement}>Декремент</Button>
            <Button className="btn-secondary button" onClick={reset}>Ресет</Button>
        </div>
        </>
    )
}

export default Counter;

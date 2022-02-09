import React, {useState} from 'react';
import MyButton from "./MyButton/MyButton";


const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <h1>Current count: {count}</h1>
            <MyButton className="btn" action = {increment}>+</MyButton>
            <MyButton className="btn" action = {decrement}>-</MyButton>
        </div>
    );



};

export default Counter;
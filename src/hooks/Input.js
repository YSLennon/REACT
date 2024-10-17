import React, { useRef } from 'react';

const Input = (props) => {
    const x = useRef();
    const y = useRef();
    const calc = useRef();
    return (
        <div>
            <input ref={x} placeholder='첫 번째 숫자'/>
            <input ref={y} placeholder='두 번째 숫자'/>
            <input ref={calc} placeholder='+, -, *, /'/>
            <button onClick={() => {
                props.setX(x.current.value);
                props.setY(y.current.value);
                props.setCalc(calc.current.value);
            }}>Calculate</button>
        </div>
    );
};

export default Input;
import {useState,useEffect, useRef} from 'react';
import React from 'react';

const UseRef = () => {
    const inputRef = useRef();
    const [stateNum, setStateNum] = useState(0);
    const num = useRef(0);

    console.log('num: ' + num.current);
    console.log('stateNum: ' + stateNum);

    return (
        <div>
        <input ref={inputRef}/>
        <button onClick={()=> {
            inputRef.current.focus();
            setStateNum(prev => prev+1);
        }}> StateNum </button>        
        <button onClick={()=> {
            num.current++;
        }}> Num </button>        
        </div>
    );

};

export default UseRef;
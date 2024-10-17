import React from 'react';
import { useState, useRef, useEffect } from 'react';

const Test2 = () => {
    const [arr, setArr] = useState([]);
    const [str, setStr] = useState('');
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [arr])

    return (
        <div>
            <input value={str} ref={inputRef} onChange={() => {
                setStr(inputRef.current.value) 
            }} />        
            <button onClick={() => {
                if(str.length < 3){
                    alert('3글자 이상 적어');
                    return;
                }
                setArr([...arr, <li key={arr.length}>{str}</li>]);
                setStr('');
            }}>저장</button>
            {str.length < 3 && <div style={{color: 'red'}}>3글자 이상이어야 합니다.</div>}
            <h3>이전 입력 값 : </h3>
            <ul>
                {arr}
            </ul>
        </div>
    );
};

export default Test2;
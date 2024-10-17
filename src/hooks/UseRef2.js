import React from 'react';
import {useRef, useState, useEffect} from 'react';

const UseRef2 = () => {
    const inputRef = useRef();
    const check = () =>console.log(inputRef)
    return (
        <div>
            <input ref={inputRef} onChange={() => check()} />
            <button onClick={() => {
                inputRef.current.focus();
            }}>button</button>
        </div>
    );
};

export default UseRef2;
import userEvent from '@testing-library/user-event';
import React from 'react';
import {useEffect, useState, useRef} from 'react';

const Test = () => {

    const [time, setTime] = useState(0);
    const [flg, setFlg] = useState(false);
    
    const timerId = useRef(null);
    useEffect(() => {
        if(flg){
            timerId.current = setInterval(() => {
                setTime(prev => {
                    if(prev>9) return 0
                    return prev+1
                });
                
            }, 1000)
        } 
        return () => clearInterval(timerId.current);
        
        
    }, [flg]);

    return (
        <div>
            <h1>{time} 초</h1>
            {!flg && <button onClick={() => {
                setFlg(flg => !flg);
                }}>시작</button>}
            {flg && <button onClick={() => {
                setFlg(flg => !flg);
                console.log(timerId)
                }}>중지</button>}
            <button onClick={() => {
                setFlg(flg => false);
                setTime(0);
            }}>리셋</button>
            
        </div>
    );
};

export default Test;
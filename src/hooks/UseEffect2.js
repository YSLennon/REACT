import React, { useEffect, useState } from 'react';
// import { useState } from 'react';

const UseEffect2 = () => {
    const [timer, setTimer] = useState(0);
    const [flg, setFlg] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(prev => prev+1);
        }, 1000)
        console.log(timerId)
        return () => {clearInterval(timerId); console.log('end'); setTimer(0)};
    }, [flg])

     
    return (
        <div>
            {timer}
            <button onClick={
                () => {
                    setFlg(prev => prev+1)
                    console.log(flg);
                }
            }>changeFlg</button>
        </div>
    );
}

    
export default UseEffect2;
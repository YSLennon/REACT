import React from 'react';
import { useEffect, useState } from 'react';

function UseEffect(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log('useEffect')
    }, [count])
    return (
        <div>
            <div>{count}</div>
            <div>{count2}</div>
            <button onClick={()=>setCount(cnt => cnt+1)}>count1 증가</button>
            <button onClick={()=>setCount2(cnt => cnt+1)}>count2 증가</button>
        </div>
    );
}

export default UseEffect;
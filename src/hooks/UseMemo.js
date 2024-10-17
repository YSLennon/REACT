import { useMemo, useState } from 'react';
import React from 'react';
const initCount = (cnt) => {
    // 대충 복잡한 로직
    for(let i =0; i< 10000 ; i++){
        console.log(1);
    }
    return cnt*2
}
function plusFunc(count){
    return count+1
}
const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const num = useMemo(()=>initCount(count),[count]);
    // const num = initCount(count);
    const num2 = plusFunc(count2);
    console.log(num)
    return (
        <div>
            {num}
            <button onClick={()=>{
                setCount(prev=>prev+1)
            }}>button</button>
            <hr/>
            {num2}
            <button onClick={()=>{
                setCount2(prev=>prev+1)
            }}>button</button>
        </div>
    );
};

export default UseMemo;
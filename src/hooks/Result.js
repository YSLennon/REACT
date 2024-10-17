import React, { useEffect } from 'react';
import { useRef } from 'react';

const Result = (props) => {
    // 숫자 2개, 문자(연산자) 받아서 결과물을 출력?
    let answer = 0;
    const realAnswer = useRef(0)
    const x = props.x;
    const y = props.y;
    const calc = props.calc;
    useEffect(() => {
        if(calc === '+') {
            answer = x + y
        } else if(calc === '-') {
            answer = x - y
        } else if(calc === '*') {
            answer = x * y
        } else if(calc === '/') {
            answer = x / y
        }
        realAnswer.current = answer;
        props.rendering(prev=>!prev);
    }, [props.x])
    return (
        <div>
            {realAnswer.current}
        </div>
    );
};

export default Result;
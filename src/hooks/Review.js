import React, { useRef, useState } from 'react';


const Review = () => {
    let numb = 10;
    const refNumb = useRef(10);
    const [tmep, rendering] = useState(false);
    return (
        <div>
            <div>
                {numb}
                <button onClick={()=>{
                    numb++
                    console.log(numb)
                    console.log(refNumb.current)
                }}>button</button>
            </div>
            <div>
                {refNumb.current}
                <button onClick={()=>{
                    refNumb.current++;
                    console.log(numb)
                    console.log(refNumb.current)
                }}>button</button>
            </div>
            <div>
                <button onClick={()=>{
                    rendering(prev=>!prev)
                }}>render</button>
            </div>
        </div>
    );
};

export default Review;
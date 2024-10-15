import { useState } from "react";

function App(){

    const [cnt,setCnt] = useState(0);
    const [numb, setNumb] = useState(0);

    function changeCnt(flg){
        if(flg === 0){
            setCnt(0); 
            setNumb(0);
            return;
        }
        if(flg > 0){
            // prev(p0)를 써야 더 안정적이다
            setCnt(prev => prev+parseInt(numb));
        } else {
            let number = (cnt-parseInt(numb)>=0) ?(cnt-parseInt(numb)): 0;
            //  Math.max((cnt - parseInt(numb)), 0);-> 이런 좋은 방법도 있다.
            setCnt(number);
        }
        if(cnt < 0){
            setCnt(0);
        }
        setNumb(0);
    }
    return(
        <div>
            <div>현재 카운트: {cnt}</div>
            <div>
                <input value={numb} onChange={(e) => {
                    setNumb(e.target.value);
                }}/>
            </div>
            <button onClick={() => {
                {changeCnt(1)}
            }}>증가</button>
            <button onClick={() => {
                {changeCnt(-1)}
            }}>감소</button>
            <button onClick={() => {
                {changeCnt(0)}
            }}>초기화</button>
        </div>
    )

}

export default App;
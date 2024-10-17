import { useState } from "react";
import UseEffect from "./useEffect";
import UseEffect2 from "./UseEffect2";
import UseRef from "./UseRef";
import UseRef2 from "./UseRef2";
import UseMemo from "./UseMemo";
import Test from "./Test"
import Test2 from "./Test2"
import Review from "./Review"
import Review2 from "./Review2"
import Input from "./Input"
import Result from "./Result"

function App(){
    const [flg,setFlg] = useState(true);
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [calc,setCalc] = useState('');
    const [tmep,rendering] = useState(false);
    
    return(
        <div>
            <Input setX={setX} setY={setY} setCalc={setCalc}/>
            <Result x={x} y={y} calc={calc} rendering={rendering} />
            {/* <Review2></Review2> */}
            {/* <Review></Review> */}
            {/* <Test2 /> */}
            {/* <Test></Test> */}
            {/* <UseMemo/> */}
            {/* <UseRef2 /> */}
            {/* <UseRef /> */}
            {/* {flg && <UseEffect2/>}
            <button onClick={() => {
                setFlg(!flg);
            }}>button</button> */}
            {/* <UseEffect></UseEffect> */}
        </div>
    )
}

export default App;
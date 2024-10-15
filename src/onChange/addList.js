import { useState } from "react";

function App(){
    const [list, setList] = useState(["자바", "오라클"]);
    const [str, setStr] = useState('') ;
    let index = 0;

    function addBtn(){
        // let addList = [str, ...list];
        // setList(addList);
        setList((prev)=>{
            console.log(prev);
            return [...prev,str];
        })
        setStr('');
    }
    return(
        <div>
            <input value={str} onChange={(e)=>{
                {setStr(e.target.value)} 
            }}></input>
            <button onClick={() => {
                addBtn();
            }}>add</button>
            <div>{list.map(item=>{
                return <li key={index++}>{item}</li>
            })}</div>
        </div>
    )

}

export default App;
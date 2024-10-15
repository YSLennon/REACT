import { useRef, useEffect, useState } from "react";

function Table(props){
    return <table>
        {props.list}
    </table>
}

function App(){
    const timerRef = useRef();
    const [time, setTime] = useState(0);
    const [cnt, setCnt] = useState(0);
    const [cnt2, setCnt2] = useState(0);
    const [list, setList] = useState([]);
    useEffect(() => {
        console.log(cnt)
        console.log(cnt2)
    }, [cnt]);

    useEffect(()=>{
        async function userList(){
            const res = await fetch('https://jsonplaceholder.org/users');
            const result = await res.json();
            const newList = result.map(item => (
                <tr key={item.id}>
                    <td>{item.firstname}</td>
                    <td>{item.id}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.email}</td>
                </tr>
            ));
            setList(newList);
        }
        userList();
    }, []);

    return(
        <div>
            {time}
            <button onClick={()=>
                setCnt(prev => prev+1)
            }>increase</button>
            <button onClick={()=>
                setCnt2(prev => prev+1)
            }>increase2</button>
            <button onClick={()=>
                timerRef.current = setInterval(() => {
                    setTime(prev=>prev+1);
                }, 1000)
            }>start</button>
            <button onClick={()=>
                clearInterval(timerRef.current)
            }>stop</button>
            <Table list = {list}></Table>
        </div>
    )
}

export default App;
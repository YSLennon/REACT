import {useRef, useState, useEffect} from 'react'

function Timer(){
    const [timer, setTimer] = useState(0);
    const intervalId = useRef();
    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTimer(prev => prev+1);
        }, 1000)
        return clearInterval(intervalId.current)
    }, [])
    return <div>{timer}</div>
}
function App(){
    let [tag,setTag] = useState(false);

    return(
        <div>
            <button onClick={() => {
                setTag(!tag)
                console.log(tag);
            }}>timer</button>
            {}
            <div>{tag?<Timer/>:null}</div>
        </div>
    )
}

export default App;
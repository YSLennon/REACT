import { useState } from "react";

function App(){
    const [text, setText] = useState('');
    function inputText(e){
        setText(e.target.value);
    }

    return(
        <div>
            <input onChange={(e)=>inputText(e)}/>
            <button>button</button>
            <div>{text}</div>
        </div>
    )
}

export default App;
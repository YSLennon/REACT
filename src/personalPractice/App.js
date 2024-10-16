import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'SET_TEXT':
            return {...state, text:action.text}
        default:    
            throw new Error('unknown action type')
    }
};

function App(){
    const [state, dispatch] = useReducer(
        reducer, 
        {count: 0, text: 'hi'},
    );

    return(
        <div>
            {state.count}
            {state.text}
            <button
                onClick={() => dispatch({type: 'INCREMENT'})}>
                    increment Count
            </button>
            <input
                value={state.text}
                onChange={(e) => dispatch({type: 'SET_TEXT', text: e.target.value})}/>
        </div>
    )
}

export default App;
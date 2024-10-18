import React from 'react';
import { useReducer } from 'react';
const initialState = {count: 0};
const init = (initialState) => {
    return {count: initialState.count+3}
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {count: state.count + 1}
        case 'decrease':
            return {count: state.count - 1}
        default:
            console.log('error');
    }
}

const App = () => {
    const [reduceCount, dispatch] = useReducer(reducer, initialState, init)
    return (
        <div>
            {reduceCount.count}
            <button onClick={()=>dispatch({type: 'increase'})}>increase</button>
            <button onClick={()=>dispatch({type: 'decrease'})}>decrease</button>
            <button onClick={()=>dispatch({type: 'error'})}>error</button>
            
        </div>
    );
};

export default App;
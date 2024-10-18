import React, { useReducer } from 'react';

const initState = {count: 1};
const reducer = (state, action)=> {
    switch(action.type){
        case 'increase':
            return {count: state.count + 1}
        case 'decrease':
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer,initState);
    return (
        <div>
            {state.count}
            <button onClick={() => dispatch({type: 'increase'})}>increase</button>
            <button onClick={() => dispatch({type: 'decrease'})}>increase</button>
        </div>
    );
};

export default App;

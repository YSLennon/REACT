import React, { useReducer } from 'react';
    const initState = {agree: 0, disagree: 0};

    const reducer= (state, action) => {
        switch(action.type){
            case 'agree':
                return {...state, agree: state.agree + 1};
            case 'disagree':
                return {...state, disagree: state.disagree + 1};
            case 'reset':
                return {...state, disagree: 0, agree: 0};
            default:
                throw new Error
        }
    }

const Test = () => {
    const [voting, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h1>투표 시스템</h1>
            <div>
                찬성: {voting.agree}
            </div>
            <div>
                반대: {voting.disagree}
            </div>
            <button onClick={() => dispatch({type:'agree'})}>찬성</button>
            <button onClick={() => dispatch({type:'disagree'})}>반대</button>
            <button onClick={() => dispatch({type:'reset'})}>초기화</button>
        </div>
    );
};

export default Test;
import React, { useContext, useEffect, useRef } from 'react';
import { UserContext } from './UserContext';

const Main = () => {
    const userContext = useContext(UserContext)
    const id = useRef();
    const nickname = useRef();

    useEffect(() => {
        id.current.focus();
    }, [])

    const fnLogin = ()=>{
        userContext.setUserInfo(prev => {
            return {
                id: id.current.value,
                nickname: nickname.current.value,
            };
        });
    }
    const fnLogout = ()=>{
        userContext.setUserInfo(prev => {
            return {
                id: '',
                nickname: '',
            };
        });
    }

    return (
        <div>
            {userContext.userInfo.id === '' &&
            <>
                <input ref={id} placeholder='id'/>
                <input ref={nickname} placeholder='nickname'/>
                <button onClick={fnLogin}>로그인</button>
            </>}
            {userContext.userInfo.id !== '' &&
            <>
                <button onClick={fnLogout}>로그아웃</button>
            </>}
        </div>
    );
};

export default Main;
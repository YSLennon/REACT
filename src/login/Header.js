import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Header = () => {
    const userContext = useContext(UserContext);

    return (
        <div>
            {userContext.userInfo.id !== '' && 
                (
                <>
                <h1>환영합니다!</h1>
                <div>hello, {userContext.userInfo.nickname} 대충 이메일 </div>
                </>)
            }
            {userContext.userInfo.id === '' && 
                (
                <>
                <h1>얼른!</h1>
                <div> 로그인이나 하쇼 </div>
                </>)
            }
        </div>
    );
};

export default Header;
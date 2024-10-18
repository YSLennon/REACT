import React, { useState } from 'react';
import { UserContext } from './UserContext';
import Page from './Page';

const Login = () => {
    const user = {
        id: '',
        nickname: ''
    }
    const [userInfo, setUserInfo] = useState(user);
    return (
        <div>
            <UserContext.Provider value={{userInfo, setUserInfo}}>
                <Page />
            </UserContext.Provider>
        </div>
    );
};

export default Login;
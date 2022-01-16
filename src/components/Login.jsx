import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user';

const Login = () => {

    const dispatch = useDispatch();
    const [hide, setHide] = useState(true);

    return (
        <div>
           {hide ?  (<button onClick={() => {
                dispatch(login({
                    name: "Zedan Saheer", age: 21, email: "zed.saheer5@gmail.com"
                }));
                setHide(false);
            }}>Login</button>) :
            (<button onClick={() => {
                dispatch(logout());
                setHide(true);
            }}>Logout</button>)}
        </div>
    )
}

export default Login

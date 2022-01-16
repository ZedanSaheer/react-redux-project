import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user';

const Login = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(login({
                    name: "Zedan Saheer", age: 21, email: "zed.saheer5@gmail.com"
                }));
            }}>Login</button>
        </div>
    )
}

export default Login

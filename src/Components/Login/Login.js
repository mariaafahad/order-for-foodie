import React from 'react';
import useAuth from '../../hooks/useAuth'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (

        <div>
            <button className="bg-green-400 px-10 py-2 rounded-xl font-bold" onClick={signInUsingGoogle} >login</button>
        </div>
    );
};

export default Login;
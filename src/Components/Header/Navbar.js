import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { GiFoodTruck } from "react-icons/gi"


const Navbar = () => {

    const { signInUsingGoogle, user, logOut } = useAuth();
    console.log(user);

    return (
        <div className="flex justify-between align-middle">
            <div className="hidden md:flex space-x-1 items-center ml-20">

                <Link to="/home"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >Home</Link>
                <Link to="/about"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >About</Link>
                <Link to="/foodService"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >Food Service</Link>
                <Link to="/special"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >Special Service</Link>
                <button className="bg-green-400 px-10 py-2 rounded-xl font-bold" onClick={signInUsingGoogle} >login</button>

                {
                    user?.displayName ? <div className="flex space-x-4 items-center ml-20">
                        <h3 className="text-xl">{user.displayName}</h3>
                        <img src={user.photoURL} alt={user.displayName} className="h-12 rounded-full" />
                        <button onClick={logOut} className="bg-red-400 px-10 py-2 rounded-xl font-bold">LogOut</button>
                    </div> : <div>
                        <button className="bg-green-400 px-10 py-2 rounded-xl font-bold" onClick={signInUsingGoogle} >login</button>
                    </div>
                }






                {/* {
                    user.login ? (
                        <button onClick={logOut}>Logout</button>
                    ) : (
                        <button className="bg-green-400 px-10 py-2 rounded-xl font-bold" onClick={signInUsingGoogle} >login</button>
                    )}
                {/* <p>
                    Signed in as: <a href='#login'>{user?.displayName}</a>
                </p> */}

            </div>
            <GiFoodTruck className="h-full w-6 mt-2" />
        </div>
    );
};

export default Navbar;
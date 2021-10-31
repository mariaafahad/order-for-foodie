import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { GiFoodTruck } from "react-icons/gi"
import useFirebase from '../../hooks/useFirebase';


const Navbar = () => {

    const { signInUsingGoogle, user, logOut } = useFirebase();
    console.log(user);

    useEffect(() => {

    }, [user])

    return (
        <div className="flex justify-between align-middle bg-gray-800 text-gray-200">
            <div className="hidden md:flex space-x-1 items-center ml-20">
                <GiFoodTruck className="h-full w-10 mt-2 mr-20 text-red-500" />
                <Link to="/home"
                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:bg-black"
                >Home</Link>
                <Link to="/about"
                    className="py-4 px-2 text-gray-500 font-semibold hover:bg-black hover:text-green-500 transition duration-300"
                >About</Link>
                <Link to="/foodService"
                    className="py-4 px-2 text-gray-500 font-semibold hover:bg-black hover:text-green-500 transition duration-300"
                >Food Service</Link>
                <Link to="/special"
                    className="py-4 px-2 text-gray-500 font-semibold hover:bg-black hover:text-green-500 transition duration-300"
                >Special Service</Link>
                {/* <button className="bg-green-400 px-10 py-2 rounded-xl font-bold" onClick={signInUsingGoogle} >login</button> */}

                {
                    user?.displayName ? <div className="flex space-x-4 items-center ml-20">
                        <h3 className="text-xl">{user.displayName}</h3>
                        <img src={user.photoURL} alt={user.displayName} className="h-12 rounded-full" />
                        <button onClick={logOut} className="bg-red-400 px-10 py-2 rounded-xl font-bold hover:bg-green-400 hover:text-white">LogOut</button>
                        <Link to="/newService"
                            className="py-4 px-2 text-gray-500 font-semibold hover:bg-black hover:text-green-500 transition duration-300"
                        >Manage All Orders</Link>
                        <Link to="/addServices"
                            className="py-4 px-2 text-gray-500 font-semibold hover:bg-black hover:text-green-500 transition duration-300"
                        >Add A New Service</Link>
                    </div> : <div>
                        <button className="bg-green-400 hover:bg-red-500 hover:text-white px-10 py-2 rounded-xl font-bold" onClick={signInUsingGoogle} >login</button>
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

        </div>
    );
};

export default Navbar;
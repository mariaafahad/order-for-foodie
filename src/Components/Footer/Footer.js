import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="p-10 bg-gray-800 text-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="md-5">
                        <h4>Health Care</h4>
                        <p className="text-gray-500">
                            National Street <br />
                            USA <br /><br />
                            <strong>Phone:</strong>+1548454578 <br />
                            <strong>Email:</strong>info123@gmail.com  <br />
                        </p>

                    </div>
                    <div className="md-5">
                        <h4>
                            Useful Links
                        </h4>
                        <ul className="text-gray-500">
                            <Link to="/home">Home</Link>
                            <br />
                            <Link to="/about">About us</Link>
                            <br />
                            <Link to="/doctor">Doctors</Link>
                            <br />
                            <li>Our services</li>
                        </ul>

                    </div>
                    <div className="md-5">
                        <h4>
                            Useful Links
                        </h4>
                        <ul className="text-gray-500">
                            <li>Google</li>
                            <li>Youtube</li>
                            <li>Instragram</li>
                            <li>Facebook</li>
                        </ul>

                    </div>
                    <div className="md-5">
                        <h4>Welcome!!</h4>
                        <p className="my-5">
                            <small>Health Care © . All rights reserved.</small>
                        </p>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default Footer;
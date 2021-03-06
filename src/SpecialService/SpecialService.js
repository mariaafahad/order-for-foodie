import React from 'react';
import { Link } from 'react-router-dom';

const SpecialService = ({ specialService }) => {
    const { name, items, price, img } = specialService;

    return (
        <div className=" border-4 border-light-blue-500 border-opacity-100 ">
            <img className="w-full" src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>{items}</p>
            <Link to="/order">
                <button className="border-2 border-green-400 rounded-full py-2 px-6 my-5 hover:border-gray-500 ">Order Now</button>
            </Link>
        </div>
    );
};

export default SpecialService;
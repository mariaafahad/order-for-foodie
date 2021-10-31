import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, description, img, _id } = service;
    return (
        <div className=" border-2 border-green-400 rounded-3xl border-opacity-100 ">
            <img className="w-full rounded-3xl" src={img} alt="" />
            <div className="p-10">
                <h3><strong>Item: </strong>{name}</h3>
                <h5 className="my-5"><strong>Price with delivery charge: </strong>{price}</h5>
                <p className="my-5"><strong>Description: </strong>{description}</p>
                <Link to={`/order/${_id}`}>
                    <button className="border-4 border-yellow-400 rounded-full py-2 px-6 my-5 hover:border-gray-500 hover:bg-black hover:text-white  ">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;
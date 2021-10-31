import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../App';
import useAuth from '../hooks/useAuth';


const Order = () => {
    const { register, handleSubmit } = useForm();
    const [user, setUser] = useContext(UserContext);
    // const history = useHistory();
    const { id } = useParams();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    const ordered = services.find(service => service._id === id);
    console.log(user);

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/newService', data)
            .then(res => {
                console.log(res);
                if (res) {
                    alert("Your order placed successfully!!")
                }
            })
    }
    return (
        <div>

            <form method="post" onSubmit={handleSubmit(onSubmit)} className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600">Order Confirm</h2>


                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Personal Details</p>
                                    <p>Please fill out all the fields.</p>
                                    <img src={ordered?.img} alt="" />
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label for="full_name">Full Name</label>
                                            <input type="text" {...register("name", { required: true, maxLength: 20 })} name="full_name" value={user?.displayName} id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label for="email">Email Address</label>
                                            <input type="text" {...register("email", { required: true, maxLength: 20 })} name="email" id="email" value={user?.email} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label for="address">Address / Street</label>
                                            <input type="text" name="address" {...register("address", { required: true, maxLength: 20 })} id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label for="city">City</label>
                                            <input type="text" {...register("city", { required: true, maxLength: 20 })} name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label for="country">Country / region</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="country" {...register("country", { required: true, maxLength: 20 })} id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            </div>
                                        </div>

                                        <div className="md:col-span-2">
                                            <label for="state">State / province</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="state" id="state" {...register("state", { required: true, maxLength: 20 })} placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />


                                            </div>
                                        </div>

                                        <div className="md:col-span-1">
                                            <label for="price">Price</label>
                                            <input type="text" {...register("price", { required: true, maxLength: 20 })} name="price" id="price" value={ordered?.price} className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>


                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </form>
        </div >
    );
};

export default Order;
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './ManageServices.css';

const ManageServices = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        data.preventDefault();
        console.log(data);
        axios.post('https://grim-blood-01748.herokuapp.com/addService', data)
            .then(res => {
                console.log(res);
                if (res) {
                    history.push('/newService')
                }
            })
    }

    return (
        <div className="add-service">
            <form onSubmit={() => handleSubmit(onSubmit)}>
                <input className="border-gray-700"{...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Number" />
                <input {...register("img")} placeholder="Image URL" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default ManageServices;
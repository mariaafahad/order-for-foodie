
import React, { useEffect, useState } from 'react';

const NewService = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newData')
            .then((response) => response.json())
            .then(data => setData(data))
    }, [])


    const handleDelete = _id => {
        const url = `http://localhost:5000/services/${_id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Do you want to delete this service?')

                    const remaining = data.filter(service => service._id !== _id);
                    setData(remaining)
                }

            })
    }





    return (
        <div>

            <div className="grid grid-cols-2">
                {
                    data?.map(data => <div className="border-2 p-3 rounded-md m-3 items-center">
                        <h1>{data.name}</h1>
                        <h3>{data.description}</h3>
                        <h5>{data.price}</h5>
                        <img src={data.img} alt="" />
                        <button className="bg-red-400 rounded-lg px-5 py-2 mt-10" onClick={() => handleDelete(data._id)}>Remove</button>
                    </div>)
                }
            </div>
        </div >
    );
};

export default NewService;
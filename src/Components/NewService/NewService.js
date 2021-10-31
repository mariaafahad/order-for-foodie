import React, { useEffect, useState } from 'react';

const NewService = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/newData')
            .then((response) => response.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1>hello from new Service</h1>
            <div className="grid grid-cols-2">
                {
                    data.map(data => <div className="border-2 p-3 rounded-md m-3 items-center">
                        <h1>{data.name}</h1>
                        <h3>{data.description}</h3>
                        <h5>{data.price}</h5>
                        <img src={data.img} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default NewService;
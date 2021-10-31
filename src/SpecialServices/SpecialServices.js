import React, { useEffect, useState } from 'react';
import SpecialService from '../SpecialService/SpecialService';

const SpecialServices = () => {
    const [specialServices, setSpecialServices] = useState([])
    const [see, setSee] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/special')
            .then(res => res.json())
            .then(data => setSpecialServices(data))
    }, [])

    return (
        <div>
            <h2 className="text-primary mt-5">Our Special services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center ">

                {/* {
                    specialServices.map(specialService => <SpecialService
                        key={specialService.id}
                        specialService={specialService}
                    ></SpecialService>)
                } */}



                {
                    see ?
                        specialServices.slice(0, 2).map(specialService => <SpecialService
                            key={specialService.id}
                            specialService={specialService}
                        ></SpecialService>)
                        :
                        specialServices.map(specialService => <SpecialService
                            key={specialService.id}
                            specialService={specialService}
                        ></SpecialService>)
                }
            </div>
            <p onClick={() => setSee(!see)} className="bg-green-50 cursor-pointer p-2">See All</p>
        </div >
    );
};

export default SpecialServices;
import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Servies = () => {

    const [Services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-samimhossainsujon.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div>
            <div className='text-center mt-6'>
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h3 className="text-5xl">Our Services</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br />
                    words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {Services.map(service => <ServicesCart
                    key={service._id}
                    service={service}
                ></ServicesCart>)}

            </div>

        </div>
    );
};

export default Servies;
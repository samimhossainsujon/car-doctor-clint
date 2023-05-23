import React, { useEffect, useRef, useState } from 'react';
import ServicesCart from './ServicesCart';

const Servies = () => {

    const [Services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
     const searchRef = useRef(null);

     const [search, setSearch] = useState('')



    useEffect(() => {
        fetch(`http://localhost:5000/services?&search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(response => response.json())
            .then(data => setServices(data));

    }, [asc, search,]);


    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    };



    return (
        <div>
            <div className='text-center mt-6'>
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h3 className="text-5xl">Our Services</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized <br />
                    words which don't look even slightly believable.</p>

                <div class="form-control">
                    <div class="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" class="input input-bordered" />
                        <button onClick={handleSearch} class="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>


                <button
                    className='btn btn-primary'
                    onClick={() => setAsc(!asc)}
                >{asc ? "Price High to Low" : "Price Low to high"}</button>
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
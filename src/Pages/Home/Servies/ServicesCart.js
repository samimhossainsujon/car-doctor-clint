import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';


const ServicesCart = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div className="flex items-center">
                    <p className='text-xl text-orange-500 font-bold'>Price: ${price}</p>
                    <p className='flex justify-end text-lg'>
                        <button className='btn btn-outline btn-secondary'>
                            <AiOutlineArrowRight />
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const ServicesCart = ({ service }) => {
    const {_id, img, title, price } = service;
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
                        <Link to={`/book/${_id}`}>
                            <button className='btn btn-outline btn-secondary'>
                                <AiOutlineArrowRight />
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;
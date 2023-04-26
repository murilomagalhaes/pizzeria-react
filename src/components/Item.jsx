import React from 'react'
import pic from '../assets/images/pizza-drink.webp'
import { Link } from 'react-router-dom'

const Item = ({ pizza }) => {
    return (
        <div className='box-border rounded-md bg-white shadow-md hover:shadow-xl transition-all ease-in-out duration-300'>
            <img src={pic} alt="Food picture" className='h-40 w-full object-cover rounded-md' />
            <div className='p-3'>
                <Link to={`pizza/${pizza._id}`} state={pizza} className='text-orange-500 font-bold block text-xl mb-3 hover:text-yellow-500'>{pizza.flavour}</Link>
                {pizza.description}
                <hr className='my-4' />

                <div>
                    <strong className='text-orange-500'>Price: </strong> ${pizza.price}
                </div>
            </div>

        </div>
    )
}

export default Item
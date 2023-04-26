import React from 'react'
import pizzaBackground from '../assets/images/pizza-background.webp';

const Banner = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={pizzaBackground} alt="Pizza background" className='object-cover h-48 w-screen opacity-50' />
                <div className="absolute bottom-12 w-full text-center drop-shadow-lg">
                    <div className='inline-block'>
                        <h1 className='text-orange-500 font-bold text-7xl'>React</h1>
                        <div className='bg-white rounded-2xl text-yellow-500 font-bold text-4xl'>Pizzeria</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner
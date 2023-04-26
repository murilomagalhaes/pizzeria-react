import { Link } from 'react-router-dom';
import couchPizza from '../assets/images/couch-pizza.svg';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto p-4 lg:p-8 border-2 border-t-orange-500 bg-white z-50">
            <div className='flex items-center justify-around'>
                <div>
                    <h1 className="text-lg font-bold text-orange-500">React Pizzeria</h1>
                    <hr className="my-4" />
                    <ul>
                        <li className='hover:text-orange-500'> <Link to={'/'}>Home</Link></li>
                        <li className='hover:text-orange-500'> <Link to={'about'}>About</Link></li>
                    </ul>
                </div>
                <img src={couchPizza} alt="Pizza on the couch" className='h-32' />
            </div>

        </footer>
    )
}

export default Footer
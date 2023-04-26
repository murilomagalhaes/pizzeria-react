import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logos/pizza.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {

    const { authUser, signOut } = useContext(AuthContext);
    const location = useLocation();

    const showSignIn = () => {

        if (location.pathname === '/login') {
            return (
                <Link to={"signup"} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl'>
                    Sign Up
                </Link>
            );
        }

        if (!authUser.token) {
            return (
                <Link to={"login"} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl'>
                    Sign In
                </Link>
            );
        }

        if (authUser.token) {
            return (
                <strong className='flex items-center'>
                    <span className='hidden lg:block'>
                        {authUser.user.email}
                    </span>
                    <button title='Sign out' onClick={() => signOut()}>
                        <i className='bi bi-box-arrow-right text-2xl ms-4'></i>
                    </button>
                </strong>
            )
        }
    }

    return (
        <header className='flex justify-between items-center px-5 py-3 w-100 shadow-md border-b1 bg-white z-50'>
            <div className='flex gap-x-2 items-center'>
                <Link to={'/'} className='flex gap-x-3 items-center hover:opacity-80 me-2'>
                    <img src={logo} alt="Logo" className='h-14' />
                    <div className='hidden lg:block'>
                        <h1 className='text-orange-500 font-bold text-2xl'>React</h1>
                        <small className='text-yellow-500 font-bold'>Pizzeria</small>
                    </div>
                </Link>

                {
                    authUser.user?.isAdmin ?
                        (<Link to={'/admin_area'} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded">
                            Admin area
                        </Link>) :
                        (<></>)
                }
            </div>
            <div className='flex gap-x-2'>
                {authUser.user ? (
                    <Link to={'/cart'} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded">
                        <i className='bi bi-cart'></i>
                    </Link>) :
                    (<></>)}
                {showSignIn()}
            </div>
        </header>
    )
}

export default Header
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {

    const { authUser } = useContext(AuthContext);

    if (authUser.token) {
        return children;
    }

    return <Navigate to={'/login'} />


}

export default Protected
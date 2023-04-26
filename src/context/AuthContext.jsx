import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const navigate = useNavigate();

    const [authUser, setAuthUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const authUser = localStorage.getItem('authUser');

        if (authUser) {
            setAuthUser(JSON.parse(authUser));
        }

        setLoading(false);

    }, [])

    const loginAttempt = (email, password, setError, setFormLoading) => {

        setFormLoading(true);

        api.post('auth/login', { email, password })
            .then(r => {
                const user = r.data;
                setAuthUser(user);
                localStorage.setItem('authUser', JSON.stringify(user));
                navigate('/');
            })
            .catch(e => {
                setError(e?.response.data?.message);
            })
            .finally(() => {
                setFormLoading(false)
            });
    }

    const signOut = () => {
        localStorage.removeItem('authUser');
        setAuthUser({})
        navigate('/login');
    }

    if (loading) {
        return (
            <small className="p-2">
                Loading...
            </small>
        )
    }

    return (
        <AuthContext.Provider value={{ authUser, loginAttempt, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContextProvider, AuthContext };
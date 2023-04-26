import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";

const SignUp = () => {

  const { authUser, loginAttempt } = useContext(AuthContext);
  const [error, setError] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();

    const [name, email, password, confirm_password] = [
      e.target.name.value,
      e.target.email.value,
      e.target.password.value,
      e.target.confirm_password.value
    ];

    if (password !== confirm_password) {
      return setError("Password confirmation doesn't match!");
    }

    setLoading(true);

    api.post('users/create', { name, email, password })
      .then(r => {
        setMessage(`User created successfuly! Hit 'Sign in' to get started.`);
        setError();
        e.target.reset();
      })
      .catch(e => {
        setError(e.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });

  };

  const showError = () => {
    if (error) {
      return (
        <div className="bg-red-500 text-white p-3 rounded border mb-4">
          {error}
        </div>
      )
    }
  };

  const showMessage = () => {
    if (message) {
      return (
        <div className="bg-green-700 text-white p-3 rounded border mb-4">
          {message}
        </div>
      )
    }
  };

  const showLoading = () => {
    if (loading) {
      return (
        <div className="bg-gray-300 text-black p-3 rounded border mb-4">
          Loading...
        </div>
      )
    }
  };


  return (
    <div className='page-container'>

      <form onSubmit={handleForm} className="bg-white p-4  rounded border border-orange-500 w-100 lg:w-96 text-center m-auto shadow-md">

        {showError()}
        {showMessage()}
        {showLoading()}

        <input type="text" name="name" id="name" placeholder="Name" className="mb-2 w-full" required />
        <input type="email" name="email" id="email" placeholder="Email" className="mb-2 w-full" required />
        <input type="password" name="password" id="password" placeholder="Password" className="mb-2 w-full" required />
        <input type="password" name="confirm_password" id="confirm_password" placeholder="Password confirm" className="mb-2 w-full" required />

        <button disabled={loading} type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center">
          Sign Up
          <i className="bi bi-box-arrow-in-right ms-2 text-lg"></i>
        </button>

      </form>
    </div>
  )
};

export default SignUp;
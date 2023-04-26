import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const { authUser, loginAttempt } = useContext(AuthContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    const [email, password] = [e.target.email.value, e.target.password.value];

    loginAttempt(
      email,
      password,
      (e) => setError(e),
      (value) => setLoading(value)
    );
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
        {showLoading()}

        <input type="email" name="email" id="email" placeholder="Email" className="mb-2 w-full" required />
        <input type="password" name="password" id="password" placeholder="Password" className="mb-2 w-full" required />

        <button disabled={loading} type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center">
          Sign in
          <i className="bi bi-box-arrow-in-right ms-2 text-lg"></i>
        </button>

      </form>
    </div>
  )
};

export default Login;
import { React, useContext, useState } from 'react'
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import pic from '../assets/images/pizza-drink.webp';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const EditPizza = () => {

  const { state } = useLocation();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { authUser } = useContext(AuthContext);

  const handleForm = (e) => {

    e.preventDefault();

    const [flavour, description, price] = [
      e.target.flavour.value,
      e.target.description.value,
      e.target.price.value,
    ];

    setLoading(true);

    api.patch(`pizzas/update/${id}`, { flavour, description, price }, {
      headers: {
        Authorization: `Bearer ${authUser.token}`
      }
    })
      .then(r => {
        alert("Pizza updated successfuly!");
        navigate('/admin_area');
      })
      .catch(e => {
        alert(e.response?.data?.message);
      })
      .finally(() => setLoading(false));
  }

  return (

    <div className='page-container '>

      <Link to={'/admin_area'} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl'>
        <i className='bi bi-arrow-left me-2'></i>
        Back
      </Link>

      <div className="grid grid-cols-2 gap-8 my-8 ">
        <img src={pic} alt="Food picture" className='h-72 w-full object-cover rounded-md' />

        <form onSubmit={handleForm}>
          <div className="mb-4 w-full font-bold">ID:  {id} </div>
          <input defaultValue={state.flavour} type="text" name="flavour" id="flavour" placeholder="Flavour" className="mb-2 w-full" required />
          <input defaultValue={state.description} type="text" name="description" id="description" placeholder="Description" className="mb-2 w-full" required />
          <input defaultValue={state.price} type="number" step="0.01" min="0" name="price" id="price" placeholder="Price" className="mb-2 w-full" required />


          <button disabled={loading} type="submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center disabled:cursor-not-allowed">
            Save
            <i className="bi bi-save ms-2 text-lg"></i>
          </button>
        </form>
      </div>

    </div>

  )
}

export default EditPizza
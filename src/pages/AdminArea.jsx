import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api';

const AdminArea = () => {

  const { authUser } = useContext(AuthContext);
  const [pizzas, setPizzas] = useState([]);
  const mounted = useRef(false); // Avoid useEffect to be called twice on strict mode
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!mounted.current) {
      fetchPizzas();
    }

    mounted.current = true;
  }, []);



  const fetchPizzas = () => {
    setLoading(true);

    api.get('pizzas/all', {
      headers: {
        Authorization: `Bearer ${authUser.token}`
      }
    })
      .then(r => {

        if (r.data?.message === 'jwt expired') {
          navigate('/login');
        }

        setPizzas(r.data);
      })
      .catch(e => {
        alert(e.response?.data?.message ?? e.message);
      }).finally(() => setLoading(false));
  }


  const deletePizza = (pizza) => {
    if (confirm('Are you sure?')) {
      api.delete(`pizzas/destroy/${pizza._id}`, {
        headers: {
          Authorization: `Bearer ${authUser.token}`
        }
      }).then(r => {
        alert("Pizza deleted successfuly");
        fetchPizzas();
      }).catch(e => {
        alert(e.response?.data?.message ?? e.message);
      });
    }
  }

  return (
    <div className='page-container'>
      <div className='flex justify-end mb-4'>
        <Link to={'/new_pizza'} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl'>
          <i className='bi bi-plus-lg me-2'></i>
          New Pizza
        </Link>
      </div>
      <div className="flex flex-col bg-white rounded-lg shadow-lg border border-orange-500">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-orange-500">
                <thead>
                  <tr>
                    <th scope="col" className="text-bold px-6 py-3 text-left text-xs text-orange-500 uppercase">Flavour</th>
                    <th scope="col" className="text-bold px-6 py-3 text-left text-xs text-orange-500 uppercase">Description</th>
                    <th scope="col" className="text-bold px-6 py-3 text-left text-xs text-orange-500 uppercase">Price</th>
                    <th scope="col" className="text-bold px-6 py-3 text-right text-xs text-orange-500 uppercase"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-500">
                  {pizzas.map(p => {
                    return (
                      <tr key={p._id} className='hover:text-orange-500'>
                        <td className='p-2 px-6 py-4 whitespace-nowrap text-sm font-medium '>{p.flavour}</td>
                        <td className='p-2 px-6 py-4 whitespace-nowrap text-sm font-medium '>{p.description}</td>
                        <td className='p-2 px-6 py-4 whitespace-nowrap text-sm font-medium '>{p.price}</td>
                        <td className='p-2 px-6 py-4 whitespace-nowrap text-sm font-medium  text-end'>
                          <button disabled={loading} onClick={() => deletePizza(p)} className="bg-red-700 hover:bg-red-500 text-white font-bold p-2 rounded me-2 disabled:cursor-not-allowed">
                            <i className='bi bi-trash'></i>
                          </button>
                          <Link to={`/edit_pizza/${p._id}`} state={p} className="bg-blue-700 hover:bg-blue-500 text-white font-bold p-2 rounded">
                            <i className='bi bi-pencil'></i>
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default AdminArea
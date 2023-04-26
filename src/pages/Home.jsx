import { useContext, useEffect, useRef, useState } from 'react';
import Banner from '../components/Banner.jsx';
import Item from '../components/Item.jsx';
import api from '../services/api.js';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const { authUser } = useContext(AuthContext);
  const [pizzas, setPizzas] = useState([]);
  const mounted = useRef(false); // Avoid useEffect to be called twice on strict mode

  useEffect(() => {

    if (!mounted.current) {
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
        });
    }

    mounted.current = true;
  }, []);


  return (

    <>
      <Banner />

      <div className='page-container'>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
          {pizzas.map(p => <Item pizza={p} key={p._id} />)}
        </div>
      </div>


    </>
  )
}

export default Home
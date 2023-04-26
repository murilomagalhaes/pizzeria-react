import { React } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom';
import pic from '../assets/images/pizza-drink.webp';

const Pizza = () => {

  const { state } = useLocation();
  const { id } = useParams();

  const addToCart = (e) => {

    e.preventDefault();

    const qty = e.target.qty.value;

    if (qty < 1) {
      return alert("Invalid quantity!");
    }

    const cart = JSON.parse(localStorage.getItem('pizzeria-cart') ?? '[]');

    cart.push({ qty, pizza: state });

    localStorage.setItem('pizzeria-cart', JSON.stringify(cart));
    e.target.reset();
    
    alert("Pizza added to cart!");

  };

  return (

    <div className='page-container '>


      <Link to={'/'} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl'>
        <i className='bi bi-arrow-left me-2'></i>
        Back
      </Link>


      <div className="grid grid-cols-2 gap-8 my-8 ">
        <img src={pic} alt="Food picture" className='h-72 w-full object-cover rounded-md' />

        <div>
          <h2 to={`pizza/${state.id}`} state={state} className='text-orange-500 font-bold block text-xl mb-3 hover:text-yellow-500'>({id}) {state.flavour}</h2>
          {state.description}
          <hr className='my-4' />

          <div>
            <strong className='text-orange-500'>Price: </strong> ${state.price}
          </div>

          <form onSubmit={addToCart} className='flex justify-between border rounded-xl p-3 mt-4 bg-white'>
            <input type="number" step="1" min="1" placeholder='Quantity' name='qty' id='qty' />
            <button type='submit' className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg'>
              Add to cart
            </button>
          </form>

        </div>
      </div>
    </div>

  )
}

export default Pizza 
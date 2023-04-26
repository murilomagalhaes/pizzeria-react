import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pizza = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('pizzeria-cart') ?? '[]'));
  }, []);

  const finishOrder = () => {
    localStorage.setItem('pizzeria-cart', '[]');
    setCart([]);
    alert("Finished order");
  };

  const showCart = () => {
    if (cart.length) {
      return (
        <div>
          <h1 className='mb-8 font-bold text-lg text-orange-500'>Cart Items</h1>
          {cart.map(c => (
            <div key={c.pizza._id} className='flex justify-between border-b mb-4 pb-3'>
              <div>
                <strong className='me-2'>Qty: {c.qty}</strong>
                <span>{c.pizza.flavour}</span>
              </div>
              <strong>
                ${c.pizza.price} / each
              </strong>
            </div>
          ))}

          <strong className='text-end block text-orange-500 text-lg mb-4'>
            Total: ${cart.reduce((a, b) => a.pizza.price + b.pizza.price)}
          </strong>

          <div className='text-end'>
            <button onClick={finishOrder} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg w-full'>
              Finish order
            </button>
          </div>

        </div>
      )
    }

    return (<h1>Your cart is empty</h1>);
  }



  return (

    <div className='page-container '>


      <Link to={'/'} className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-2xl'>
        <i className='bi bi-arrow-left me-2'></i>
        Back
      </Link>


      <div className="mx-auto my-8 bg-white p-4 shadow-lg border rounded">
        {showCart()}
      </div>
    </div>

  )
}




export default Pizza 
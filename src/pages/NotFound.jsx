import { React } from 'react'
import notFound from '../assets/images/not-found.svg';

const Item = () => {

  return (
    <div>
      <div className='page-container'>
        <div className='flex gap-x-4 items-center justify-center py-4'>
          <h2 className='text-4xl text-orange-500 font-bold'>Page not found</h2>
          <img src={notFound} alt="Page not found" className='h-52' />
        </div>
      </div>
    </div>
  )
}

export default Item 
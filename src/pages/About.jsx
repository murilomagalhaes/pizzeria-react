import React from 'react'
import reactImage from '../assets/images/react.svg'

const About = () => {
  return (
    <div className='page-container'>
      <h2 className='text-2xl text-orange-500 font-bold'>About React's Pizzeria</h2>
      <hr className='my-4' />
      <div className='flex gap-x-8 items-middle'>
        <img src={reactImage} alt="React Image" className='h-40' />
        <blockquote>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </blockquote>

      </div>

    </div>
  )
}

export default About
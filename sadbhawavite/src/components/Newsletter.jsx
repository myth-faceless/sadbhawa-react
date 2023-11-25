import React from 'react'

const Newsletter = () => {
  return (
    <>
     <div className='bg-black text-white px-6 py-8 lg:px-96 lg:py-14 flex flex-col  2xl:flex-row items-center justify-between'>
        <div className='text-center md:text-left'>
          <p className='text-2xl font-serif italic'>Subscribe to our newsletter to stay informed</p>
          <p className='text-gray-500 mt-2'>Choose the play and the day on which you would like to see it.</p>
        </div>
        <div className='flex flex-row justify-between gap-1 md:mt-5'>
            <input type="email" placeholder='Enter your email' className='bg-transparent border px-5' required />
        <button className=' text-black border-2 border-white px-8 py-4 uppercase bg-white hover:bg-transparent hover:text-white'>
         Subscribe
        </button>
        </div>
        
      </div>
    </>
  )
}

export default Newsletter
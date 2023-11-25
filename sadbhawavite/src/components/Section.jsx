import React from 'react'

const Section = () => {
  return (
    <>
        <div className='bg-background-image w-full h-screen bg-cover bg-center flex items-center justify-center flex-col'>
            <div className='text-center'>
                <p className='text-white text-3xl font-bold p-5 font-serif mb-5'>By Ram KAC</p>
                <h1 className='text-white text-9xl italic font-extrabold'>The Phantom</h1>
                <p className='text-white text-2xl italic font-serif pt-10'>September 14-15, 2017</p>
            </div>
            <div className='mt-14 flex flex-row gap-10'>
                <button className='text-black border-2 px-8 py-4 uppercase bg-white hover:bg-transparent hover:text-white'>Book Now</button>
                <button className='text-white border-2 px-8 uppercase hover:bg-white hover:text-black'>Discover</button>
            </div>
        </div>
    </>
  )
}

export default Section
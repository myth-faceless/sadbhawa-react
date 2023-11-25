import React from 'react';

const Buytickets = () => {
  return (
    <>
      <div className='bg-black text-white xl:px-60 xl:py-14 2xl:px-96 2xl:py-14 flex flex-col  md:flex-row items-center justify-between'>
        <div className='text-center md:text-left'>
          <p className='text-4xl font-serif font-bold'>Get Your Tickets</p>
          <p className='text-gray-500 mt-2'>Choose the play and the day on which you would like to see it.</p>
        </div>
        <button className='mt-4 md:mt-0 text-black border-2 px-8 py-4 uppercase bg-white hover:bg-transparent hover:text-white'>
          Book Now
        </button>
      </div>
    </>
  );
};

export default Buytickets;



// import React from 'react'

// const Buytickets = () => {
//   return (
//     <>
//         <div className='bg-black w-full h-auto text-white flex items-center justify-between px-96 py-14'>
//             <div className='flex flex-col justify-center'>
//                 <p className='text-white text-4xl font-serif font-bold'>Get Your Tickets</p>
//                 <p className='text-gray-500 mt-2'>Choose the play and the day on which you would like to see it.</p>
//             </div>
//             <div>
//             <button className='text-black border-2 px-8 py-4 uppercase bg-white hover:bg-transparent hover:text-white'>Book Now</button>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Buytickets
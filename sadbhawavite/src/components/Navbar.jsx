import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { BsSearch } from 'react-icons/bs';
import Logo from './assets/Sadbhawa.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`fixed w-full flex justify-between z-10 px-14 py-10 ${isScrolled ? 'bg-darkBackground py-5' : 'bg-transparent' } text-white transition-all duration-400`}>
          <div className='flex items-cente'>
            <Link to="/" spy smooth duration={500} className='cursor-pointer'>
            <img src={Logo} alt="Sadbhawa Logo" className="w-[110px] h-12" />
            </Link>
          </div>
          <nav className='flex flex-row items-center uppercase text-sm'>
          <Link to="home" spy={true} smooth={true} duration={500} className='cursor-pointer'>
          <span className="hover:text-gray-400 transition-colors duration-300">Home</span>
          <span className="text-sm m-4 opacity-50">|</span>
          </Link>
          <Link to="feature" spy={true} smooth={true} duration={500} className='cursor-pointer'>
          <span className="hover:text-gray-400 transition-colors duration-300">Features</span>
          <span className="text-sm m-4 opacity-50">|</span>  
          </Link>
          <Link to="shortcodes" spy={true} smooth={true} duration={500} className='cursor-pointer'>
          <span className="hover:text-gray-400 transition-colors duration-300">Shortcodes</span>
          <span className="text-sm m-4 opacity-50">|</span>
          </Link>
          <Link to="posttypes" spy={true} smooth={true} duration={500} className='cursor-pointer'>
          <span className="hover:text-gray-400 transition-colors duration-300">Posttypes</span>
          <span className="text-sm m-4 opacity-50">|</span>
          </Link>
          <Link to="shop" spy={true} smooth={true} duration={500} className='cursor-pointer'>
          <span className="hover:text-gray-400 transition-colors duration-300">Shop</span>
          
          </Link>
        </nav>
          <div className='flex items-center'>
            <BsSearch className="cursor-pointer hover:text-gray-400 transition-colors duration-300"/>
          </div>
        </div>
    </>
  );
};

export default Navbar;






// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
// import { BsSearch } from 'react-icons/bs';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  

//   return (
//     <>
//      <div className={`fixed w-full top-0 z-50 ${isScrolled ? 'bg-darkBackground' : 'bg-red-200'} text-white transition-all duration-300`}>
//       <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white'>
//         <div className='flex items-center'>
//           <Link to="/" spy={true} smooth={true} duration={500} className='cursor-pointer'>
//             <h1 className='text'>Sadbhawa Theater</h1>
//           </Link>
//         </div>
        
//         <div>
//          <BsSearch className="cursor-pointer hover:text-gray-400 transition-colors duration-300"/>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

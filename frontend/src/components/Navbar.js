
// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [token, setToken] = useState(true);

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 px-4 md:px-10'>
//       {/* Logo Section */}
//       <div className='flex items-center gap-2'>
//         <img className='w-10 md:w-14 cursor-pointer' src={assets.logo1} alt='logo' />
//         <span className='text-xl font-bold text-[#0a0a60] hidden sm:block'>Prescripto</span>
//       </div>

//       {/* Navigation Links */}
//       <ul className='hidden md:flex items-center gap-6 font-medium'>
//         <li className='py-1'>
//           <Link to='/' className='relative'>
//             HOME
//             {isActive('/') && <hr className='absolute bottom-0 left-0 w-4/5 mx-auto h-0.5 bg-primary border-none' />}
//           </Link>
//         </li>
//         <li className='py-1'>
//           <Link to='/doctors' className='relative'>
//             ALL DOCTORS
//             {isActive('/doctors') && <hr className='absolute bottom-0 left-0 w-4/5 mx-auto h-0.5 bg-primary border-none' />}
//           </Link>
//         </li>
//         <li className='py-1'>
//           <Link to='/about' className='relative'>
//             ABOUT
//             {isActive('/about') && <hr className='absolute bottom-0 left-0 w-4/5 mx-auto h-0.5 bg-primary border-none' />}
//           </Link>
//         </li>
//         <li className='py-1'>
//           <Link to='/contact' className='relative'>
//             CONTACT
//             {isActive('/contact') && <hr className='absolute bottom-0 left-0 w-4/5 mx-auto h-0.5 bg-primary border-none' />}
//           </Link>
//         </li>
//       </ul>

//       {/* Right Side Buttons */}
//       <div className='flex items-center gap-3 relative group'>
//         <button
//           className='px-4 py-2 border text-sm rounded-full border-gray-300 hover:bg-gray-100 hidden md:block'
//           onClick={() => navigate('/admin')}
//         >
//           Admin Panel
//         </button>

//         {token ? (
//           <div className='flex items-center cursor-pointer'>
//             <img className='w-10 rounded-full' src={assets.profile_pic} alt='profile' />
//             <img className='w-3.5 ml-1' src={assets.dropdown_icon} alt='dropdown' />
//             <div className='absolute top-12 right-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//               <div className='min-w-48 bg-stone-100 rounded-md shadow-lg flex flex-col gap-4 p-4'>
//                 <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                 <p onClick={() => navigate('/my-appointement')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                 <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate('/login')}
//             className='bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block'
//           >
//             Create Account
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(true);

  const isActive = (path) => location.pathname === path;

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-14 cursor-pointer' src={assets.logo1} alt='' />

      {/* Navbar Links */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <li className='py-1'>
          <Link to='/' className='relative'>
            HOME
            {isActive('/') && <hr className='absolute bottom-0 left-0 w-4/5 m-auto h-0.5 bg-primary border-none' />}
          </Link>
        </li>
        <li className='py-1'>
          <Link to='/doctors' className='relative'>
            ALL DOCTORS
            {isActive('/doctors') && <hr className='absolute bottom-0 left-0 w-4/5 m-auto h-0.5 bg-primary border-none' />}
          </Link>
        </li>
        <li className='py-1'>
          <Link to='/about' className='relative'>
            ABOUT
            {isActive('/about') && <hr className='absolute bottom-0 left-0 w-4/5 m-auto h-0.5 bg-primary border-none' />}
          </Link>
        </li>
        <li className='py-1'>
          <Link to='/contact' className='relative'>
            CONTACT
            {isActive('/contact') && <hr className='absolute bottom-0 left-0 w-4/5 m-auto h-0.5 bg-primary border-none' />}
          </Link>
        </li>

        {/* Admin Panel Button */}
        <li>
          <button
            onClick={() => navigate('/admin')}
            className='text-xs px-4 py-1 border border-gray-400 rounded-full hover:bg-gray-200'
          >
            Admin Panel
          </button>
        </li>
      </ul>

      {/* Profile Section */}
      <div className='flex items-center gap-2 cursor-pointer group relative'>
        {token ? (
          <div className='flex items-center'>
            <img className='w-12 rounded-full' src={assets.profile_pic} alt='' />
            <img className='w-3.5' src={assets.dropdown_icon} alt='' />
            <div className='absolute top-0 right--1 pt-11 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 shadow-lg'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;


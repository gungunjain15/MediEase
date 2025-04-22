import React from 'react'
import {assets} from '../assets/assets';

const Header = () => {
  return (
    <div className = 'flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* ...............left side.................. */}
      <div className = 'md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
      <p>
        Book Appointment <br/> with Trusted Doctors
      </p>
      <div className = 'flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
        <img className = 'w-28' src={assets.header_img} alt="" />
        <p>Simply browse through our exclusive list of trusted doctors, <br className = 'hidden sm:block'/> schedule</p>
        
      </div>
      <a href = "#speciality" className = 'flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all-duration-300'>Book Appointments <img className = 'w-5' src = {assets.arrow_icon} alt="" /></a>
      </div>
   
      {/* .................Right side..................... */}
      <div className = 'md:w-1/2 relative'>
        <img className ='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.group_profiles} alt="" />
      </div>
      </div>
   
  )
}

export default Header;

// // frontend > src > pages > Doctors.js: Doctors

//    import React, { useContext, useState } from 'react'
//    import {useNavigate, useParams } from 'react-router-dom'
//    import { AppContext } from '../context/AppContext'
   
//    const Doctors = () => {
   
//    const { speciality } = useParams()
//    const [filterDoc_setFilterDoc] = useState([])
//    const navigate = useNavigate()
   
//     const {doctors} = useContext(AppContext)

//     const applyFilter = () => {
//       if (speciality) {
//           setFilterDoc(doctors.filter(doc => doc.speciality == speciality))
//       } else {
//           setFilterDoc(doctors)
//       }
//   }
  
//   useEffect(() => {
//       applyFilter()
//   }, [doctors, speciality])
    
    
//   return (
//    <div>   
//      <p className = 'text-gray-600'>Browse through the doctors specialist </p>   
//       <div className = 'flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         <div className = 'flex-col gap-4 text-sm text-gray-600'>
//    <p className ={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer`}>General physician</p>
//    <p className ={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
//    <p className ={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
//    <p className ={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
//    <p className ={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
//    <p className ={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
//    </div>
// <div className = 'w-full grid-cols-auto gap-4 gap-y-6'>
// {
//     filterDoc.map((item, index) => ( 
//         <div onClick={() => navigate(`/appointment/${item.id}`)} className='border'>
//             <img className='bg-blue-50' src={item.image} alt="" />
//             <div className='p-4'>
//                 <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                     <p className='w-2 h-2 bg-green-500 rounded-full'></p>
//                     <p>Available</p>
//                 </div>
//                 <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                 <p className='text-gray-600 text-sm'>{item.speciality}</p>
//             </div>
//         </div>
//     ))
//   }
// </div>
// )
// }
// export default Doctors;

import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    } 
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        
        {/* Sidebar Speciality List */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
        <p
    onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')}
    className={`w-[94vw] sm:w-auto px-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General Physician" ? "bg-indigo-100 text-black" : ""}`}
  >General Physician</p>
  <p
    onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}
    className={`w-[94vw] sm:w-auto px-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}
  >
    Gynecologist
  </p>
  <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}
    className={`w-[94vw] sm:w-auto px-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>
    Dermatologist
  </p>
  <p onClick={() => speciality === 'Pedestrician' ? navigate('/doctors') : navigate('/doctors/Pedestrician')}
    className={`w-[94vw] sm:w-auto px-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pedestrician" ? "bg-indigo-100 text-black" : ""}`}
  >
    Pedestrician
  </p>
  <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}
    className={`w-[94vw] sm:w-auto px-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}
  >
    Neurologist
  </p>
  <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}
    className={`w-[94vw] sm:w-auto px-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}
  >
    Gastroenterologist
  </p>
        </div>

        {/* Doctor Cards */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div key={item._id || index} onClick={() => navigate(`/appointment/${item._id}`)} className='border rounded cursor-pointer hover:shadow-md transition'>
                <img className='bg-blue-50 w-full h-40 object-cover' src={item.image} alt={item.name} />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-green-500 mb-1'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors;





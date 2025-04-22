import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
  } = useContext(DoctorContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken, getAppointments]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
        {/* Table Header */}
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Appointments List */}
        {appointments.reverse().map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid  grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
          >
            <p className="max-sm:hidden">{index + 1}</p>

            <div className="flex items-center gap-2">
              <img
                src={item.userData.image}
                alt={item.userData.name}
                className="w-8 rounded-full "
              />
              <p>{item.userData.name}</p>
            </div>

            <div>
              <p
                className={`text-xs inline border px-2 rounded-full ${
                  item.payment
                    ? "border-green-500 text-green-500"
                    : "border-blue-500 text-blue-500"
                }`}
              >
                {item.payment ? "Online" : "CASH"}
              </p>
            </div>

            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>

            <p>
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>

            <p>
              {currency}
              {item.amount}
            </p>
              
            {
              item.cancelled ? (
                <p className="text-red-400 text-xs font-medium">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-green-500 text-xs font-medium">Completed</p>
              ) : (
                <div className='flex gap-2'>
                  <img 
                    onClick={() => cancelAppointment(item._id)} 
                    className='w-8 h-8 cursor-pointer hover:opacity-80' 
                    src={assets.cancel_icon} 
                    alt="Cancel appointment"
                  />
                  <img 
                    onClick={() => completeAppointment(item._id)} 
                    className='w-8 h-8 cursor-pointer hover:opacity-80' 
                    src={assets.complete_icon} 
                    alt="Complete appointment"
                  />
                </div>
              )
            }
            <div className="flex">
              <img
                className="w-10 cursor-pointer"
                src={assets.cancel_icon}
                alt="Cancel appointment"
                onClick={() => cancelAppointment(item._id)}
              />
              <img
                className="w-10 cursor-pointer"
                src={assets.tick_icon}
                alt="Confirm appointment"
                onClick={() => completeAppointment(item._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;

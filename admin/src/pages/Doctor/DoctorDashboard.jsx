import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData ,cancelAppointment,completeAppointment} = useContext(DoctorContext);

  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken, getDashData]);

  return (
    dashData && (
      <div className="5">
        <div className="flex flex-wrap gap-3">
          {/* Doctors Card */}
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.earning_icon} alt="Doctors" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {currency}
                {dashData.earnings}
              </p>
              <p className="text-gray-400">Earnings</p>
            </div>
          </div>

          {/* Appointments Card */}
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img
              className="w-14"
              src={assets.appointments_icon}
              alt="Appointments"
            />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-gray-400">Appointments</p>
            </div>
          </div>

          {/* Earnings Card */}
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="patients" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                ${dashData.patients}
              </p>
              <p className="text-gray-400">Patients</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3 px-4 py-4 mt-10 rounded-t border-b">
              <img src={assets.list_icon} alt="Bookings list" />
              <p className="font-semibold">Latest Bookings</p>
            </div>

            <div className="pt-4 border border-t-0">
              {dashData.latestAppointments.map((item, index) => (
                <div
                  className="flex items-center px-6 py-3 gap-3 hover:bg-gray-50 transition-colors"
                  key={index}
                >
                  <img
                    className="rounded-full w-10"
                    src={item.userData.image}
                    alt={item.userData.image}
                  />

                  <div className="flex-1 text-sm">
                    <p className="text-gray-800 font-medium">
                      {item.userData.name}
                    </p>
                    <p className="text-gray-500">
                      {slotDateFormat(item.slotDate)}
                    </p>
                  </div>

                  {item.cancelled ? (
                    <p className="text-red-400 text-xs font-medium">
                      Cancelled
                    </p>
                  ) : item.isCompleted ? (
                    <p className="text-green-500 text-xs font-medium">
                      Completed
                    </p>
                  ) : (
                    <div className="flex gap-2">
                      <img
                        onClick={() => cancelAppointment(item._id)}
                        className="w-8 h-8 cursor-pointer hover:opacity-80"
                        src={assets.cancel_icon}
                        alt="Cancel appointment"
                      />
                      <img
                        onClick={() => completeAppointment(item._id)}
                        className="w-8 h-8 cursor-pointer hover:opacity-80"
                        src={assets.complete_icon}
                        alt="Complete appointment"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;

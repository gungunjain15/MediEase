import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext);

  const { slotDateFomat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken, getDashData]);

  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          {/* Doctors Card */}
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.doctor_icon} alt="Doctors" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.doctors}
              </p>
              <p className="text-gray-400">Doctors</p>
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
                    src={item.docData.image}
                    alt={item.docData.name}
                  />

                  <div className="flex-1 text-sm">
                    <p className="text-gray-800 font-medium">
                      {item.docData.name}
                    </p>
                    <p className="text-gray-500">
                      {slotDateFormat(item.slotDate)}
                    </p>
                  </div>

                  {item.cancelled ? (
                    <p className="text-red-400 text-xs font-medium">
                      Cancelled
                    </p>
                  ) : (
                    <img
                      onClick={() => cancelAppointment(item._id)}
                      className="w-6 cursor-pointer hover:opacity-80"
                      src={assets.cancel_icon}
                      alt="Cancel appointment"
                    />
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

export default Dashboard;

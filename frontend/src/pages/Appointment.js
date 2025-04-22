
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors, user } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookingStep, setBookingStep] = useState('select_slot'); // 'select_slot' or 'patient_details'
  const [patientDetails, setPatientDetails] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    gender: '',
    age: '',
    symptoms: '',
    medicalHistory: '',
    address: ''
  });

  // Generate dates for the next 7 days
  const generateDates = () => {
    const dates = [];
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push({
        day: days[date.getDay()],
        date: date.getDate(),
        fullDate: date.toISOString().split('T')[0],
        month: date.toLocaleString('default', { month: 'short' })
      });
    }
    return dates;
  };

  // Sample time slots (replace with actual slots from doctor's data if available)
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
    // Set first date as selected by default
    if (generateDates().length > 0) {
      setSelectedDate(generateDates()[0].fullDate);
    }
  }, [doctors, docId]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedSlot('');
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handlePatientDetailsChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProceedToDetails = () => {
    if (!selectedDate || !selectedSlot) {
      alert('Please select both date and time slot');
      return;
    }
    setBookingStep('patient_details');
  };

  const handleConfirmBooking = () => {
    // Validate patient details
    if (!patientDetails.fullName || !patientDetails.phone || !patientDetails.age) {
      alert('Please fill in all required patient details');
      return;
    }

    // Here you would typically call an API to book the appointment
    const appointmentData = {
      doctorId: docId,
      doctorName: docInfo.name,
      doctorSpeciality: docInfo.speciality,
      date: selectedDate,
      time: selectedSlot,
      patientDetails,
      fees: docInfo.fees,
      status: 'booked'
    };

    console.log('Booking appointment:', appointmentData);
    // In a real app, you would dispatch this to your backend
    // await bookAppointment(appointmentData);
    
    alert(`Appointment booked successfully for ${selectedDate} at ${selectedSlot}`);
    navigate('/my-appointments'); // Redirect to appointments page
  };

  const renderSlotSelection = () => (
    <div className='mt-8 border border-gray-300 rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>Book Available Slots</h2>
      
      {/* Date Selection */}
      <div className='mb-6'>
        <h3 className='text-md font-medium mb-2'>Select Date</h3>
        <div className='grid grid-cols-7 gap-2'>
          {generateDates().map((dayObj, index) => (
            <div 
              key={index}
              onClick={() => handleDateSelect(dayObj.fullDate)}
              className={`p-2 text-center cursor-pointer rounded-lg border ${
                selectedDate === dayObj.fullDate 
                  ? 'bg-blue-100 border-blue-500' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className='text-sm font-medium'>{dayObj.day}</div>
              <div className='text-lg'>{dayObj.date}</div>
              <div className='text-xs text-gray-500'>{dayObj.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slot Selection */}
      <div className='mb-6'>
        <h3 className='text-md font-medium mb-2'>Available Time Slots</h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleSlotSelect(slot)}
              className={`py-2 px-4 rounded-lg border ${
                selectedSlot === slot 
                  ? 'bg-blue-100 border-blue-500' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleProceedToDetails}
        className='w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'
      >
        Proceed with Booking
      </button>
    </div>
  );

  const renderPatientDetails = () => (
    <div className='mt-8 border border-gray-300 rounded-lg p-6'>
      <h2 className='text-xl font-semibold mb-4'>Patient Details</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        {/* Appointment Summary */}
        <div className='border border-gray-200 rounded-lg p-4'>
          <h3 className='font-medium mb-2'>Appointment Summary</h3>
          <div className='space-y-2 text-sm'>
            <p><span className='text-gray-600'>Doctor:</span> {docInfo.name}</p>
            <p><span className='text-gray-600'>Speciality:</span> {docInfo.speciality}</p>
            <p><span className='text-gray-600'>Date:</span> {new Date(selectedDate).toDateString()}</p>
            <p><span className='text-gray-600'>Time:</span> {selectedSlot}</p>
            <p><span className='text-gray-600'>Fees:</span> ₹{docInfo.fees}</p>
          </div>
        </div>

        {/* Patient Details Form */}
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Full Name*</label>
            <input
              type='text'
              name='fullName'
              value={patientDetails.fullName}
              onChange={handlePatientDetailsChange}
              className='w-full p-2 border border-gray-300 rounded-md'
              required
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Phone*</label>
              <input
                type='tel'
                name='phone'
                value={patientDetails.phone}
                onChange={handlePatientDetailsChange}
                className='w-full p-2 border border-gray-300 rounded-md'
                required
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Age*</label>
              <input
                type='number'
                name='age'
                value={patientDetails.age}
                onChange={handlePatientDetailsChange}
                className='w-full p-2 border border-gray-300 rounded-md'
                required
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Gender</label>
            <select
              name='gender'
              value={patientDetails.gender}
              onChange={handlePatientDetailsChange}
              className='w-full p-2 border border-gray-300 rounded-md'
            >
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Symptoms</label>
            <textarea
              name='symptoms'
              value={patientDetails.symptoms}
              onChange={handlePatientDetailsChange}
              className='w-full p-2 border border-gray-300 rounded-md'
              rows='2'
              placeholder='Describe your symptoms...'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Medical History</label>
            <textarea
              name='medicalHistory'
              value={patientDetails.medicalHistory}
              onChange={handlePatientDetailsChange}
              className='w-full p-2 border border-gray-300 rounded-md'
              rows='2'
              placeholder='Any previous medical conditions...'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-between'>
        <button
          onClick={() => setBookingStep('select_slot')}
          className='py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50'
        >
          Back
        </button>
        <button
          onClick={handleConfirmBooking}
          className='py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium'
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );

  return docInfo && (
    <div className="max-w-6xl mx-auto p-4">
      {/* --- Doctor Details --- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img
            className='bg-primary w-full sm:max-w-72 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'
            src={docInfo.image}
            alt=""
          />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-4'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience} years experience</button>
          </div>

          <div className='mt-4'>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          
          <p className='mt-3 text-gray-700'>
            Appointment fee: <span className='font-medium'>₹{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Section */}
      {bookingStep === 'select_slot' ? renderSlotSelection() : renderPatientDetails()}
    </div>
  );
};

export default Appointment;






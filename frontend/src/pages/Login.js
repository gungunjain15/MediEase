// import React, { useState } from 'react';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-white">
//    <div className="mt--100 bg-white p-8 shadow-xl rounded-xl w-96">
//         <h2 className="text-2xl font-bold mb-2">{isLogin ? 'Login' : 'Create Account'}</h2>
//         <p className="mb-6 text-sm text-gray-500">
//           {isLogin ? 'Please log in to book appointment' : 'Please sign up to book appointment'}
//         </p>

//         {!isLogin && (
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full mb-4 p-2 border rounded"
//           />
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-2 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-6 p-2 border rounded"
//         />

//         <button className="w-full bg-blue-500 text-white py-2 rounded">
//           {isLogin ? 'Login' : 'Create account'}
//         </button>

//         <p className="mt-4 text-sm text-center">
//           {isLogin ? (
//             <>Create a new account? <span onClick={toggleForm} className="text-blue-500 cursor-pointer">Click here</span></>
//           ) : (
//             <>Already have an account? <span onClick={toggleForm} className="text-blue-500 cursor-pointer">Login here</span></>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';

const LoginPage = () => {
  // State to manage the selected role
  const [role, setRole] = useState('');

  // Form state for Patient and Doctor
  const [patientData, setPatientData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const [doctorData, setDoctorData] = useState({
    name: '',
    specialisation: '',
    experience: '',
    degree: ''
  });

  // Handle role selection change
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  // Handle input changes for Patient form
  const handlePatientChange = (event) => {
    const { name, value } = event.target;
    setPatientData({ ...patientData, [name]: value });
  };

  // Handle input changes for Doctor form
  const handleDoctorChange = (event) => {
    const { name, value } = event.target;
    setDoctorData({ ...doctorData, [name]: value });
  };

  // Handle Patient form submission
  const handlePatientSubmit = (event) => {
    event.preventDefault();
    console.log('Patient Data:', patientData);
    // You can add further login logic here (e.g., API call)
  };

  // Handle Doctor form submission
  const handleDoctorSubmit = (event) => {
    event.preventDefault();
    console.log('Doctor Data:', doctorData);
    // You can add further login logic here (e.g., API call)
  };

  // Inline style for basic layout
  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '3px'
  };

  const labelStyle = {
    marginTop: '10px',
    display: 'block'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <div>
        <label htmlFor="roleSelect" style={labelStyle}>Login as:</label>
        <select id="roleSelect" value={role} onChange={handleRoleChange} style={inputStyle}>
          <option value="">-- Select Role --</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
      </div>

      {/* Render Patient Form */}
      {role === 'patient' && (
        <form onSubmit={handlePatientSubmit}>
          <label style={labelStyle} htmlFor="patientName">Name</label>
          <input
            type="text"
            id="patientName"
            name="name"
            value={patientData.name}
            onChange={handlePatientChange}
            style={inputStyle}
            placeholder="Enter your name"
            required
          />

          <label style={labelStyle} htmlFor="patientPhone">Phone Number</label>
          <input
            type="tel"
            id="patientPhone"
            name="phone"
            value={patientData.phone}
            onChange={handlePatientChange}
            style={inputStyle}
            placeholder="Enter your phone number"
            required
          />

          <label style={labelStyle} htmlFor="patientEmail">Email ID</label>
          <input
            type="email"
            id="patientEmail"
            name="email"
            value={patientData.email}
            onChange={handlePatientChange}
            style={inputStyle}
            placeholder="Enter your email"
            required
          />

          <label style={labelStyle} htmlFor="patientPassword">Password</label>
          <input
            type="password"
            id="patientPassword"
            name="password"
            value={patientData.password}
            onChange={handlePatientChange}
            style={inputStyle}
            placeholder="Enter your password"
            required
          />

          <button type="submit" style={buttonStyle}>Patient Login</button>
        </form>
      )}

      {/* Render Doctor Form */}
      {role === 'doctor' && (
        <form onSubmit={handleDoctorSubmit}>
          <label style={labelStyle} htmlFor="doctorName">Name</label>
          <input
            type="text"
            id="doctorName"
            name="name"
            value={doctorData.name}
            onChange={handleDoctorChange}
            style={inputStyle}
            placeholder="Enter your name"
            required
          />

          <label style={labelStyle} htmlFor="doctorSpecialisation">Specialisation</label>
          <input
            type="text"
            id="doctorSpecialisation"
            name="specialisation"
            value={doctorData.specialisation}
            onChange={handleDoctorChange}
            style={inputStyle}
            placeholder="Enter your specialisation"
            required
          />

          <label style={labelStyle} htmlFor="doctorExperience">Experience</label>
          <input
            type="number"
            id="doctorExperience"
            name="experience"
            value={doctorData.experience}
            onChange={handleDoctorChange}
            style={inputStyle}
            placeholder="Years of experience"
            required
          />

          <label style={labelStyle} htmlFor="doctorDegree">Degree</label>
          <input
            type="text"
            id="doctorDegree"
            name="degree"
            value={doctorData.degree}
            onChange={handleDoctorChange}
            style={inputStyle}
            placeholder="Enter your degree"
            required
          />

          <button type="submit" style={buttonStyle}>Doctor Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;


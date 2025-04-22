import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAToken, backendUrl } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        


        setAToken('dev-token');
    localStorage.setItem('aToken', 'dev-token');
    navigate('/admin-dashboard');
  //       try {
  //         const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
  //             email,
  //             password
  //         });
  
  //         if (data.success) {
  //             localStorage.setItem('aToken', data.token);
  //             setAToken(data.token);
        
  //         } else {
  //             toast.error(data.message);
  //         }
  //     } catch (error) {
  //         console.error('Login error:', error);
  //         toast.error(error.response?.data?.message || 
  //                    error.message || 
  //                    'An error occurred during login');
  //     }
  };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-lg shadow-sm'>
                <p className='text-2xl font-semibold m-auto'>
                    <span className='text-primary'>{state}</span> Login
                </p>
                
                <div className='w-full'>
                    <p>Email</p>
                    <input 
                        className='border border-[#DADADA] rounded w-full p-2 mt-1' 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div className='w-full'>
                    <p>Password</p>
                    <input 
                        className='border border-[#DADADA] rounded w-full p-2 mt-1' 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                
                <button 
                    className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-opacity-90 transition-colors'
                    type="submit"
                    onClick={() => {
                      setAToken('dev-token');
                      navigate('/admin-dashboard');
                  }}
                 
                >
                    Login
                </button>
                
                {state === 'Admin' ? (
                    <p>
                        Doctor Login?{' '}
                        <span 
                            className='text-primary underline cursor-pointer'
                            onClick={() => setState('Doctor')}
                        >
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Admin Login?{' '}
                        <span 
                            className='text-primary underline cursor-pointer'
                            onClick={() => setState('Admin')}
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;
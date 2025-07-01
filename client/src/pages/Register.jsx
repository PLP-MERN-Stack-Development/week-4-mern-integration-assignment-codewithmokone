import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/auth/register', formData);
      const userProfile = response.data;
      navigate('/login');
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <main className="w-full h-full flex justify-center bg-white">
      <div className="w-8/12 h-screen flex flex-col items-center justify-center gap-8 sm:w-11/12">
        <div className='w-[430px] h-96 flex flex-col justify-center gap-8 p-20 bg-gray-300 rounded-2xl'>
          <h2 className='text-center font-medium text-white text-4xl'>Register</h2>
          <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <input className='bg-white p-1' type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input className='bg-white p-1' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input className='bg-white p-1' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <button className="bg-blue-500 py-1 rounded-4xl text-white" type="submit">Register</button>
          </form>
          <p className="text-[14px] text-center text-white">Already have a account? <Link className="text-blue-500" to={'/login'}>Sign In</Link></p>
        </div>
      </div>
    </main>
  );
};

export default Register;





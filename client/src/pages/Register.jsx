import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <main className="w-full h-full flex justify-center bg-gray-300">
      <div className="w-8/12 h-full flex flex-col items-center justify-center gap-8 sm:w-11/12">
        <h2 className='mt-4'>Register</h2>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input className='bg-white' type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
          <input className='bg-white' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input className='bg-white' type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </main>
  );
};

export default Register;





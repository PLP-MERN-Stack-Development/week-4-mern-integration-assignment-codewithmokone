import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext, useState } from "react";

const Login = () =>  {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post('http://localhost:4000/api/auth/login', formData);
        login(res.data.token);
        navigate('/');
        } catch (err) {
        console.log(err.response.data);
        }
    };

    return (
        <main className="w-full h-full flex justify-center bg-gray-300">
            <div className="w-8/12 h-full flex flex-col items-center justify-center gap-8 sm:w-11/12">
                <h2>Login</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input className="bg-white" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <input className="bg-white" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>Dont have a account? <Link to={'/register'}>Register</Link></p> 
            </div>
        </main>
    )
}

export default Login;
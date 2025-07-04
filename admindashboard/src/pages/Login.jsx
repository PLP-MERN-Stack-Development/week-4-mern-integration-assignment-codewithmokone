import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () =>  {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('')
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
        const res = await axios.post('http://localhost:4000/api/auth/login', formData);
        login(res.data);
        navigate('posts');
        } catch (error) {
        console.log(error.response.data.message);
        setError(error.response.data.message)
        }
    };

    return (
        <main className="w-full h-full flex justify-center bg-white">
            <div className="w-8/12 h-screen flex flex-col items-center justify-center gap-8 sm:w-11/12">
                <div className="w-[430px] h-90 flex flex-col justify-center gap-8 p-20 bg-gray-300 rounded-2xl">
                    <h2 className="text-center font-medium text-white text-4xl">Login</h2>
                    {error ? (<p className="text-center text-red-500">{error}</p>) : ('') }
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <input className="bg-white p-1" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                        <input className="bg-white p-1" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required/>
                        <button className="bg-blue-500 py-1 rounded-4xl text-white" type="submit">Login</button>
                    </form>
                    <p className="text-[14px] text-center text-white">Dont have a account? <Link className="text-blue-500" to={'/register'}>Register</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Login;
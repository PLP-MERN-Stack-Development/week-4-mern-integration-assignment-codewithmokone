import { Link } from "react-router-dom";

const Login = () =>  {
    return (
        <main>
           <p>Dont have a account? <Link to={'/register'}>Register</Link></p> 
        </main>
    )
}

export default Login;
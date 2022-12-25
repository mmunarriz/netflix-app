import '../login.css'
import { useState } from 'react';
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
import { NavTres } from './NavDos';

// Login de usuarios
export function Login() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState();

    /* actualiza el estado  ,pero al usarlo con  onChange en el input se envia la informacion ingresada */
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    };
    /* Esta función recibirá los datos del formulario si la validación del formulario es exitosa.  */
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/user-not-found") {
                setError('User not found');
            } else if (error.code === "auth/wrong-password") {
                setError('Wrong password');
            }
        }
    }

    return (
        <>
         <NavTres />
        <div className='contenedor'>

            <h1 className='titulo'>Log in</h1>

            <form onSubmit={handleSubmit}>

                <input type="email" name='email' className="email" id="email" placeholder='Email' onChange={handleChange}></input>

                <input type="password" name='password' className="password" id="password" placeholder='Password' onChange={handleChange}></input>
                {error && <p>{error}</p>}

                <button type="submit" className="boton">Log in</button>

                <p> Don't you have an account? <a href='register' >Register here. </a></p>
            </form>


        </div>
        </>
    );
};



export default Login;
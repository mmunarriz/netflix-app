import '../login.css'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

// Logout de usuarios
export function Logout() {
    const { logout, user } = useAuth();
    const navigate = useNavigate();

    console.log(user);
    const handleSubmit = async () => {
        try {
            await logout();
            navigate('/')
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className='contenedor'>
            <h1 className='titulo'>Log out</h1>

            <form onSubmit={handleSubmit}>

                <p>User: {user.displayName || user.email}</p>

                <button type="submit" className="boton">Logout</button>

            </form>

        </div>
    );
};

export default Logout;
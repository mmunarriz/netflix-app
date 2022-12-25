import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

// Funcion que protege el acceso a las rutas.
// Si el usuario no esta logueado solo accede a las rutas "/login", "/register"

export function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <h1>Loading</h1>;

    if (!user) return <Navigate to="/login" />;

    return <>{children}</>;
}

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRole }) {
    const currentUser = JSON.parse(localStorage.getItem('clinicUser'));

    
    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }

   
    if (allowedRole === 'Doctor' && currentUser.role !== 'Doctor' && currentUser.role !== 'Admin') {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}
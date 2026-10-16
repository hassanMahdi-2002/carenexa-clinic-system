import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('clinicUser'));
        setUser(currentUser);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('clinicUser');
        setUser(null);
        navigate('/login');
    };

    const isDoctorOrAdmin = user && (user.role === 'Doctor' || user.role === 'Admin');

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
            <div className="container">
           
                <Link className="navbar-brand fw-bold fs-4 text-success d-flex align-items-center gap-2" to="/home">
                    <i className="fa-solid fa-hospital-user fa-lg"></i> CareNexa
                </Link>

                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navContent">
                  
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold px-3" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-semibold px-3" to="/doctors">Doctors</Link>
                        </li>

                        
                        {user && !isDoctorOrAdmin && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold px-3" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold px-3" to="/my-appointments">My Appointments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold px-3" to="/medical-records">Medical Records</Link>
                                </li>
                            </>
                        )}

                      
                        {user && isDoctorOrAdmin && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold px-3 text-danger" to="/doctor-dashboard">
                                        <i className="fa-solid fa-user-md me-1"></i>Doctor Portal
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold px-3" to="/medical-records">Manage Records</Link>
                                </li>
                            </>
                        )}
                    </ul>

                    <div className="d-flex align-items-center gap-2">
                        {user ? (
                            <div className="dropdown">
                                <button className="btn btn-outline-success rounded-pill px-4 dropdown-toggle fw-semibold d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown">
                                    <i className="fa-solid fa-circle-user fa-lg"></i>
                                    {user.fullName || user.name || 'Account'}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end shadow-sm border-0 rounded-3 mt-2">
                                    <li>
                                        <Link className="dropdown-item py-2" to="/profile">
                                            <i className="fa-regular fa-user me-2 text-success"></i>Profile
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <button className="dropdown-item py-2 text-danger" onClick={handleLogout}>
                                            <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-success rounded-pill px-4 fw-semibold">Login</Link>
                                <Link to="/register" className="btn btn-success rounded-pill px-4 fw-semibold">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
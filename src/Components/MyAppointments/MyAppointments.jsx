import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyAppointments() {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

   
    useEffect(() => {
        const savedAppointments = JSON.parse(localStorage.getItem('myAppointments')) || [];
        setAppointments(savedAppointments);
    }, []);

    
    const handleCancel = (id) => {
        const updatedAppointments = appointments.filter(app => app.id !== id);
        setAppointments(updatedAppointments);
        localStorage.setItem('myAppointments', JSON.stringify(updatedAppointments));
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="fw-bold mb-1">My Appointments</h2>
                    <p className="text-muted small">Manage and track your scheduled clinic visits.</p>
                </div>
                <button onClick={() => navigate('/doctors')} className="btn btn-success rounded-pill px-4">
                    <i className="fa-solid fa-plus me-2"></i>Book New Appointment
                </button>
            </div>

        
            <ul className="nav nav-pills mb-4 gap-2">
                <li className="nav-item">
                    <button className="nav-link active bg-success text-white rounded-pill px-4">Upcoming ({appointments.length})</button>
                </li>
            </ul>

        
            {appointments.length === 0 ? (
                <div className="text-center py-5 bg-light rounded-4">
                    <i className="fa-regular fa-calendar-xmark fa-3x text-muted mb-3"></i>
                    <h4 className="fw-bold">No appointments found</h4>
                    <p className="text-muted">You haven't booked any appointments yet. Go to doctors and book your first visit!</p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-3">
                    {appointments.map((app) => (
                        <div key={app.id} className="card border-0 shadow-sm rounded-4 p-4">
                            <div className="row align-items-center g-3">
                        
                                <div className="col-md-5 d-flex align-items-center gap-3">
                                    <img src={app.image} alt={app.doctorName} className="rounded-circle object-fit-cover shadow-sm" style={{ width: '65px', height: '65px' }} />
                                    <div>
                                        <h5 className="fw-bold mb-1">{app.doctorName}</h5>
                                        <p className="text-success small fw-semibold mb-0">{app.specialty}</p>
                                    </div>
                                </div>

                           
                                <div className="col-md-3">
                                    <span className="text-muted small d-block">Appointment Time</span>
                                    <strong className="text-dark"><i className="fa-regular fa-calendar-days me-1 text-success"></i>{app.date} - {app.time}</strong>
                                </div>

                              
                                <div className="col-md-2">
                                    <span className="badge px-3 py-2 rounded-pill bg-success-subtle text-success">
                                        {app.status}
                                    </span>
                                </div>

                           
                                <div className="col-md-2 text-md-end d-flex gap-2 justify-content-md-end">
                                    <button onClick={() => handleCancel(app.id)} className="btn btn-outline-danger btn-sm rounded-pill px-3">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
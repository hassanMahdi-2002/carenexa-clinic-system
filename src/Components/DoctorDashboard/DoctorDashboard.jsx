import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DoctorDashboard() {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState({});
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('clinicUser')) || {};
        setCurrentUser(user);

        const allAppointments = JSON.parse(localStorage.getItem('myAppointments')) || [];
        setAppointments(allAppointments);
    }, []);

    const handleStatusChange = (id, newStatus) => {
        const updated = appointments.map(app => {
            if (app.id === id) {
                return { ...app, status: newStatus };
            }
            return app;
        });
        setAppointments(updated);
        localStorage.setItem('myAppointments', JSON.stringify(updated));
    };

    const totalAppointments = appointments.length;
    const confirmedCount = appointments.filter(a => a.status === 'Confirmed').length;
    const completedCount = appointments.filter(a => a.status === 'Completed').length;

    return (
        <div className="container py-5">
       
            <div className="bg-dark text-white rounded-4 p-4 p-md-5 mb-4 shadow-sm position-relative overflow-hidden">
                <div className="row align-items-center position-relative z-1">
                    <div className="col-md-8">
                        <span className="badge bg-danger text-white rounded-pill px-3 py-2 fw-semibold mb-2">Doctor / Admin Portal</span>
                        <h2 className="fw-bold display-6 mb-2">
                            Welcome, {currentUser.fullName || currentUser.name || 'Dr. Doctor'}! 🩺
                        </h2>
                        <p className="text-white-50 mb-0">
                            Manage clinic appointments, track patient schedules, and oversee medical records efficiently.
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <button onClick={() => navigate('/medical-records')} className="btn btn-danger btn-lg rounded-pill px-4 shadow-sm fw-bold">
                            <i className="fa-solid fa-notes-medical me-2"></i>Patient Records
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
                        <div className="rounded-circle bg-danger bg-opacity-10 text-danger p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            <i className="fa-solid fa-calendar-days fa-xl"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0">{totalAppointments}</h3>
                            <span className="text-muted small">Total Appointments</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
                        <div className="rounded-circle bg-success bg-opacity-10 text-success p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            <i className="fa-solid fa-circle-check fa-xl"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0">{confirmedCount}</h3>
                            <span className="text-muted small">Confirmed Visits</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 text-primary p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            <i className="fa-solid fa-user-clock fa-xl"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0">{completedCount}</h3>
                            <span className="text-muted small">Completed Visits</span>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="card border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold mb-0"><i className="fa-solid fa-list-check me-2 text-danger"></i>Clinic Appointments Schedule</h4>
                    <span className="text-muted small">Showing all patient bookings</span>
                </div>

                {appointments.length === 0 ? (
                    <div className="text-center py-5 bg-light rounded-4">
                        <i className="fa-regular fa-calendar-xmark fa-3x text-muted mb-3"></i>
                        <h4 className="fw-bold">No Appointments Booked Yet</h4>
                        <p className="text-muted">Patients haven't scheduled any visits with the clinic yet.</p>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light text-uppercase small fw-bold">
                                <tr>
                                    <th className="py-3 rounded-start">Doctor / Patient Details</th>
                                    <th className="py-3">Date & Time</th>
                                    <th className="py-3">Specialty</th>
                                    <th className="py-3">Status</th>
                                    <th className="py-3 rounded-end text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((app) => (
                                    <tr key={app.id}>
                                        <td className="py-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img src={app.image} alt={app.doctorName} className="rounded-circle object-fit-cover shadow-sm" style={{ width: '45px', height: '45px' }} />
                                                <div>
                                                    <h6 className="fw-bold mb-0">{app.doctorName}</h6>
                                                    <span className="text-muted small">Clinic Visit</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <strong className="text-dark small"><i className="fa-regular fa-calendar me-1 text-danger"></i>{app.date}</strong>
                                            <span className="text-muted small d-block"><i className="fa-regular fa-clock me-1"></i>{app.time}</span>
                                        </td>
                                        <td className="py-3">
                                            <span className="badge bg-light text-dark border">{app.specialty}</span>
                                        </td>
                                        <td className="py-3">
                                            <span className={`badge px-3 py-2 rounded-pill ${
                                                app.status === 'Confirmed' ? 'bg-success-subtle text-success' :
                                                app.status === 'Completed' ? 'bg-primary-subtle text-primary' :
                                                'bg-warning-subtle text-warning'
                                            }`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="py-3 text-end">
                                            <div className="dropdown">
                                                <button className="btn btn-sm btn-light border rounded-pill px-3 dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                                    Change Status
                                                </button>
                                                <ul className="dropdown-menu shadow-sm border-0 rounded-3">
                                                    <li><button className="dropdown-item small text-success" onClick={() => handleStatusChange(app.id, 'Confirmed')}><i className="fa-solid fa-check me-2"></i>Confirm</button></li>
                                                    <li><button className="dropdown-item small text-primary" onClick={() => handleStatusChange(app.id, 'Completed')}><i className="fa-solid fa-circle-check me-2"></i>Complete</button></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><button className="dropdown-item small text-danger" onClick={() => handleStatusChange(app.id, 'Cancelled')}><i className="fa-solid fa-xmark me-2"></i>Cancel</button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
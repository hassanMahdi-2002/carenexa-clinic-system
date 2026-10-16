import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PatientDashboard() {
    const navigate = useNavigate();

   
    const [currentUser, setCurrentUser] = useState({});
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    const [recordsCount, setRecordsCount] = useState(0);

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem('clinicUser')) || {};
        setCurrentUser(user);

       
        const appointments = JSON.parse(localStorage.getItem('myAppointments')) || [];
        setUpcomingAppointments(appointments);

        const userKey = `medicalRecords_${user.email || user.phone || 'patient'}`;
        const savedRecords = JSON.parse(localStorage.getItem(userKey)) || [];
        setRecordsCount(savedRecords.length);
    }, []);

    const nextAppointment = upcomingAppointments.length > 0 ? upcomingAppointments[0] : null;

    return (
        <div className="container py-5">
          
            <div className="bg-success text-white rounded-4 p-4 p-md-5 mb-4 shadow-sm position-relative overflow-hidden">
                <div className="row align-items-center position-relative z-1">
                    <div className="col-md-8">
                        <span className="badge bg-white text-success rounded-pill px-3 py-2 fw-semibold mb-2">Patient Dashboard</span>
                        <h2 className="fw-bold display-6 mb-2">
                            Welcome back, {currentUser.fullName || currentUser.name || 'Patient'}! 👋
                        </h2>
                        <p className="text-white-50 mb-0">
                            Manage your appointments, check your medical history, and stay on top of your health journey with CareNexa.
                        </p>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <button onClick={() => navigate('/doctors')} className="btn btn-light text-success btn-lg rounded-pill px-4 shadow-sm fw-bold">
                            <i className="fa-solid fa-calendar-plus me-2"></i>Book Doctor
                        </button>
                    </div>
                </div>
            </div>

       
            <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
                        <div className="rounded-circle bg-success bg-opacity-10 text-success p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            <i className="fa-regular fa-calendar-check fa-xl"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0">{upcomingAppointments.length}</h3>
                            <span className="text-muted small">Upcoming Appointments</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
                        <div className="rounded-circle bg-primary bg-opacity-10 text-primary p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            <i className="fa-solid fa-file-medical fa-xl"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0">{recordsCount}</h3>
                            <span className="text-muted small">Medical Records</span>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-row align-items-center gap-3">
                        <div className="rounded-circle bg-warning bg-opacity-10 text-warning p-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                            <i className="fa-solid fa-user-check fa-xl"></i>
                        </div>
                        <div>
                            <h3 className="fw-bold mb-0">Active</h3>
                            <span className="text-muted small">Account Status</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                
                <div className="col-lg-7">
                    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="fw-bold mb-0"><i className="fa-regular fa-clock me-2 text-success"></i>Next Appointment</h4>
                            <button onClick={() => navigate('/my-appointments')} className="btn btn-link text-success p-0 text-decoration-none fw-semibold small">
                                View All ({upcomingAppointments.length})
                            </button>
                        </div>

                        {nextAppointment ? (
                            <div className="bg-light rounded-4 p-3 d-flex align-items-center gap-3 border">
                                <img 
                                    src={nextAppointment.image} 
                                    alt={nextAppointment.doctorName} 
                                    className="rounded-circle object-fit-cover shadow-sm" 
                                    style={{ width: '70px', height: '70px' }} 
                                />
                                <div className="flex-grow-1">
                                    <h5 className="fw-bold mb-1">{nextAppointment.doctorName}</h5>
                                    <p className="text-success small fw-semibold mb-1">{nextAppointment.specialty}</p>
                                    <p className="text-muted small mb-0">
                                        <i className="fa-regular fa-calendar-days me-1"></i>{nextAppointment.date} | <i className="fa-regular fa-clock me-1"></i>{nextAppointment.time}
                                    </p>
                                </div>
                                <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2">
                                    {nextAppointment.status}
                                </span>
                            </div>
                        ) : (
                            <div className="text-center py-4 bg-light rounded-4 border-dashed">
                                <i className="fa-regular fa-calendar-xmark fa-2x text-muted mb-2"></i>
                                <p className="text-muted small mb-3">You don't have any upcoming appointments scheduled.</p>
                                <button onClick={() => navigate('/doctors')} className="btn btn-sm btn-success rounded-pill px-4">
                                    Book Now
                                </button>
                            </div>
                        )}
                    </div>
                </div>

               
                <div className="col-lg-5">
                    <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                        <h4 className="fw-bold mb-3"><i className="fa-solid fa-bolt me-2 text-success"></i>Quick Shortcuts</h4>
                        <div className="d-flex flex-column gap-2">
                            <button onClick={() => navigate('/profile')} className="btn btn-outline-secondary text-start p-3 rounded-3 border-0 bg-light d-flex justify-content-between align-items-center">
                                <span><i className="fa-solid fa-user-pen me-2 text-success"></i>Edit Profile Details</span>
                                <i className="fa-solid fa-chevron-right text-muted small"></i>
                            </button>
                            <button onClick={() => navigate('/my-appointments')} className="btn btn-outline-secondary text-start p-3 rounded-3 border-0 bg-light d-flex justify-content-between align-items-center">
                                <span><i className="fa-solid fa-calendar-check me-2 text-success"></i>Manage Appointments</span>
                                <i className="fa-solid fa-chevron-right text-muted small"></i>
                            </button>
                            <button onClick={() => navigate('/medical-records')} className="btn btn-outline-secondary text-start p-3 rounded-3 border-0 bg-light d-flex justify-content-between align-items-center">
                                <span><i className="fa-solid fa-notes-medical me-2 text-success"></i>View Medical History</span>
                                <i className="fa-solid fa-chevron-right text-muted small"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
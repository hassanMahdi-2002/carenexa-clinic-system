import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctorsList } from '../../data/DoctorsData';

export default function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();

    
    const doctor = doctorsList.find((doc) => doc.id === parseInt(id));

    
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isConfirmed, setIsConfirmed] = useState(false);

    if (!doctor) {
        return <div className="text-center py-5"><h2>Doctor not found!</h2></div>;
    }

    const handleBookingConfirm = (e) => {
        e.preventDefault();
        if (!selectedDay) {
            alert("Please select a working day first!");
            return;
        }
        if (!selectedSlot) {
            alert("Please select a time slot first!");
            return;
        }

        const newAppointment = {
            id: Date.now(),
            doctorName: doctor.name,
            specialty: doctor.specialty,
            image: doctor.image,
            date: selectedDay,
            time: selectedSlot,
            status: "Confirmed"
        };

    
        const existingAppointments = JSON.parse(localStorage.getItem('myAppointments')) || [];

        
        localStorage.setItem('myAppointments', JSON.stringify([...existingAppointments, newAppointment]));

        setIsConfirmed(true);
    };

    return (
        <div className="container py-5">
           
            <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-4 rounded-pill px-4">
                <i className="fa-solid fa-arrow-left me-2"></i>Back
            </button>

            <h2 className="fw-bold mb-4">Book Appointment</h2>

           
            <div className="card border-0 shadow-sm rounded-4 p-3 mb-4 bg-light">
                <div className="d-flex align-items-center gap-3">
                    <img src={doctor.image} alt={doctor.name} className="rounded-circle object-fit-cover" style={{ width: '70px', height: '70px' }} />
                    <div>
                        <h4 className="fw-bold mb-1">{doctor.name}</h4>
                        <p className="text-success fw-semibold mb-1 small">{doctor.specialty}</p>
                        <p className="text-muted small mb-0"><i className="fa-solid fa-location-dot me-1"></i>{doctor.location} | <strong className="text-dark">{doctor.price} / visit</strong></p>
                    </div>
                </div>
            </div>

            {isConfirmed ? (
                
                <div className="alert alert-success text-center py-5 rounded-4 shadow-sm">
                    <i className="fa-solid fa-circle-check display-4 text-success mb-3"></i>
                    <h3 className="fw-bold">Appointment Confirmed Successfully!</h3>
                    <p className="text-muted">Your session with {doctor.name} is booked on {selectedDay} at {selectedSlot}.</p>
                    <button onClick={() => navigate('/my-appointments')} className="btn btn-success mt-3 rounded-pill px-5">View My Appointments</button>
                </div>
            ) : (
                
                <div className="row g-4">
                    
                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                            <h4 className="fw-bold mb-3"><i className="fa-regular fa-calendar me-2 text-success"></i>Available Working Days</h4>
                            <p className="text-muted small mb-3">Select one of the doctor's available clinic days:</p>
                            
                            <div className="d-flex flex-column gap-2">
                                {doctor.workingHours.map((wh, index) => (
                                    <button 
                                        key={index}
                                        type="button"
                                        onClick={() => {
                                            setSelectedDay(wh.day);
                                            setSelectedSlot(null);
                                        }}
                                        className={`btn text-start p-3 rounded-3 fw-semibold d-flex justify-content-between align-items-center ${selectedDay === wh.day ? 'btn-success text-white shadow' : 'btn-outline-secondary bg-light border-0 text-dark'}`}
                                    >
                                        <span><i className="fa-regular fa-calendar-days me-2"></i>{wh.day}</span>
                                        <span className="badge bg-white text-dark shadow-sm">{wh.time}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card border-0 shadow-sm rounded-4 p-4 h-100 d-flex flex-column justify-content-between">
                            <div>
                                <h4 className="fw-bold mb-3"><i className="fa-regular fa-clock me-2 text-success"></i>Available Time Slots</h4>
                                <p className="text-muted small mb-3">
                                    {selectedDay ? `Slots for ${selectedDay}:` : "Please select a working day first."}
                                </p>
                                
                                {selectedDay ? (
                                    <div className="row g-2">
                                        {["Morning Session (10:00 AM)", "Afternoon Session (02:00 PM)", "Evening Session (05:00 PM)"].map((slot, index) => (
                                            <div className="col-12" key={index}>
                                                <button 
                                                    type="button"
                                                    onClick={() => setSelectedSlot(slot)}
                                                    className={`btn w-100 py-3 rounded-3 fw-semibold ${selectedSlot === slot ? 'btn-success text-white shadow' : 'btn-outline-secondary bg-light border-0 text-dark'}`}
                                                >
                                                    {slot}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-5 text-muted bg-light rounded-3">
                                        <i className="fa-solid fa-hand-pointer fa-2x mb-2"></i>
                                        <p className="small mb-0">Choose a day from the left to view available times.</p>
                                    </div>
                                )}
                            </div>

                            <button 
                                onClick={handleBookingConfirm} 
                                className="btn btn-success btn-lg w-100 rounded-pill mt-4 shadow-sm py-3 fw-bold"
                            >
                                Confirm Appointment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
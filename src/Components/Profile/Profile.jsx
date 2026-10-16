import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const navigate = useNavigate();

  
    const [userProfile, setUserProfile] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        gender: 'Male'
    });

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const registeredUser = JSON.parse(localStorage.getItem('clinicUser'));

        if (registeredUser) {
            setUserProfile({
                fullName: registeredUser.fullName || registeredUser.name || registeredUser.userName || '',
                email: registeredUser.email || '',
                phone: registeredUser.phone || '',
                dob: registeredUser.dob || '',
                gender: registeredUser.gender || 'Male'
            });
        }
    }, []);

    const handleChange = (e) => {
        setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        
        const existingUser = JSON.parse(localStorage.getItem('clinicUser')) || {};
        const updatedUser = { ...existingUser, ...userProfile };

    
        localStorage.setItem('clinicUser', JSON.stringify(updatedUser));
        
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000); 
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="fw-bold mb-0">Patient Profile</h2>
                        <button onClick={() => navigate(-1)} className="btn btn-outline-secondary rounded-pill px-4">
                            <i className="fa-solid fa-arrow-left me-2"></i>Back
                        </button>
                    </div>

                    {isSaved && (
                        <div className="alert alert-success rounded-3 shadow-sm mb-4">
                            <i className="fa-solid fa-circle-check me-2"></i>Profile updated successfully!
                        </div>
                    )}

                    <div className="card border-0 shadow-sm rounded-4 p-4">
                 
                        <div className="text-center mb-4">
                            <div className="position-relative d-inline-block">
                                <div className="rounded-circle bg-success bg-opacity-10 text-success d-flex align-items-center justify-content-center shadow-sm" style={{ width: '110px', height: '110px' }}>
                                    <i className="fa-solid fa-user fa-3x"></i>
                                </div>
                                <button className="btn btn-sm btn-success rounded-circle position-absolute bottom-0 end-0 p-2 shadow">
                                    <i className="fa-solid fa-camera"></i>
                                </button>
                            </div>
                            <h4 className="fw-bold mt-3 mb-0">{userProfile.fullName || "Patient Account"}</h4>
                            <span className="text-muted small">{userProfile.email}</span>
                        </div>

                        <form onSubmit={handleSave}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label text-muted small fw-semibold">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName" 
                                        className="form-control form-control-lg rounded-3" 
                                        value={userProfile.fullName} 
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label text-muted small fw-semibold">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control form-control-lg rounded-3" 
                                        value={userProfile.email} 
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label text-muted small fw-semibold">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        className="form-control form-control-lg rounded-3" 
                                        value={userProfile.phone} 
                                        onChange={handleChange}
                                        placeholder="+20 100 000 0000"
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label text-muted small fw-semibold">Date of Birth</label>
                                    <input 
                                        type="date" 
                                        name="dob" 
                                        className="form-control form-control-lg rounded-3" 
                                        value={userProfile.dob} 
                                        onChange={handleChange} 
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label text-muted small fw-semibold">Gender</label>
                                    <select 
                                        name="gender" 
                                        className="form-select form-select-lg rounded-3" 
                                        value={userProfile.gender} 
                                        onChange={handleChange}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 pt-2">
                                <button type="submit" className="btn btn-success btn-lg rounded-pill px-5 shadow-sm fw-bold">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
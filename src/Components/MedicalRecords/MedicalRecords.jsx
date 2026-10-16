import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MedicalRecords() {
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem('clinicUser')) || {};
   
    const userRole = currentUser.role || 'Patient'; 
    const isDoctorOrAdmin = userRole === 'Doctor' || userRole === 'Admin';

    const userKey = `medicalRecords_${currentUser.email || currentUser.phone || 'patient'}`;

    
    const [records, setRecords] = useState([]);

    const [newRecord, setNewRecord] = useState({
        title: '',
        category: 'Lab Test',
        date: '',
        doctorName: currentUser.fullName || currentUser.name || 'Dr. Admin',
        notes: ''
    });

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const savedRecords = JSON.parse(localStorage.getItem(userKey)) || [];
        setRecords(savedRecords);
    }, [userKey]);

    const handleInputChange = (e) => {
        setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
    };

    const handleAddRecord = (e) => {
        e.preventDefault();
        if (!newRecord.title || !newRecord.date) {
            alert('Please fill in required fields!');
            return;
        }

        const recordToAdd = {
            ...newRecord,
            id: Date.now()
        };

        const updatedRecords = [recordToAdd, ...records];
        setRecords(updatedRecords);
        localStorage.setItem(userKey, JSON.stringify(updatedRecords));

        setNewRecord({
            title: '',
            category: 'Lab Test',
            date: '',
            doctorName: currentUser.fullName || currentUser.name || 'Dr. Admin',
            notes: ''
        });
        setShowModal(false);
    };


    const handleDeleteRecord = (id) => {
        if (!isDoctorOrAdmin) return;
        const updated = records.filter(rec => rec.id !== id);
        setRecords(updated);
        localStorage.setItem(userKey, JSON.stringify(updated));
    };

    return (
        <div className="container py-5">
        
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <h2 className="fw-bold mb-0">Medical Records & History</h2>
                        <span className={`badge ${isDoctorOrAdmin ? 'bg-danger-subtle text-danger' : 'bg-primary-subtle text-primary'} rounded-pill px-3`}>
                            {isDoctorOrAdmin ? `Portal: ${userRole}` : 'Patient View'}
                        </span>
                    </div>
                    <p className="text-muted small mb-0">
                        {isDoctorOrAdmin 
                            ? 'Admin/Doctor Portal: Add diagnoses, medical prescriptions, and lab results for patients.' 
                            : 'Patient Portal: View your medical history, prescriptions, and radiology reports.'}
                    </p>
                </div>
                <div className="d-flex gap-2">
                    <button onClick={() => navigate(-1)} className="btn btn-outline-secondary rounded-pill px-4">
                        <i className="fa-solid fa-arrow-left me-2"></i>Back
                    </button>
            
                    {isDoctorOrAdmin && (
                        <button onClick={() => setShowModal(true)} className="btn btn-danger rounded-pill px-4">
                            <i className="fa-solid fa-plus me-2"></i>Add Medical Entry
                        </button>
                    )}
                </div>
            </div>

            {records.length === 0 ? (
                <div className="text-center py-5 bg-light rounded-4 shadow-sm">
                    <i className="fa-solid fa-file-medical fa-3x text-muted mb-3"></i>
                    <h4 className="fw-bold">No Medical Records Available</h4>
                    <p className="text-muted">
                        {isDoctorOrAdmin 
                            ? 'No entries have been added for this patient yet. Click below to add one.' 
                            : 'Your medical history is clear. No prescriptions or reports added yet.'}
                    </p>
                    {isDoctorOrAdmin && (
                        <button onClick={() => setShowModal(true)} className="btn btn-outline-danger rounded-pill px-4 mt-2">
                            <i className="fa-solid fa-plus me-2"></i>Add First Prescription/Report
                        </button>
                    )}
                </div>
            ) : (
                <div className="row g-4">
                    {records.map((rec) => (
                        <div className="col-md-6 col-lg-4" key={rec.id}>
                            <div className="card border-0 shadow-sm rounded-4 h-100 p-3 d-flex flex-column justify-content-between">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className={`badge px-3 py-2 rounded-pill ${
                                            rec.category === 'Lab Test' ? 'bg-primary-subtle text-primary' :
                                            rec.category === 'Radiology' ? 'bg-warning-subtle text-dark' :
                                            'bg-success-subtle text-success'
                                        }`}>
                                            <i className="fa-solid fa-notes-medical me-1"></i>{rec.category}
                                        </span>
                                        
                                        {isDoctorOrAdmin && (
                                            <button 
                                                onClick={() => handleDeleteRecord(rec.id)} 
                                                className="btn btn-link text-danger p-0 border-0 shadow-none"
                                                title="Delete Entry"
                                            >
                                                <i className="fa-regular fa-trash-can"></i>
                                            </button>
                                        )}
                                    </div>

                                    <h5 className="fw-bold mb-2">{rec.title}</h5>
                                    
                                    <p className="text-muted small mb-1">
                                        <i className="fa-regular fa-calendar me-2 text-success"></i>
                                        <strong>Date:</strong> {rec.date}
                                    </p>
                                    <p className="text-muted small mb-2">
                                        <i className="fa-solid fa-user-doctor me-2 text-success"></i>
                                        <strong>Attending Doctor:</strong> {rec.doctorName}
                                    </p>
                                    {rec.notes && (
                                        <div className="bg-light p-2 rounded-3 small text-secondary mt-2">
                                            <i className="fa-solid fa-quote-left me-1 opacity-50"></i>{rec.notes}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-3 pt-2 border-top text-end">
                                    <button className="btn btn-sm btn-outline-success rounded-pill px-3">
                                        <i className="fa-solid fa-download me-1"></i>Download Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && isDoctorOrAdmin && (
                <div className="modal show d-block tab-index='-1'" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content rounded-4 border-0 p-3">
                            <div className="modal-header border-0">
                                <h5 className="modal-title fw-bold text-danger"><i className="fa-solid fa-user-md me-2"></i>Add Diagnosis / Prescription</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleAddRecord}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label text-muted small fw-semibold">Diagnosis / Title *</label>
                                        <input 
                                            type="text" 
                                            name="title" 
                                            className="form-control rounded-3" 
                                            placeholder="e.g. Dental Checkup & Cleaning, Antibiotics Prescription"
                                            value={newRecord.title} 
                                            onChange={handleInputChange} 
                                            required 
                                        />
                                    </div>
                                    <div className="row g-2 mb-3">
                                        <div className="col-md-6">
                                            <label className="form-label text-muted small fw-semibold">Category</label>
                                            <select 
                                                name="category" 
                                                className="form-select rounded-3"
                                                value={newRecord.category} 
                                                onChange={handleInputChange}
                                            >
                                                <option value="Prescription">Prescription / روشتة</option>
                                                <option value="Lab Test">Lab Test / تحاليل</option>
                                                <option value="Radiology">Radiology / أشعة</option>
                                                <option value="Other">General Diagnosis</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-muted small fw-semibold">Date *</label>
                                            <input 
                                                type="date" 
                                                name="date" 
                                                className="form-control rounded-3" 
                                                value={newRecord.date} 
                                                onChange={handleInputChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-muted small fw-semibold">Doctor Name</label>
                                        <input 
                                            type="text" 
                                            name="doctorName" 
                                            className="form-control rounded-3" 
                                            value={newRecord.doctorName} 
                                            onChange={handleInputChange} 
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-muted small fw-semibold">Prescription / Clinical Notes</label>
                                        <textarea 
                                            name="notes" 
                                            className="form-control rounded-3" 
                                            rows="3" 
                                            placeholder="Write medication details, dosage, or medical recommendations..."
                                            value={newRecord.notes} 
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-light rounded-pill px-4" onClick={() => setShowModal(false)}>Cancel</button>
                                    <button type="submit" className="btn btn-danger rounded-pill px-4">Save Entry</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
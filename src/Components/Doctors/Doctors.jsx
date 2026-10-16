import { Link } from 'react-router-dom';
import {doctorsList} from '../../data/DoctorsData'
import './Doctors.css';
export default function Doctors(){
    
    return <>
    <div className="py-4 text-center">
        <h2 className="fw-bold">Our Featured <span className="text-success">Doctors</span></h2>
        <p className="text-muted">Choose from our top specialists and book your session instantly.</p>
    </div>
    
    <div className="container pb-5">
        <div className="row g-4">
            {doctorsList.map((doctor) => (
                <div className="col-md-4 col-sm-6" key={doctor.id}>

                
                    <Link to={`/doctordetails/${doctor.id}`} className='text-decoration-none text-dark'>
                    
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden doctors-card">
                            <div className="position-relative" style={{ height: '260px' }}>
                                <img src={doctor.image} className='w-100 h-100 object-fit-cover' alt={doctor.name} />
                                <i className="fa-regular fa-heart position-absolute text-danger bg-white p-2 d-flex align-items-center justify-content-center rounded-circle shadow-sm" style={{ right: '15px', top: '15px',width: '40px', height: '40px', cursor: 'pointer' }}></i>
                                <span className="badge bg-success position-absolute bottom-0 start-0 m-3 px-3 py-2">{doctor.price} / Visit</span>
                            </div>
                            <div className="card-body text-center p-4 d-flex flex-column justify-content-between">
                                <div>
                                    <h4 className="fw-bold fs-5 mb-1">{doctor.name}</h4>
                                    <p className="text-success fw-semibold small mb-2">{doctor.specialty}</p>
                                    <p className="text-muted small mb-3"><i className="fa-regular fa-clock me-1"></i>{doctor.experience}</p>
                                </div>
                                <button className="btn btn-outline-success w-100 rounded-pill py-2 fw-semibold">Book Now</button>
                            </div>
                        </div>

                    </Link>

                    
                </div>
            ))}
        </div>
    </div>
    </>
}
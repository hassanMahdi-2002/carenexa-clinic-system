import { useParams, useNavigate } from 'react-router-dom';
import { doctorsList } from '../../data/DoctorsData';

export default function DoctorDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const doctor = doctorsList.find((doc) => doc.id === parseInt(id));
    if (!doctor) {
        return <div className="text-center py-5"><h2>Doctor not found!</h2></div>;
    }

    return (
        <div className="container py-5">
            <div className="row g-4 align-items-center">
                <div className="col-md-4">
                    <img src={doctor.image} className='w-100 rounded-4 shadow-sm object-fit-cover' style={{ height: '350px' }} alt={doctor.name} />
                </div>

                <div className="col-md-7 offset-1">
                    <h3 className="fw-bold mb-1">{doctor.name}</h3>
                    <span className="text-success fw-semibold fs-5 d-block mb-3">{doctor.specialty}</span>
                    
                    <div className="d-flex flex-wrap gap-4 mb-3 text-muted">
                        <div><i className="fa-regular fa-clock me-1 text-success"></i>{doctor.experience}</div>
                        <div><i className="fa-solid fa-location-dot me-1 text-danger"></i>{doctor.location}</div>
                        <div><i className="fa-solid fa-comment-dollar me-1 text-primary"></i>{doctor.price} / Visit</div>
                    </div>

                    <p className="text-muted mb-4">{doctor.about}</p>

                    <div className="d-flex flex-wrap gap-3">
                        <button 
                            onClick={() => navigate(`/booking/${doctor.id}`)} 
                            className="btn btn-success rounded-4 btn-lg px-4 py-2">
                            <i className="fa-regular fa-calendar-days me-2"></i>Book Appointment
                        </button>
                        <button className="btn btn-outline-dark rounded-4 btn-lg px-4 py-2">
                            <i className="fa-regular fa-message me-2"></i>Message
                        </button>
                    </div>
                </div>
            </div>

           
            <div className="row pt-5">
                <ul className="nav nav-tabs d-flex justify-content-center border-0 mb-4" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active fw-bold text-success px-4" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane" type="button" role="tab" aria-controls="about-tab-pane" aria-selected="true">About</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link fw-bold text-success px-4" id="specialty-tab" data-bs-toggle="tab" data-bs-target="#specialty-tab-pane" type="button" role="tab" aria-controls="specialty-tab-pane" aria-selected="false">Specialty</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link fw-bold text-success px-4" id="review-tab" data-bs-toggle="tab" data-bs-target="#review-tab-pane" type="button" role="tab" aria-controls="review-tab-pane" aria-selected="false">Reviews</button>
                    </li>
                </ul>

                <div className="tab-content card border-0 shadow-sm p-4 rounded-4" id="myTabContent">
                    
                    <div className="tab-pane fade show active" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabIndex="0">
                        <h4 className="fw-bold mb-3">About Doctor</h4>
                        <p className="text-muted mb-4">{doctor.about}</p>
                        
                        <h4 className="fw-bold mb-3">Working Hours</h4>
                        <ul className="list-group list-group-flush">
                            
                            {doctor.workingHours.map((wh, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between py-3">
                                    <span className="fw-semibold">{wh.day}</span>
                                    <span className="text-muted">{wh.time}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

          
                    <div className="tab-pane fade" id="specialty-tab-pane" role="tabpanel" aria-labelledby="specialty-tab" tabIndex="0">
                        <h4 className="fw-bold mb-3">Specialization Details</h4>
                        <p className="text-muted">Expert in {doctor.specialty} with extensive background and practice in providing professional medical care, diagnosis, and treatment.</p>
                    </div>

            
                    <div className="tab-pane fade" id="review-tab-pane" role="tabpanel" aria-labelledby="review-tab" tabIndex="0">
                        <h4 className="fw-bold mb-3">Patient Reviews</h4>
                        <p className="text-muted">No reviews yet for this doctor. Be the first to book and leave a review!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
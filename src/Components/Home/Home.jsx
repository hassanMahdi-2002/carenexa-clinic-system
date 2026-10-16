import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();

    return (
        <section className="container py-4">
            <div className="backgroundItem rounded-4 shadow-lg d-flex align-items-center position-relative overflow-hidden">
                <div className="hero-overlay"></div>
                <div className="contant p-4 p-md-5 position-relative z-1 text-white w-100">
                    <span className="badge bg-success bg-opacity-75 px-3 py-2 mb-3 fs-6">Certified Medical Care</span>
                    <h2 className="home fw-bold display-5">Your Health <br/><span className='text-success'>Our Priority</span></h2>
                    <p className='w-100 w-md-75 lead my-3 text-light'>Book your appointment easily and get the best care from trusted doctors with zero hassle.</p>
                    
                    <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
                        <button onClick={() => navigate('/doctors')} className="btn btn-success btn-lg px-4 shadow rounded-pill">
                            Book Appointment
                        </button>
                        <button onClick={() => navigate('/dashboard')} className="btn btn-outline-light btn-lg px-4 rounded-pill">
                            Dashboard
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="row py-5 px-2 g-4 justify-content-center">
                <div className="col-md-3 col-sm-6">
                    <div className="feature-card p-4 rounded-4 shadow-sm text-center h-100 bg-white border-0">
                        <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success" style={{width: '70px', height: '70px'}}>
                            <i className="fa-solid fa-user-doctor fa-2x"></i>
                        </div>
                        <h4 className='h5 fw-bold mb-2'>Experienced Doctors</h4>
                        <p className='text-muted small mb-0'>High quality experience and professional care.</p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="feature-card p-4 rounded-4 shadow-sm text-center h-100 bg-white border-0">
                        <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success" style={{width: '70px', height: '70px'}}>
                            <i className="fa-regular fa-calendar-days fa-2x"></i>
                        </div>
                        <h4 className='h5 fw-bold mb-2'>Easy Booking</h4>
                        <p className='text-muted small mb-0'>Book and schedule your appointment easily.</p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="feature-card p-4 rounded-4 shadow-sm text-center h-100 bg-white border-0">
                        <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success" style={{width: '70px', height: '70px'}}>
                            <i className="fa-solid fa-shield-heart fa-2x"></i>
                        </div>
                        <h4 className='h5 fw-bold mb-2'>Secure & Private</h4>
                        <p className='text-muted small mb-0'>Secure medical records and consultation.</p>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6">
                    <div className="feature-card p-4 rounded-4 shadow-sm text-center h-100 bg-white border-0">
                        <div className="icon-box mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success bg-opacity-10 text-success" style={{width: '70px', height: '70px'}}>
                            <i className="fa-solid fa-headset fa-2x"></i>
                        </div>
                        <h4 className='h5 fw-bold mb-2'>24/7 Support</h4>
                        <p className='text-muted small mb-0'>Receive assistance for any question anytime.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
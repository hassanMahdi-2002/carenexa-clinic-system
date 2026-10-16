import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            
            <main className="flex-grow-1">
                <Outlet />
            </main>

           
            <footer className="bg-dark text-white pt-4 pb-3 mt-auto">
                <div className="container text-center text-md-start">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <h5 className="fw-bold text-success mb-1">CareNexa Health</h5>
                            <p className="text-white-50 small mb-0">Providing seamless clinic management and medical bookings.</p>
                        </div>
                        <div className="col-md-6 text-md-end text-white-50 small">
                            © {new Date().getFullYear()} CareNexa. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
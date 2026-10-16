import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const myNavigate = useNavigate();

    function handleLogin(values) {
       
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        
        const foundUser = registeredUsers.find(
            u => u.userEmail === values.userEmail && u.userPassword === values.userPassword
        );

        if (foundUser) {
         
            localStorage.setItem('clinicUser', JSON.stringify(foundUser));

            if (foundUser.role === 'Doctor' || foundUser.role === 'Admin') {
                myNavigate('/doctor-dashboard');
            } else {
                myNavigate('/dashboard');
            }
        } else {
            alert("Invalid Email or Password! Please check your credentials or Register first.");
        }
    }

    let users = {
        userEmail: '',
        userPassword: ''
    };

    const myFormik = useFormik({
        initialValues: users,
        onSubmit: handleLogin,
        validate: function (values) {
            let errors = {};

            if (!values.userEmail) {
                errors.userEmail = "Email is required.";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
                errors.userEmail = "Email Must be valid.";
            }

            if (!values.userPassword) {
                errors.userPassword = "Password is required.";
            }

            return errors;
        }
    });

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card border-0 shadow-lg rounded-4 p-4">
                        <div className="text-center mb-4">
                            <i className="fa-solid fa-right-to-bracket text-success fa-3x mb-2"></i>
                            <h3 className="fw-bold">Welcome Back</h3>
                            <p className="text-muted small">Login to access your CareNexa portal</p>
                        </div>

                        <form onSubmit={myFormik.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label text-muted small fw-semibold">Email Address</label>
                                <input
                                    className="form-control rounded-3"
                                    type="email"
                                    placeholder="name@example.com"
                                    name="userEmail"
                                    value={myFormik.values.userEmail}
                                    onChange={myFormik.handleChange}
                                    onBlur={myFormik.handleBlur}
                                />
                                {myFormik.errors.userEmail && myFormik.touched.userEmail && (
                                    <div className="text-danger small mt-1">{myFormik.errors.userEmail}</div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-muted small fw-semibold">Password</label>
                                <input
                                    className="form-control rounded-3"
                                    type="password"
                                    placeholder="••••••••"
                                    name="userPassword"
                                    value={myFormik.values.userPassword}
                                    onChange={myFormik.handleChange}
                                    onBlur={myFormik.handleBlur}
                                />
                                {myFormik.errors.userPassword && myFormik.touched.userPassword && (
                                    <div className="text-danger small mt-1">{myFormik.errors.userPassword}</div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-success btn-lg w-100 rounded-pill mt-3 shadow-sm fw-bold">
                                Login
                            </button>

                            <div className="text-center mt-3">
                                <span className="text-muted small">Don't have an account? </span>
                                <Link to="/register" className="text-success fw-bold text-decoration-none small">Register Now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
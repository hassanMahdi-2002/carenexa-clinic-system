import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
    const myNavigate = useNavigate();

    function handleRegister(values) {
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        
        const isEmailExist = existingUsers.some(u => u.userEmail === values.userEmail);
        if (isEmailExist) {
            alert("This Email is already registered! Please Login.");
            return;
        }

        
        existingUsers.push(values);
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
        
        
        localStorage.setItem('clinicUser', JSON.stringify(values));

        alert("Registration Successful!");
        myNavigate('/login');
    }

    let users = {
        userName: '',
        userEmail: '',
        userPhone: '',
        role: 'Patient', 
        userPassword: '',
        RePassword: ''
    };

    const myFormik = useFormik({
        initialValues: users,
        onSubmit: handleRegister,
        validate: function (values) {
            let errors = {};

            if (!values.userName) {
                errors.userName = "User Name is required.";
            } else if (values.userName.length < 3 || values.userName.length > 25) {
                errors.userName = "User Name Must contain from 3 to 25 Characters Only.";
            }

            if (!values.userEmail) {
                errors.userEmail = "Email is required.";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
                errors.userEmail = "Email Must be valid.";
            }

            if (!values.userPhone) {
                errors.userPhone = "Phone number is required.";
            } else if (!/^01[0125][0-9]{8}$/.test(values.userPhone)) {
                errors.userPhone = "Phone Must Be Egyptian Number.";
            }

            if (!values.userPassword) {
                errors.userPassword = "Password is required.";
            } else if (values.userPassword.length < 6 || values.userPassword.length > 12) {
                errors.userPassword = "Password Must be from 6 to 12 Characters Only.";
            }

            if (!values.RePassword) {
                errors.RePassword = "Confirm Password is required.";
            } else if (values.userPassword !== values.RePassword) {
                errors.RePassword = "Password and RePassword not Matched.";
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
                            <i className="fa-solid fa-hospital-user text-success fa-3x mb-2"></i>
                            <h3 className="fw-bold">Create CareNexa Account</h3>
                            <p className="text-muted small">Join us to manage your medical healthcare</p>
                        </div>

                        <form onSubmit={myFormik.handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label text-muted small fw-semibold">Full Name</label>
                                <input
                                    className="form-control rounded-3"
                                    type="text"
                                    placeholder="Enter your full name"
                                    name="userName"
                                    value={myFormik.values.userName}
                                    onChange={myFormik.handleChange}
                                    onBlur={myFormik.handleBlur}
                                />
                                {myFormik.errors.userName && myFormik.touched.userName && (
                                    <div className="text-danger small mt-1">{myFormik.errors.userName}</div>
                                )}
                            </div>

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
                                <label className="form-label text-muted small fw-semibold">Phone Number</label>
                                <input
                                    className="form-control rounded-3"
                                    type="tel"
                                    placeholder="01xxxxxxxxx"
                                    name="userPhone"
                                    value={myFormik.values.userPhone}
                                    onChange={myFormik.handleChange}
                                    onBlur={myFormik.handleBlur}
                                />
                                {myFormik.errors.userPhone && myFormik.touched.userPhone && (
                                    <div className="text-danger small mt-1">{myFormik.errors.userPhone}</div>
                                )}
                            </div>

                           
                            <div className="mb-3">
                                <label className="form-label text-muted small fw-semibold">Register As</label>
                                <select
                                    className="form-select rounded-3"
                                    name="role"
                                    value={myFormik.values.role}
                                    onChange={myFormik.handleChange}
                                >
                                    <option value="Patient">Patient / مريض</option>
                                    <option value="Doctor">Doctor / طبيب</option>
                                </select>
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

                            <div className="mb-3">
                                <label className="form-label text-muted small fw-semibold">Confirm Password</label>
                                <input
                                    className="form-control rounded-3"
                                    type="password"
                                    placeholder="••••••••"
                                    name="RePassword"
                                    value={myFormik.values.RePassword}
                                    onChange={myFormik.handleChange}
                                    onBlur={myFormik.handleBlur}
                                />
                                {myFormik.errors.RePassword && myFormik.touched.RePassword && (
                                    <div className="text-danger small mt-1">{myFormik.errors.RePassword}</div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-success btn-lg w-100 rounded-pill mt-3 shadow-sm fw-bold">
                                Register
                            </button>

                            <div className="text-center mt-3">
                                <span className="text-muted small">Already have an account? </span>
                                <Link to="/login" className="text-success fw-bold text-decoration-none small">Login Here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
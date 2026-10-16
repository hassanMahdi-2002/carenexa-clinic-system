# 🏥 CareNexa — Clinic Booking & Healthcare Management System

**CareNexa** is a comprehensive, production-ready Healthcare & Clinic Management System designed to bridge the gap between patients and doctors. Built with **React**, **Bootstrap 5**, **Formik**, and **React Router v6**, it features a robust role-based access architecture with seamless persistent data handling via `localStorage`.

---

## 🌟 Key Features

### 🔐 Authentication & Role-Based Access Control (RBAC)
- **Multi-Role Accounts:** Distinct portals and permissions tailored for **Patients** and **Doctors / Admins**.
- **Protected Routes:** Secure navigation preventing unauthorized access to sensitive dashboards and patient histories.
- **Persistent User Sessions:** Preserves active authentication states and multi-user registration records using `localStorage`.

### 🩺 Patient Experience & Dashboard
- **Doctor Directory & Filtering:** Browse verified doctors, filter by medical specialty, and view detailed profiles.
- **Interactive Appointment Booking:** Select flexible appointment dates/times with dynamic availability checking.
- **Patient Dashboard:** Centralized view displaying upcoming visits, quick action shortcuts, and status counters.
- **Personal Medical Records:** Read-only viewing of clinical diagnoses, prescriptions, and medical reports.

### 👨‍⚕️ Doctor / Admin Management Portal
- **Clinic Schedule Management:** Comprehensive dashboard to oversee all incoming appointments.
- **Status Control:** Update patient visit statuses in real-time (*Confirmed*, *Completed*, or *Cancelled*).
- **Medical Entry Manager:** Authority to add new clinical diagnoses, issue digital prescriptions, and record test results.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Framework:** React.js (Hooks, Functional Components)
- **Form Handling & Validation:** Formik
- **UI & Styling:** Bootstrap 5, FontAwesome 6 Icons
- **Routing:** React Router v6 (`createBrowserRouter`, `RouterProvider`, `ProtectedRoute`)
- **Data Persistence:** Browser `localStorage` (Structured JSON storage for Users, Appointments & Records)

---

## 📂 Project Architecture

```text
src/
├── Components/
│   ├── Booking/              # Appointment booking interface
│   ├── DoctorDashboard/      # Doctor / Admin management control
│   ├── DoctorDetails/        # Individual doctor detailed profile
│   ├── Doctors/              # Doctors catalog and specialty search
│   ├── Home/                 # Landing hero page & service features
│   ├── Layout/               # Shell layout with Navbar & Footer
│   ├── Login/                # User authentication page
│   ├── MedicalRecords/       # Patient clinical history & reports
│   ├── MyAppointments/       # Booked schedules list
│   ├── Navbar/               # Role-aware responsive navigation
│   ├── PatientDashboard/     # Patient overview dashboard
│   ├── Profile/              # Account details management
│   ├── ProtectedRoute/       # Route guard for RBAC
│   └── Register/             # Multi-role account registration
├── data/
│   └── DoctorsData.js        # Mock doctors dataset
├── App.jsx                   # Main Router setup
└── index.js                  # Entry point
```

## 🚀 Getting Started Locally
1. Clone the repository:
  git clone https://github.com/hassanMahdi-2002/carenexa-clinic-system.git
2. Navigate into the project directory:
  cd carenexa-clinic-system
3. Install dependencies:
   npm install
4. Start the development server:
   npm start
5. Open in browser:
   Open http://localhost:3000 to view the app.

## 👨‍💻 Author
Hassan Mahdi 
GitHub: @hassanMahdi-2002
Created with ❤️ for professional healthcare management.
   

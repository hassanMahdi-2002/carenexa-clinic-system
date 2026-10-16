<div align="center">

# 🏥 CareNexa

### Clinic Booking & Healthcare Management System

A production-ready platform that bridges the gap between patients and doctors, with role-based portals and persistent data handling.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-Forms-0A7EA4)
![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

[Live Demo](#) · [Report Bug](https://github.com/hassanMahdi-2002/carenexa-clinic-system/issues) · [Request Feature](https://github.com/hassanMahdi-2002/carenexa-clinic-system/issues)

</div>

---

## 📖 Overview

**CareNexa** is a Healthcare & Clinic Management System built with **React**, **Bootstrap 5**, **Formik**, and **React Router v6**. It provides separate experiences for **Patients** and **Doctors/Admins**, with a role-based access architecture and persistent data via `localStorage`.

---

## 📑 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Demo Credentials](#-demo-credentials)
- [Screenshots](#-screenshots)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌟 Key Features

### 🔐 Authentication & Role-Based Access Control (RBAC)
- **Multi-role accounts:** separate portals and permissions for **Patients** and **Doctors / Admins**.
- **Protected routes:** unauthorized users can't reach sensitive dashboards or patient histories.
- **Persistent sessions:** active login state and multi-user registrations are preserved via `localStorage`.

### 🩺 Patient Experience
- **Doctor directory & filtering:** browse doctors, filter by specialty, and view detailed profiles.
- **Interactive booking:** pick dates and times with dynamic availability checking.
- **Patient dashboard:** upcoming visits, quick-action shortcuts, and status counters.
- **Medical records:** read-only access to diagnoses, prescriptions, and reports.

### 👨‍⚕️ Doctor / Admin Portal
- **Schedule management:** one dashboard to oversee all incoming appointments.
- **Status control:** update visits in real time (*Confirmed*, *Completed*, *Cancelled*).
- **Medical entry manager:** add diagnoses, issue digital prescriptions, and record test results.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React.js (Hooks, Functional Components) |
| Forms & Validation | Formik |
| UI & Styling | Bootstrap 5, FontAwesome 6 |
| Routing | React Router v6 (`createBrowserRouter`, `RouterProvider`) |
| Persistence | Browser `localStorage` (JSON for Users, Appointments, Records) |

---

## 📂 Project Architecture

```text
src/
├── Components/
│   ├── Booking/              # Appointment booking interface
│   ├── DoctorDashboard/      # Doctor / Admin management control
│   ├── DoctorDetails/        # Individual doctor profile
│   ├── Doctors/              # Doctors catalog and specialty search
│   ├── Home/                 # Landing hero page & service features
│   ├── Layout/               # Shell layout with Navbar & Footer
│   ├── Login/                # Authentication page
│   ├── MedicalRecords/       # Patient clinical history & reports
│   ├── MyAppointments/       # Booked schedules list
│   ├── Navbar/               # Role-aware responsive navigation
│   ├── PatientDashboard/     # Patient overview dashboard
│   ├── Profile/              # Account details management
│   ├── ProtectedRoute/       # Route guard for RBAC
│   └── Register/             # Multi-role registration
├── data/
│   └── DoctorsData.js        # Mock doctors dataset
├── App.jsx                   # Main router setup
└── index.js                  # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/hassanMahdi-2002/carenexa-clinic-system.git

# 2. Navigate into the project
cd carenexa-clinic-system

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Demo Credentials

> Replace these with real values from your project, or register new accounts from the **Register** page.

| Role | Email | Password |
|---|---|---|
| Patient | `patient@example.com` | `123456` |
| Doctor / Admin | `doctor@example.com` | `123456` |

---

## 📸 Screenshots

| Home | Doctors Directory |
|:---:|:---:|
| ![Home](./screenshots/home.png) | ![Doctors](./screenshots/doctors.png) |

| Patient Dashboard | Doctor Dashboard |
|:---:|:---:|
| ![Patient](./screenshots/patient-dashboard.png) | ![Doctor](./screenshots/doctor-dashboard.png) |

---

## 🗺️ Roadmap

- [x] Role-based authentication
- [x] Doctor directory with specialty filter
- [x] Appointment booking & status management
- [x] Medical records (diagnoses, prescriptions, reports)
- [ ] Backend integration (Node.js / Express + MongoDB)
- [ ] JWT authentication with password hashing
- [ ] Email / SMS appointment reminders
- [ ] Multi-language support (EN / AR) with RTL
- [ ] Dark mode
- [ ] Online payments

> ⚠️ **Note:** this version stores data in `localStorage` and is intended for demo and learning purposes. Do not store real patient data or passwords this way in production.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Hassan Mahdi**
GitHub: [@hassanMahdi-2002](https://github.com/hassanMahdi-2002)

<div align="center">

Created with ❤️ for professional healthcare management.

⭐ If you like this project, give it a star!

</div>

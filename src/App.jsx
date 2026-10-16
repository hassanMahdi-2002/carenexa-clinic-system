import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Doctors from './Components/Doctors/Doctors';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import Booking from './Components/Booking/Booking';
import MyAppointments from './Components/MyAppointments/MyAppointments';
import Profile from './Components/Profile/Profile';
import MedicalRecords from './Components/MedicalRecords/MedicalRecords';
import PatientDashboard from './Components/PatientDashboard/PatientDashboard';
import DoctorDashboard from './Components/DoctorDashboard/DoctorDashboard';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'; 
function App() {
  const router = createBrowserRouter ([
    {
      path: '',
      element: <Layout/>, 
      children:[
        { index: true, element: <Home /> }, 
        { path: 'home', element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        
       
        { path: 'doctors', element: <ProtectedRoute><Doctors /></ProtectedRoute> },
        { path: 'doctordetails/:id', element: <ProtectedRoute><DoctorDetails /></ProtectedRoute> },
        { path: 'booking/:id', element: <ProtectedRoute><Booking /></ProtectedRoute> },
        { path: 'my-appointments', element: <ProtectedRoute><MyAppointments /></ProtectedRoute> },
        { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
        { path: 'medical-records', element: <ProtectedRoute><MedicalRecords /></ProtectedRoute> },
        { path: 'dashboard', element: <ProtectedRoute><PatientDashboard /></ProtectedRoute> },

      
        { 
          path: 'doctor-dashboard', 
          element: (
            <ProtectedRoute allowedRole="Doctor">
              <DoctorDashboard />
            </ProtectedRoute>
          ) 
        },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
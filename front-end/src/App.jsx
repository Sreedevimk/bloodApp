import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/routes/ProtectedRoutes'
import PublicRoute from './components/routes/PublicRoutes'
import Homepage from './pages/Homepage'
import Donation from './pages/Donation'
import Organisation from './pages/Dashboard/Organisation'
import Donor from './pages/Dashboard/Donor'
import Consumer from './pages/Dashboard/Consumer'
// import Analytitics from './pages/Dashboard/Analytitics'
import Hospital from './pages/Dashboard/Hospital'
import DonorList from './pages/Admin/DonorList'
import HospitalList from './pages/Admin/HospitalList'
import OrgList from './pages/Admin/OrgList'
import AdminHome from './pages/Admin/AdminHome'
import Analytics from './pages/Dashboard/Analytics'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
          /> 
         <Route
          path="/donor-list"
          element={
            <ProtectedRoute>
              <DonorList />
            </ProtectedRoute>
          } 
         /> 
        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
         /> 
        <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospital />
            </ProtectedRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orgnaisation"
          element={
            <ProtectedRoute>
              <Organisation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donor"
          element={
            <ProtectedRoute>
              <Donor />
            </ProtectedRoute>
          }
        />

     <Route path='/' element={
       <ProtectedRoute>
       <Homepage/>
       </ProtectedRoute>}/>
     <Route path='/login' element={ 
       <PublicRoute>
      <Login/>
      </PublicRoute>}/>
     <Route path='/register' element={ <Register/>}/>
      </Routes> 

       <Footer/>
    </>
  )
}

export default App

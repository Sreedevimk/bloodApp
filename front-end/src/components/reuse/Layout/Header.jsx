import React from 'react'
import { BiDonateBlood, BiSolidDonateBlood, BiUserCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const {user}=useSelector(state=> state.auth)
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.clear()
    navigate('./login')
    alert("Logout succusfully")
  }
  return (
    <>
    <nav className="navbar">
    <div className="container-fluid ">
      <div className="navbar-brand h1 ">
        <BiDonateBlood color="red" /> Blood Bank App
      </div>
      <ul className="navbar-nav flex-row">
        <li className="nav-item mx-3">
          <p className="nav-link">
            <BiUserCircle /> Welcome{" "}
            {user?.name || user?.hospitalName || user?.organisationName}
            &nbsp;
            <span className="badge bg-secondary">{user?.role}</span>
          </p>
        </li>
        {location.pathname === "/" ||
        location.pathname === "/donor" ||
        location.pathname === "/hospital" ? (
          <li className="nav-item mx-3">
            <Link to="/analytics" className="nav-link">
              Analytics
            </Link>
          </li>
        ) : (
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
        )}
        <li className="nav-item mx-3">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</>






    
      // <nav className='navbar '>
      //   <div className="container-fluid">
      //     <div className="navbar-brand"><BiSolidDonateBlood  color='red'/>
      //       BloodBankApp
      //     </div>
      //     <ul className="navbar-nav flex-row">
      //       <li className="nav-item mx-3">
      //         <p className="nav-link">     <FaUserCircle /> welcome {' '}{user?.name || user?.hospitalName || user?.organisationName} {' '}&nbsp;
      //         <span className="badge text-bg-secondary">{user?.role}</span>
      //         </p>
      //       </li>
      //       <li className="nav-item mx-3">
      //         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      //       </li>
      //       </ul>
            
      //     </div>
       
      // </nav>
   
  )
}

export default Header
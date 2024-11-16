import React from 'react'
import Form from '../../components/reuse/form/Form'
import { useSelector } from 'react-redux'
import Spinner from '../../components/reuse/Spinner';
// import '@fortawesome/fontawesome-free/css/all.min.css';


{/* //     <>
//      <div className='row g-0'>
//      <div className='col-md-8 form-img'> 
//      <img src='https://img.freepik.com/free-vector/blood-donation-cartoon_24640-26227.jpg?size=626&ext=jpg' alt="loginImage"></img>
//      </div>
//      <div className='col-md-4 form-container'>
//      <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"}/>
       
//      </div>
//       </div> 
//     </>
 )} */}
const Login = () => {
  const { loading, error}  = useSelector((state) => state.auth);
  return (
    <>
      {/* <div style={{ textAlign: 'center', marginTop: '10px' }}>
      <i className="fa-solid fa-hand-holding-droplet" style={{ fontSize: '6rem', color: '#C62E2E' }}></i> */}

    {/* <h1 style={{textAlign:'center',marginTop:'30px'}} >Be the lifeline someone needs. Give blood, give hope...!!</h1>
    <h4 style={{textAlign:'center'}}>Join as</h4> */}
    {/* </div> */}

    {/* <img src="https://static.vecteezy.com/system/resources/previews/003/216/571/original/blood-donation-concept-for-website-template-banner-free-vector.jpg" alt="" /> */}
      {error && <span>{alert(error)}</span>}
      {loading ? (<Spinner />) : (
        <div className="row g-0">
          <div className="col-md-6  form-img" >
            {/* <img src="https://img.freepik.com/free-vector/blood-donation-cartoon_24640-26227.jpg?size=626&ext=jpg" alt="loginImage" /> */}
            <img   src="./images/login.jpg" alt="login" />
           
        </div> 
       
          <div className=" col-md-6 form-container" >
         
          {/* <div className="col-md-4 form-container"> */}
            {/* <img src="http://www.gapost233.com/wp-content/uploads/2016/01/donate_blood.jpg" alt="loginImage" /> */}
            {/* <div style={{ padding:'3%',borderRadius:'2%'}}> */}
            
            {/* <i className="fa-solid  fa-user" style={{ fontSize: '6rem', color: '#C62E2E' }}></i> */}
            <div className='border' style={{border:'2px',backgroundColor:'#F0F3F3',borderRadius:'12px',fontFamily:'revert'}}>
            <Form 
              formTitle={"Login"}
              submitBtn={"Login"}
              formType={"login"}
            />
            </div>
           
            </div>
         </div>
      )}
     </> 
  );
};

export default Login;
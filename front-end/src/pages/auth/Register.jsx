import React from 'react'
import Form from '../../components/reuse/form/Form'
import { useSelector } from 'react-redux'
import Spinner from '../../components/reuse/Spinner'

const Register = () => {
  const { loading,error}=useSelector((state)=> state.auth)
  
  return (
    <>
    {error && <span> {alert (error)}</span> }
    {loading ? (<Spinner />) : (

<div className="row g-0">
<div className="col-md-6 form-img ">
  <img  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/28289891808095.5e3b23bb72c55.jpg" alt="registerImage" />
</div>
<div className="col-md-6 form-container">
  {/* <div style={{ padding:'5%',borderRadius:'3%',width:"70%"}}> */}
  <div className='border' style={{border:'2px',backgroundColor:'#F0F3F3',borderRadius:'12px',width:'70%'}}>
  <Form
    formTitle={"Register Here"}
    submitBtn={"Register"}
    formType={"register"}
  />
</div>
</div>
</div>
)}
</>
);
};
//      <div className="row g-0">
//     <div className="col-md-8 form-img"> 
//     <img src="" alt="registerimage" /> 
//        </div> 
//       <div className='col-md-6 form-container'>
//       <Form formTitle={'Register'} submitBtn={'Register'} formType={"register"}/>
//        </div>
//     </div>
//      )}
//     </>
    
//   );
// };
export default Register
import React, { useState } from 'react'
import Input from './Input'
import { Link } from 'react-router-dom'
import { handleLogin, handleRegister } from '../../../services/authservices'
// import { handleLogin, handleRegister } from '../../../authentication/authservice'
const Form = ( {submitBtn,formTitle,formType}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState("donor")
    const [name,setName]=useState("")
    const [organisationName,setOrganisationName]=useState("")
    const [hospitalName,setHospitalName]=useState("")
    // const [website,setWebsite]=useState("")
    const [address,setAddress]=useState("")
    const [phone,setPhone]=useState("")
  return (
    <div className='image'>
        {/* <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-geometric-gradient-creative-blood-donation-poster-background-material-image_134137.jpg" alt="" /> */}
        <div className='form2'>
        <form onSubmit={(e)=>{
            if (formType === 'login') return handleLogin(e,role,email,password)
                else if(formType === 'register') return handleRegister(e,role,name,email,password,organisationName,hospitalName,address,phone)
        }}>
            <h1 className="text-center">{formTitle}</h1>
           
            <div className='form-field' style={{alignItems:'center'}} >
          <label style={{marginRight:'50px'}}>Select Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="donor">Donor</option>
            <option value="organisation">Organisation</option>
            <option value="hospital">hospital</option>
            <option value="admin">Admin</option>
          </select>
        </div>

            {/* <div className="d-flex mb-6">
                <div className="form-check">
                    <input type="radio" className="form-check-input" name="role"  id="donorRadio" value={"donor"}  onChange={(e) =>setRole(e.target.value)}
                    defaultChecked/>
                    <label htmlFor='adminRadio' className='form-check-label'>Donor</label>
                </div>
           
            <div className="form-check ms-2">
                    <input type="radio" className='form-check-input' name='role'  id="adminRadio" value={"admin"}  onChange={(e) =>setRole(e.target.value)}
                    />
                    <label htmlFor='adminRadio' className='form-check-label'>Admin</label>
                </div>

                <div className='form-check ms-2'>
                    <input type="radio" className='form-check-input' name='role'  id="hospitalRadio" value={"hospital"}  onChange={(e) =>setRole(e.target.value)}/>
                    <label htmlFor='hospitalRadio' className='form-check-label'>Hospital</label>
                </div>

                <div className='form-check ms-2'>
                    <input type="radio" className='form-check-input' name='role'  id="organisationRadio" value={"organisation"}  onChange={(e) =>setRole(e.target.value)}/>
                    <label htmlFor='organisationRadio' className='form-check-label'>Organisation</label>
                </div>
                </div> */}


            {(()=>{
                switch(true){
                    case formType === 'login':{
                        return(
                            <>
                            <div className='form-field'>
                                <Input  labelText={"Email"} 
                                    labelFor={'forEmail'} 
                                    inputType={'email'} 
                                    name={'email'}
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                                <div className='form-field'>
                                        <Input labelText={"password"} 
                                    labelFor={'forPassword'} 
                                    inputType={'password'} 
                                    name={'password'}
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                            </> 
                        );
                    }
                    case formType === 'register':{
                        return(
                        <>
                            {(role === "admin"|| role ==="donor") &&(
                                <div className='form-field'>
                             <Input labelText={"Name"} 
                                labelFor={'forName'} 
                                inputType={'text'} 
                                name={'name'}
                                value={name}
                                onChange={(e)=>setName(e.target.value)}/>
                                </div>
                            )}

                           { role === "organisation" &&(
                             <div className='form-field'>
                                <Input labelText={"Organisation Name"} 
                                labelFor={'fororganisationName'} 
                                inputType={'text'} 
                                name={'organisationName'}
                                value={organisationName}
                                onChange={(e)=>setOrganisationName(e.target.value)}/>
                                </div>
                                )}

                            { role === "hospital" &&(   
                            <div className='form-field'>
                                <Input labelText={"Hospital Name"} 
                                labelFor={'forhospital'} 
                                inputType={'text'} 
                                name={'hospitalName'}
                                value={hospitalName}
                                onChange={(e)=>setHospitalName(e.target.value)}/>
                                </div>
                            )}
                 <div className='form-field'>
                    <Input labelText={"Email"} 
                        labelFor={'forEmail'} 
                            inputType={'email'} 
                            name={'email'}
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className='form-field'>
                                <Input labelText={"password"} 
                                labelFor={'forPassword'} 
                                inputType={'password'} 
                                name={'password'}
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <div className='form-field'>
                                <Input labelText={"Address"} 
                                labelFor={'foraddress'} 
                                inputType={'text'} 
                                name={'address'}
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                            <div className='form-field'>
                                <Input labelText={"Phone"} 
                                labelFor={'forphone'} 
                                inputType={'number'} 
                                name={'phone'}
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                         </>
                             )}}
                        })()}
                    

                    <div className="d-flex flex-row justify-content-between">
                        {formType === "login" ? (
                            <>
                            <p>Dont't have an account yet? 
                          <Link to="/register">create an account</Link>
                           </p> 
                           </>
                        ) : (
                            <p>
                            Already have an account
                            <Link to="/login"> Login</Link>
                            </p>
                        )}

                        <button className='btn btn-primary' type='submit'> {submitBtn}</button>
                    </div>
                </form>
                    </div>
                    </div>
                   
                )
                }

export default Form

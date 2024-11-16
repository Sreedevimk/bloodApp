// import { handleRegister } from "../authentication/authservice"
import { userLogin, userRegister } from "../redux/feature/authaction";
import store from "../redux/store";
export const handleLogin =(e,role,email,password)=>{

    e.preventDefault()
    try{
        if(!role || !email || !password){
            return alert('please provide all fields')
        }
        store.dispatch(userLogin({role,email,password}));
    }
    catch(error){
        console.log(error)
    }
}
export const  handleRegister =(e,role,name,email,password,organisationName,hospitalName,address,phone)=>{
    e.preventDefault()
    try{
        store.dispatch(userRegister({role,name,email,password,organisationName,hospitalName,address,phone}))
        
    }
    catch(error){
        console.log(error)
    }
}


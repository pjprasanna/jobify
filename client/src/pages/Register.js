import { useState } from "react"
import {Logo,FormRow,Alert} from '../components'
import Wrapper from "../assets/wrappers/RegisterPage"
import { useAppContext } from "../context/appContext"
import { DISPLAY_ALERT } from "../context/action"
const initialState ={
name:'',
email:'',
password:'',
isMember:true,
showAlert:true,
}
const Register = () => {
  const[values,setValues]=useState(initialState)
  //global state and useNavigate
const {isLoading,showAlert,displayAlert}=useAppContext();
 const toogleMember =()=>
 {
  setValues({...values,isMember:!values.isMember})
 } 
 const handleChange=(e)=>
 {
   setValues({...values,[e.target.name]:e.target.value})
 }
 const onSubmit=(e)=>
 {
   e.preventDefault()
   const{name,email,password,isMember}=values
   if(!email|| !password||(!isMember || !name))
   {
 displayAlert()
 return
   }
 console.log(values)
 }
  return (
   <Wrapper className="full-page">
    <form className="form" onSubmit={onSubmit}>
      <Logo/>
      <h3>{values.isMember?"Login":"Register"}</h3>
      {showAlert && <Alert/>} 
      {!values.isMember && 
      <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>}
      <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>
      <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
    
      <button className="btn btn-block" >Submit</button>
   <p>
    {values.isMember?'Not a member yet ?':'Already a member?'}
    <button type="button" onClick={toogleMember} className="member-btn">
    {values.isMember?'Register':'Login'}
     </button>
   </p>
    </form>
   </Wrapper>
  )
}
export default Register
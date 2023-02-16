import {value,type,name,handleChange,labelText} from '../pages'
const FormRow = ({type,name,value,handleChange,labelText}) => {
  return (
    <div className="form-row">
    <label htmlFor={name} className="form-label">{labelText||name} </label>
    <input type={type} value={value} name={name} 
    onChange={handleChange} className='form-input'/>
    {/* <label htmlFor="email" className="form-label">Email </label>
    <input type="email" value={values.email} name="email" /> */}
    </div> 
  )
}
export default FormRow
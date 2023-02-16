import { CLEAR_ALERT, DISPLAY_ALERT } from "./action"
const reducer=(state,action)=>
{
    if(action.type==DISPLAY_ALERT)
    {
        return {...state,showAlert:true,alertType:'danger',alertText:'Enter all details!'}
    }
    if(action.type==CLEAR_ALERT)
    {
        return {...state,showAlert:false,alertType:'',alertText:''}
    }
throw new Error(`no such action :${action.type}`)
}
export default reducer
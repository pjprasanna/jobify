import { useAppContext } from "../context/appContext"
const Alert = () => {
  const {alertType,alertText}=useAppContext()
  return (
    <div className={`alert alert-${alertType}`}>{alertText}</div>
    // <div className="alert alert-success"></div>
    )
}
export default Alert
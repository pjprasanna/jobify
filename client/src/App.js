import { Dashboard,Landing,Error,Register } from './pages';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import styled from "styled-components";
function App() {
  return (
    <BrowserRouter>
    {/* < nav>
      <Link to="/">Dashboard</Link>
      <Link to="/register">Register</Link>
      <Link to="/home">Home</Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Landing/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;


import Home from "./Components/Home"
import Login from "./Pages/Login"
import { BrowserRouter ,Routes, Route, } from "react-router-dom"
import { AuthProvider } from "../context/AuthContext"
import Error from "./Pages/Error"
import {SignUp} from "./pages/SignUp"
import ResetPassword from "./Pages/ResetPassword"
import ProtectedRoute from "../context/ProtectedRoute"
import ScheduleCall from "./Pages/ScheduleCall"
import FreeTrial from "./Pages/FreeTrial"


function App() {
 

  return (
   <>
   <BrowserRouter>
   <AuthProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/resetPassword" element={<ResetPassword/>}/>
     
    
      <Route element={<ProtectedRoute />}>
        
      <Route path="/scheduleCall" element={<ScheduleCall />} />
      <Route path="/FreeTrial" element={<FreeTrial/>} />
         
        </Route>
        <Route path = "/*" element={<Error/>}/>
      </Routes>
    </AuthProvider>
   </BrowserRouter>
   </>
  )
}

export default App



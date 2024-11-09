import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import CourseCatalog from "./pages/CourseCatalog"
import { RecoilRoot } from "recoil"

export default function App() {
    return (
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/courses' element={<CourseCatalog/>}/>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    )
}

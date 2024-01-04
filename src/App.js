import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from './components/HeaderComponent';
import AddStudent from "./components/AddStudents";
import ShowStudent from './components/ShowStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NoPage from './NoPage';
 
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
          <Route index element={<Header />} />
          <Route path="/addstudent" element={<AddStudent/>} />
          <Route path="/ShowStudent" element={<ShowStudent />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}
 
export default App
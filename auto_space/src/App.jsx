import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Login from './Components/Login';
import Admin_Verify_PM from './Components/Admin_Verify_PM';
import Admin_View_Accepted_PM from './Components/Admin_View_Accepted_PM';
import Admin_Verify_User from './Components/Admin_Verify_User';
import PM_view_notification from './Components/PM_view_notification';
import Add_notification from './Components/Add_notification';
import Parking_Manager from './Components/Parking_Manager';
import PM_change_password from './Components/PM_change_password';
import PM_manage_parking_slot from './Components/PM_manage_parking_slot';
import PM_add_slot_no from './Components/PM_add_slot_no';
import PM_view_approve_slot_booking from './Components/PM_view_approve_slot_booking';
import PM_view_review from './Components/PM_view_review';
import PM_view_review2 from './Components/PM_view_review2';
import Admin_Home from './Components/Admin_Home';
import Admin_View_Notification from './Components/Admin_View_Notification';
import Parking_Manager_Home from './Components/parking_manager_home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/Admin' element={<Admin_Home/>}/>
          <Route exact path='/Admin_Verify_PM' element={<Admin_Verify_PM/>}/>
          <Route exact path='/Admin_View_Accepted_PM' element={<Admin_View_Accepted_PM/>}/>
          <Route exact path='/Admin_Verify_User' element={<Admin_Verify_User/>}/>
          <Route exact path='/Parking_Manager' element={<Parking_Manager/>}/>
          <Route exact path='/Admin_View_Notification' element={<Admin_View_Notification/>}/>
          <Route exact path='/Parking_Manager_Home' element={<Parking_Manager_Home/>}/>
          <Route exact path='/PM_change_password' element={<PM_change_password/>}/>
          <Route exact path='/PM_manage_parking_slot' element={<PM_manage_parking_slot/>}/>
          <Route exact path='/PM_view_approve_slot_booking' element={<PM_view_approve_slot_booking/>}/>
          <Route exact path='/PM_view_notification' element={<PM_view_notification/>}/>
          <Route exact path='/PM_view_review' element={<PM_view_review/>}/>
          <Route exact path='/PM_view_review2' element={<PM_view_review2/>}/>
          <Route exact path='/PM_add_slot_no' element={<PM_add_slot_no/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App

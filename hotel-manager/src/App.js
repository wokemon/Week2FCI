import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Login';
import UserLanding from './components/UserLanding';
import SignUp from './components/SignUp';
import Services from './components/Service';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLanding />}></Route>
      <Route path='/login' element={<SignIn />}></Route>
      <Route path='/login/signup' element={<SignUp />}></Route>
      <Route path='/service' element={<Services/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
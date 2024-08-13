import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Login';
import Landing from './components/Landing';
import SignUp from './components/SignUp';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/login' element={<SignIn />}></Route>
      <Route path='/login/signup' element={<SignUp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}
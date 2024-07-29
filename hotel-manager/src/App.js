// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Login';
import Landing from './components/Landing';
import './i18n'; //init this
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <BrowserRouter>
    <LanguageSwitcher></LanguageSwitcher>
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/login' element={<SignIn/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
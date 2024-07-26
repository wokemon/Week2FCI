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
import { styled } from '@mui/system';
import bg from './assets/bg.jpg';
import AppNav from './components/Navbar';

const MyComponent = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
});
export default function App() {
  return (
    <MyComponent>
      <AppNav></AppNav>
    </MyComponent>
  )
}
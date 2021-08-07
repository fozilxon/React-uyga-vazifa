import React from 'react'
import Body from './body';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './App.css';

function App() {
  return (
     <div className='app-container'>
         <Sidebar />
         <div className='app-wrapper'>
         <Navbar />
         <Body />
         </div>
     </div>
  );
}

export default App;

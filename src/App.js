import './App.css';
// import Search from './Search'
import AddGallery from './AddGallery';
import Gallery from './Gallery';
// import AddImage from './AddImage'
import { useState, useEffect } from 'react'
// import Header from './Header'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom'
import firebase from './firebase';
import styles from './App.module.css'
import * as React from 'react';
import { Paper, Box, Button } from '@mui/material';

function App() {
  const [show, setShow] = useState("inline");
  const [clicked, setClick] = useState(false);

const handleDisplay = () =>{
    setClick(!clicked);
    setShow("none");
}




  


  return (

      // <Route exact path = '/gallery' element={<Gallery />}/>
    <Router>
    <div className={styles.pageBackground}>
      <div>
        <section className={styles.Titlepage} style={{display: show}}>
                <h1 className={styles.welcomeTitle}>Welcome to Bit Gallery!</h1>
                <p>You can use this website to create a small gallery! </p>
                <button className={styles.clickHere} onClick={handleDisplay}>Click here to start</button>
        </section>
      </div>
      <div>
      <h1>Bit Gallery</h1>
    </div>
    <div>
        <nav>
          <ul>
            <li>
              <a href>Home</a>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
              <Routes>
              <Route path='/gallery' element={<Gallery />}/>
              </Routes>
            </li>
            </ul>
          </nav>   
      </div>
        <main>
        <section>
        {clicked ? 
          <AddGallery />
        : null} 
        </section>
        </main> 
      </div>
      </Router>
  );
}

export default App;

// {/* <nav>
// <ul>
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//       {/* <Link to="/gallery">Gallery</Link> */}
//     <Link to="/addImage">AddImage</Link>
//   </li>
//   <li>
//     <Link to="/gallery">Gallery</Link>
//       {/* <Link to="/addImage">AddImage</Link> */}
//   </li>
// </ul>
// </nav>

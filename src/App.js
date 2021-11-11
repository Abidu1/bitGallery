import './App.css';
import AddGallery from './AddGallery';
import Gallery from './Gallery';
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom'

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
    </div>
        <main>
        {clicked ? (

        <div>
          <h1>Bit Gallery</h1>
          <header>
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
             </header>
             <section>
              <AddGallery />
            </section>
         </div>

        ) : null}
       
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

import './App.css';
import Gallery from './Gallery';
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom'

import Homepage from './Homepage'

import styles from './App.module.css'
import Search from './Search'
import * as React from 'react';

function App() {
  const [show, setShow] = useState("inline");
  const [clicked, setClick] = useState(false);

const handleDisplay = () =>{
    setClick(!clicked);
    setShow("none");
}

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
      <div className={styles.pageBackground}>
      <Routes>
        <Route path='/search' element={<Search />}/>
      </Routes>
      <Routes>
        <Route path='/gallery' element={<Gallery />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;



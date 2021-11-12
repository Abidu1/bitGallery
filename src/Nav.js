import {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
  } from 'react-router-dom';

import styles from './Nav.module.css'

function Nav(){
    return(
        <main>
          <div>
            <h1>Bit Gallery</h1>
            <header>
              <nav>
                  <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    </ul>
                </nav>   
              </header>
          </div>
         </main> 
    )
}

export default Nav;
import {useState} from 'react'
import styles from './Homepage.module.css'
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
  } from 'react-router-dom'


function Homepage (){
    return(
        <div className={styles.homepageContainer}>
          <section className={styles.Titlepage} >
                  <h1 className={styles.welcomeTitle}>Welcome to Bit Gallery</h1>
                  <p>You can use this website to create a small gallery </p>
                  <Link to="/bitGallery/search" className={styles.clickHere}>Click here to start</Link>
          </section>
        </div>
    )
}

export default Homepage;
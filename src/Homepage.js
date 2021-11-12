import {useState} from 'react'
import styles from './Homepage.module.css'
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route
  } from 'react-router-dom'


function Homepage ({clickButton}){
    const [enter, setEnter] = useState(clickButton);
    const [show, setShow] = useState("inline");

    const handleDisplay = () =>{
        setEnter(!enter);
        setShow("none");
    }

    return(
        <div className={styles.homepageContainer}>
          <section className={styles.Titlepage} style={{display: show}}>
                  <h1 className={styles.welcomeTitle}>Welcome to Bit Gallery</h1>
                  <p>You can use this website to create a small gallery </p>
                  <Link to="/search" className={styles.clickHere} onClick={handleDisplay}>Click here to start</Link>
          </section>
        </div>
    )
}

export default Homepage;
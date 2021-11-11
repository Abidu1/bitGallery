import Search from './Search';
import {useState} from 'react';
import styles from './AddGallery.module.css'
// const database = getDatabase(firebase)
// database reference. Reference will take in the database variable. This is where the content gets saved
// const dbRef = ref(database)


function AddGallery(){
const [open, setIsOpen] = useState(false);
const [displayStyle, setdisplaystyle] = useState("")

const handleClick = () =>{
    setIsOpen(!open);
    setdisplaystyle("none");
}


    return(
        <>
        {open ? <Search /> : null}
        <button className={styles.AddGallerybutton} onClick={handleClick} style={{display: displayStyle}}> New Gallery</button>
        {/* <button style={{display: displayStyle}}onClick={handleClick} > Add Gallery</button> */}
        </>
    )
}

export default AddGallery;
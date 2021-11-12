import { useState, useEffect } from 'react';
import firebase from './firebase';
import * as React from 'react';
import Gallery from './Gallery'
// whenever there is a change in database or react app then onValue will be able to see it 
// push will add new data to the database and set is used to add new data or overwrite data
import { getDatabase, ref, onValue, push, set, update, remove} from 'firebase/database'; 
import styles from './Search.module.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Nav from './Nav'


const database = getDatabase(firebase)
// database reference. Reference will take in the database variable. This is where the content gets saved
const dbRef = ref(database)


function Search() {
  const [userSearch, setuserSearch] = useState('');
  const [display, setDisplay] = useState([]);
  const [image, setImage] = useState([]);
  const [addSave, setaddSave] = useState("none");


  const handleChange = (event) => {
  const searchbar = event.target.value;
    setuserSearch(searchbar);
  }

  async function fetchMyData() {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=24209290-03bf893fb9927a610f46fb041&q=${userSearch}&image_type=photo`);
      const apiData = await response.json();
      setDisplay(apiData.hits)
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(userSearch){
      fetchMyData();
    } else{
      return null;
    }
    
  }, [])


  const handleSubmit = (event) =>{
    event.preventDefault();
    fetchMyData();
    setuserSearch("");
  }


  const handleClick = (e, item) => {
    e.preventDefault();
    const newArray = [...image, item];
    setImage(newArray);
    setaddSave("");
  }

  const handleRemove = (e, index) =>{
    const hideArray = image
    hideArray.splice(index, 1)
    setImage(hideArray)
  }

  const handlePushArray = (e, item) =>{
    const imageArray = image;
    update(dbRef, {
      key: imageArray
    })
    const resetImage = [];
    push(dbRef, {
      key: imageArray
    })
    setImage(resetImage);
    setaddSave("none");

  }


  return (
    <div>
      <div><Nav/ ></div>
      <div className={styles.browseSection}>
        <div className={styles.searchAndSaveContainer}>
          <ImageList sx={{ width: 450, height: 900, overflowX: 'hidden'}} cols={3} rowHeight={164} className={styles.listContainer}>
                  <ImageListItem>
                      <div className={styles.searchBar}>
                          <form action="#" onSubmit={handleSubmit}>
                          <input className={styles.inputSearch} type= "text" value={userSearch} onChange={handleChange}/>
                          <input className={styles.submitButton}type="submit" value="submit" />
                          </form>
                      </div>
                      <div className={styles.browseImages}>
                          {display.map(picture => <div className={styles.searchColumn} key={picture.id}> <img src={picture.webformatURL} alt={picture.tags}></img><div className={styles.addButton}><button onClick={(e) => handleClick(e,picture)}>Add</button>
                          </div>
                      </div>)}
                    </div>
                  </ImageListItem>
          </ImageList>
          <ImageList sx={{ width: '100vw' , height: '100vh', overflowY: 'inherit', marginRight: '40px', marginLeft: '20px'}} variant="woven" cols={3} gap={8}>
          {image.map((picture) => (
            <ImageListItem key={picture.webformartURL} sx={{height: '40vh', overflowY: 'none'}} >
              <img
                src={`${picture.webformatURL}`}
                srcSet={`${picture.webformatURL}`}
                alt={picture.tags}
                loading="lazy"
              />
              <div className={styles.removeButtonContainer}>
              <button onClick={(e) => handleRemove(e,picture)}>Remove</button>
              </div>
            </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className={styles.saveButtonContainer}>
          <button style={{display: addSave}}onClick={(e) => handlePushArray(e,image)}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
import Search from './Search'
import {useState, useEffect} from 'react'
import firebase from './firebase';
import { getDatabase, ref, onValue, push, set, update, remove} from 'firebase/database';
const database = getDatabase(firebase)
// database reference. Reference will take in the database variable. This is where the content gets saved
const dbRef = ref(database)



 function Gallery (){
    const [galleryArray, setgalleryArray] = useState([]);

    useEffect(() => {
      const arrayRef = database
      console.log(arrayRef)

        
      }, [])
    return(
        <div>
            <h2>Hello!</h2>
            {/* {galleryArray.map(item => <div key={item.id}> <img src={item.webformatURL} alt={item.tags} /> </div>)} */}
        </div>
    )
 }

export default Gallery;

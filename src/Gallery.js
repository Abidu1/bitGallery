import Search from './Search'
import {useState, useEffect} from 'react'
import firebase from './firebase';
// const arrayRef = firebase.database().ref("/")

 function Gallery (){
    const [galleryArray, setgalleryArray] = useState([]);

    useEffect(() => {

        
      }, [galleryArray])
    return(
        <div>
            <h2>Hello!</h2>
            {/* {galleryArray.map(item => <div key={item.id}> <img src={item.webformatURL} alt={item.tags} /> </div>)} */}
        </div>
    )
 }

export default Gallery;

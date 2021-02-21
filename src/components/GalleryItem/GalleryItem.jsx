import GalleryList from '../GalleryList/GalleryList'
import {useState} from 'react';
import axios from 'axios';

function GalleryItem({galleryItem, fetchGuests}) {
  //console.log(galleryItem.pathFor, "item")
// run onclick of select picture
// onclick change to true
// if true then render the description
const [isClicked, setIsClicked] = useState(false);

function Clicked(event) {
  event.preventDefault();
  console.log("clicked boi")
  if(isClicked === false){
    setIsClicked(true)
  }else{
    setIsClicked(false)
  }
  };

  function addLikes(galleryId) {
     //galleryItem.likes ++;
     //console.log(galleryItem.likes)  
     axios({
       method: 'PUT',
       url: `/gallery/like/${galleryId}`
      })
      .then(() => {
      fetchGuests();
      console.log(galleryItem.likes, "likes")
    })
    .catch((error) =>
    console.log("error addlikes axios"))
    
  }
  //need to refresh page , likes are updating after click on photo 
  /////////////////////////////////
  /////////////////////////////////
  return(
    <>
       {!isClicked 
       ? <img onClick={Clicked} src={galleryItem.pathFor} />
       : <div onClick={Clicked}>{galleryItem.description}</div>
}
       <div> likes count {galleryItem.likes}</div>
       <button onClick={() => addLikes(galleryItem.id)} >we Likes its</button>
</>
  )
};

export default GalleryItem;


// function addLikes(event) {
//   event.preventDefault();
//   galleryItem.likes ++;
//   console.log(galleryItem.likes);
//   Clicked();
  
// }
import GalleryList from '../GalleryList/GalleryList'
import {useState} from 'react';
import axios from 'axios';
import './GalleryItem.css'

function GalleryItem({galleryItem, addLikes}) {
  //console.log(galleryItem.pathFor, "item")
// run onclick of select picture
// onclick change to true
// if true then render the description
const [isClicked, setIsClicked] = useState(false);

function Clicked(event) {
  event.preventDefault();
  console.log("clicked")
  if(isClicked === false){
    setIsClicked(true)
  }else{
    setIsClicked(false)
  }
  };

  // function addLikes(galleryId) {
  //    //galleryItem.likes ++;
  //    //console.log(galleryItem.likes)  
  //    axios({
  //      method: 'PUT',
  //      url: `/gallery/like/${galleryId}`
  //     })
  //     .then(() => {
  //     fetchGuests();
  //     console.log(galleryItem.likes, "likes")
  //   })
  //   .catch((error) =>
  //   console.log("error addlikes axios"))
    
  // }
  //need to refresh page , likes are updating after click on photo 
  /////////////////////////////////
  /////////////////////////////////
  const snow = "(View Picture)" ;
  return(
    <>
    <div>
       {!isClicked 
       ? <img className="image" onClick={Clicked} src={galleryItem.pathFor} />
       : <span className="description" onClick={Clicked}>{galleryItem.description} {snow}</span>
}
       <div> Likes {galleryItem.likes}</div>
       <button className="button" onClick={() => addLikes(galleryItem.id)} >Like</button>
       </div>
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
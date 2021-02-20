import GalleryList from '../GalleryList/GalleryList'
import {useState} from 'react';

function GalleryItem({galleryItem}) {
  console.log(galleryItem.pathFor, "item")
  
// run onclick of select picture
// onclick change to true
// if true then render the description
const [isClicked, setIsClicked] = useState(false);


function Clicked() {
  console.log("clicked boi")
  if(isClicked === false){
    setIsClicked(true)
  }else{
    setIsClicked(false)
  }
  };

  function addLikes(event) {
    event.preventDefault();
    axios(
      method: 'PUT',
      url: '/gallery/like/:id',
      data:{
        {galleryItem.likes} ++;
      }
    )
      galleryItem.likes ++;
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
       <div>{galleryItem.likes}</div>
       <button onClick={addLikes}>we Likes its</button>
</>
  )
};

export default GalleryItem;

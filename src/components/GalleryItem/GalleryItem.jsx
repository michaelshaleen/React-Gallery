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
  console.log(galleryItem.description)
  if(isClicked === false){
    setIsClicked(true)
  }else{
    setIsClicked(false)
  }
  };

  function happy() {
    console.log("in happy", isClicked)

    if(isClicked === false){
      return (
      <img onClick={Clicked} src={galleryItem.pathFor} />
      )
    } else{
      return(
      <div onClick={Clicked}>{galleryItem.description}</div>
      )
  }   
  }

  /////////////////////////////////
  /////////////////////////////////
  return(
    <>
    <div>{galleryItem.title}</div>
       {!isClicked 
       ? <img onClick={Clicked} src={galleryItem.pathFor} /> 
       : <div onClick={Clicked}>{galleryItem.description}</div>
}

</>
  )
};

export default GalleryItem;

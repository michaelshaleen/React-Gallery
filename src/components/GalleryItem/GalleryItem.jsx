import GalleryList from '../GalleryList/GalleryList'

function GalleryItem({galleryItem}) {
  console.log(galleryItem.pathFor, "item")

  return(
    <>
    <div>{galleryItem.title}</div>
    <div>{galleryItem.id}</div>
    <div>{galleryItem.description}</div>
    <img src={galleryItem.pathFor}></img>

    
</>
  )



};
//html up all pieces of the object of each index



export default GalleryItem;

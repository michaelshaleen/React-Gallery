import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({galleryList}){
  
  
  return(<>
  <span>galleryList, should .map and list </span>
<p>

{galleryList.map(galleryItem => 
  (<li key={galleryItem.id}>{galleryItem.id} {galleryItem.title},{galleryItem.pathFor} </li>))}
  < GalleryItem />
</p>
</>

)
  }



  export default GalleryList;



  //want to get .props from array of objects to list them out
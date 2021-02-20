import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({galleryList}){
  
  
  return(<>
      <div>
      {galleryList.map((item) => {
        return (
          <GalleryItem
            key={item.id}
            galleryItem={item}
          />
        );
      })}
    </div>
  <span>galleryList, should .map and list </span>

</>

)
  }
  


  export default GalleryList;

 
  //want to get .props from array of objects to list them out
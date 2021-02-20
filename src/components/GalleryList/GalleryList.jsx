import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({galleryList}){
  
  return(
  <>
        <span>return</span>
      <div>
      {galleryList.map((item) => {
        return(
          <GalleryItem
            key={item.id}
            galleryItem={item}
          />
        );
      })}
    </div>

</>

)
  };

  export default GalleryList;

 
  //want to get .props from array of objects to list them out
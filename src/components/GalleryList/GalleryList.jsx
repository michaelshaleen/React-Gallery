import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({galleryList}){
 // console.log({galleryList})
  return(
  <>
        <span>return</span>
      <div>
      {galleryList.map((item) => {
        return(
          <GalleryItem
            key={item.id}
            galleryItem={item}
            //galleryItem = {galleryItem}
          />
        );
      })}
    </div>
</>
)
  };

  export default GalleryList;

 
  //want to get .props from array of objects to list them out
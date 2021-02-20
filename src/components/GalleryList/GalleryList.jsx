import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({galleryList}){
 // console.log({galleryList})
  return(
  <>
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


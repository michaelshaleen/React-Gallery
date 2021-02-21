import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList, fetchGuests, addLikes}){
 // console.log({galleryList})
  return(
  <>
      <div>
      {galleryList.map((item) => {
        return(
          <GalleryItem
            key={item.id}
            galleryItem={item}
            addLikes = {addLikes}
            //galleryItem = {galleryItem}
          />
        );
      })}
    </div>
</>
)
  };

  export default GalleryList;


import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';



function GalleryList({galleryList}){
  //console.log(galleryList, "gallery list")
  return(
  <>
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
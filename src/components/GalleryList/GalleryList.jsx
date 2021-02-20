import App from '../App/App';
import GalleryItem from '../GalleryItem/GalleryItem';



function FetchGallery({galleryList}){

  return(
    <>
    <GalleryItem />
  <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>{galleryList.title}</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>{galleryList.title}</td>
  </tr>
</table>

<p>
{galleryList.map(picture => 
  (<li key={picture.id}>{picture.title} {picture.pathFor}</li>))}
</p>
</>
    )
  }

  export default FetchGallery;



  //want to get .props from array of objects to list them out
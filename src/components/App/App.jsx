import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import FetchGallery from '../GalleryList/GalleryList';
// import galleryItems from '../modules/gallery.data.js';


function App() {
  const [galleryList, setGalleryList] = useState([]);
  const galleryItems = [
    { id: 1, 
      title: 'Mountain Goat',
      pathFor:<img src="images/goat_small.jpg"/>, 
      description: 'Photo of a goat taken at Glacier National Park.', likes: 0
     },

      { id: 2,
       title: 'Reef Fish',
       pathFor: 'images/reef_fish.jpg',
       description:'Underwater photo of Parrotfish', likes: 0
      },
      
      { id:3,
      title:'Lone Bear',
      pathFor: 'images/bear.jpeg',
      description: 'Artwork of a Bear', likes:0
      }
];
const grabGallery = () =>
{  axios({
    method: 'GET',
    url: '/gallery'
  })
  .then(response => {
    //console.log(response.data, "res data")
    setGalleryList(response.data);
    //console.log(galleryList, "gall list");
  })
  .catch(err => {
    console.log("err", err)
  })
};







    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <p>
        <FetchGallery galleryList={galleryList} />
        </p>
        <img src="images/goat_small.jpg"/>
        <img src="images/reef_fish.jpg"/>
        <img src="images/bear.jpeg"/>

        
      </div>
    );
}

export default App;

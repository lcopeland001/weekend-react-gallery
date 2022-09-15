import react from 'react';

function GalleryItem({photo}) {
    return(
    <div>
        <img src={photo.path} width="200" height="200" />
        <p>{photo.description}</p>
        <button></button>
    </div>
    );

}




export default GalleryItem;
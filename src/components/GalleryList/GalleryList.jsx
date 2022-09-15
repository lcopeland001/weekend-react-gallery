import react from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryArray}) {
    return (
        <div>
            {console.log(galleryArray)}
            {galleryArray.map((photo) => {
                return (
                    <GalleryItem key={photo.id} photo={photo}/> 
                )
            })
        }
        </div>
    );
}

export default GalleryList;
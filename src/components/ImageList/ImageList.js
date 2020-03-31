import React from 'react';

// Import Compnents
import ImageCard from '../ImageCard/ImageCard';

const ImageList = ({ images }) => {
    return ( 
        <div className="col-12 p-5 row">
            {
                images.map( img => {
                    return <ImageCard
                            key={img.id}
                            img={img}
                        />
                })
            }
        </div>
     );
}
 
export default ImageList;
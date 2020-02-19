import React from "react";
import "./ImageList.css";
import {Link} from 'react-router-dom';

const ImageList = props => {
  console.log(props);
  return (
    <>
      <div className="container-grid">
        
          {props.images.map(image => {
            return (
              <div key={image.id} className="imageList__container">
                  <img
                    className="imageList__element"
                    src={image.userImageURL}
                    alt={image.tags}
                  ></img>
                  <p>{image.tags}</p>
                  <Link to={{
                    pathname: `/image/${image.id}`,
                    state: {image}
                  }}>
                  <button>View Image</button>
                  </Link>
              </div>
            );
          })}
        </div>
    </>
  );
};
export default ImageList;

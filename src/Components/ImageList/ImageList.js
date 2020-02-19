import React from "react";
import "./ImageList.css";

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
                  <button>View Image</button>
              </div>
            );
          })}
        </div>
    </>
  );
};
export default ImageList;

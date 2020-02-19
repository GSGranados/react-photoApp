import React from 'react'
import {Link} from 'react-router-dom';
const ImageView = ({props}) => {
    
    return (
      <div className="imageContainer">
        <img className="image" src={props.location.state.value.userImageURL} alt={props.location.state.value.tags}></img>
        <h4>
          Credits: <span>{props.location.state.value.user}</span>
        </h4>
        <button className="downloadButton">
          <span>
            <a target="_blank" href={props.location.state.value.pageURL}>
              Go to the Download Page
            </a>
          </span>
        </button>
        <Link to={{pathname: "/"}}><button className="homeButton">Home</button></Link>
      </div>
    );
}
export default ImageView

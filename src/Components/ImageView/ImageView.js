import React from 'react'
import {Link} from 'react-router-dom';
import './ImageView.css'
const ImageView = props => {
    console.log(props);
    return (
      <div className="imageContainer">
        <img src={props.location.state.image.userImageURL} alt={props.location.state.image.tags} className="image"></img>
        <h4>
        Credits: <span>{props.location.state.image.user}</span>
        </h4>
        <a target="_blank" href={props.location.state.image.pageURL}>
        <button className="downloadButton">
              Go to the Download Page
        </button>
        </a>
        <Link to={{pathname: "/"}}><button className="homeButton">Home</button></Link>
      </div>
    );
}
export default ImageView

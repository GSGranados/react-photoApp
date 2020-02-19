import React from "react";
import './InputForm.css'

 const InputForm = (props) => {
  
    return (
      <div>
        <form onSubmit={props.handleRequest} className ="input_form">
            <input className="input_search" type="text" name="imageSearch"></input>
            <button className="form_button" type="submit"> Search Images</button>
        </form>
      </div>
    );
  }
  export default InputForm;

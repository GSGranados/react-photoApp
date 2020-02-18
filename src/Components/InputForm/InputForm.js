import React, { Component } from "react";
import './InputForm.css'

export default class InputForm extends Component {
  render() {
    return (
      <div>
        <form className ="input_form">
            <input className="input_search" type="text" name="imageSearch"></input>
            <button className="form_button" type="submit"> Search Images</button>
        </form>
      </div>
    );
  }
}

import React, {Component} from "react";
import InputForm from "./Components/InputForm/InputForm";
import "./App.css";

const API_KEY="15067697-a347138b0dcbd88a15f281e67";


class App extends Component {

  state ={

    images: []

  }

  handleRequest = async (e) =>{
    e.preventDefault();

    const input = e.target.elements.imageSearch.value;

    const response = await fetch(`https://pixabay.com/api/videos/?key=${API_KEY}&q=${input}`);

    const result = await response.json();

    console.log(result);

    this.setState({
      images: result.hits
    })


  }
 
  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <p>Image Search.</p>
          </header>
          <InputForm handleRequest={this.handleRequest}></InputForm>
        </div>
      </div>
    );
  }
}


export default App;

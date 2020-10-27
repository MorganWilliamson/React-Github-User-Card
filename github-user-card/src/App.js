import React from "react";
import axios from "axios";
import './App.css';
//Component import(s)
import CardForm from "./components/CardForm";

class App extends React.Component {
  // constructor(){
  //   super()
  // }
  
  render() {
    return (
      <div className="App">
        <p>Github User Card!</p>
        <CardForm />
      </div>
    );
  }
}

export default App;

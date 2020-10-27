import React from "react";
import axios from "axios";
import './App.css';
//Component import(s)
import CardForm from "./components/CardForm";

//This should contain:
//-State
//-axios request
//-helper functions
class App extends React.Component {
  state = {
    users: [],
  };

  //axios
  fetchUsers = ( 
    axios.get(`https://api.github.com/users/morganwilliamson`)
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data.data
        });
      })
      .catch(error => console.log(error))
  );

  //"componentDidMount"

  //helper?
  
  render() {
    return (
      <div className="App">
        <p>Github User Card!</p>
        <CardForm users={this.state.users} />
      </div>
    );
  }
}

export default App;

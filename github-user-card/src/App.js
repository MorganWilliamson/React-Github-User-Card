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
    fetchUsers = () => {
      axios.get(`https://api.github.com/users/morganwilliamson`)
        .then((res) => {
          console.log(res);
          this.setState({
            users: [...this.state.users, res.data]
          });
        })
        .catch(error => console.log(error))
    };

  // fetchUsers = async () => { 
  //   const res = await axios.get(`https://api.github.com/users/morganwilliamson`)
  //   const response = await axios.get(res.data.followers_url);
  //   const results = await Promise.all(
  //     response.data.map(follower => {
  //       return axios.get(follower.url);
  //     })
  //   );
  //   const resultData = results.map(result => result.data);
  //   this.setState({ users: [...this.state.users, res.data, ...resultData] });
  // };

  //"componentDidMount"
  componentDidMount() {
    this.fetchUsers();
  }

  //helper?
  
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        
        <div className="CC">
        <CardForm users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App;

// URL: https://api.github.com/users/morganwilliamson
// Followers URL: https://api.github.com/users/morganwilliamson/followers
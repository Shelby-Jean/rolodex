import React from 'react';
import UserList from './components/UserList'
import logo from './rolodex-illustration.jpg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount = () => {
    fetch('https://randomuser.me/api?results=25')
      .then(response => response.json())
      .then(data => this.setState({
        users: data.results
      }))
      .catch(error => console.log(`Error, ${error}`))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Contact List</h1>
          <UserList users={this.state.users}/>
        </header>
      </div>
    );
  }
}

export default App;

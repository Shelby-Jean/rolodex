import React from 'react';

class UserContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <h4>{this.props.user.name.first} {this.props.user.name.last}</h4>
        <img src={this.props.user.picture.thumbnail} alt="user" />
      </div>
    )
  }
}

export default UserContact;
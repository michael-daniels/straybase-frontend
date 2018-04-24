import React, { Component } from 'react'

class RegisterForm extends Component {
  state = {
    userName:'',
    petName:'',
    petGender:'',
    petBreed:'',
    dateLost:'',
    crossRoadsLost:'',
    password:'',
    confirmPassword:'',
  }
  render () {
    // const registerSubmitHandler = (event) => {
    //   alert(event.target.userName.value)
    // }
    let usernameStatus = 'Username'
    if (window.location.href === 'http://localhost:3000/register?usernametaken=true') {
      usernameStatus = 'Username is already taken. Please try again.'
    }
    return (
      <div>
        <h3>Register</h3>
        <hr />
        <form className="form-group" action="http://localhost:8000/register" method="post">
          <input className="form-control" name="username" type="text" value={this.state.userName} placeholder={usernameStatus} onChange={e => this.setState({ userName: e.target.value })} />
          <input className="form-control" name="petname" type="text" value={this.state.petName} placeholder="Pet's Name" onChange={e => this.setState({ petName: e.target.value })} />
          <input className="form-control" name="petgender" type="text" value={this.state.petGender} placeholder="Pet's Gender" onChange={e => this.setState({ petGender: e.target.value })} />
          <input className="form-control" name="petbreed" type="text" value={this.state.petBreed} placeholder="Pet's Breed" onChange={e => this.setState({ petBreed: e.target.value })} />
          <input className="form-control" name="datelost" type="text" value={this.state.dateLost} placeholder="Date Lost" onChange={e => this.setState({ dateLost: e.target.value })} />
          <input className="form-control" name="crossroadslost" type="text" value={this.state.crossRoadsLost} placeholder="Crossroads Where Last Seen" onChange={e => this.setState({ crossRoadsLost: e.target.value })} />
          <input className="form-control" name="password" type="password" value={this.state.password} placeholder="Create Password" onChange={e => this.setState({ password: e.target.value })} />
          <input className="form-control" name="confirmPassword" type="password" value={this.state.confirmPassword} placeholder="Confirm Password" onChange={e => this.setState({ confirmPassword: e.target.value })} />
          <button className="form-control btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm
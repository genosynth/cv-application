import React, { Component } from 'react'

export class Header extends Component {
 
  
    
  render() {
    let info = JSON.parse(this.props.storingInfo)
    if (info!=null && info.name!=null) {
     
      return (
        <div className='header'>
          <h1>Personal Information</h1>
          <ul>
            <li><b>Name</b> : {info.name}</li>
            <li><b>Email</b> : {info.email}</li>
            <li><b>Phone Number</b> : {info.number}</li>
          </ul>
          <button onClick={this.props.resetInfo}>Edit</button>
        </div>
      )
    }
    return (
      <div className='edit-header'>
        <h1>Personal Information</h1>
          <ul>
          <label>Name</label>
          <input type="text" onChange={this.props.updateName} value={this.props.state.name}></input>
          <label>Email</label>
          <input type="email" onChange={this.props.updateEmail} value={this.props.state.email}></input>
          <label>Phone Number</label>
          <input type="number" onChange={this.props.updateNumber} value={this.props.state.number}></input>
          
          </ul>
          <button onClick={this.props.storeInfo}>Save</button>

      </div>
    )
  }
}

export default Header
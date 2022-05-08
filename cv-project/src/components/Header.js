import React, { Component } from 'react'

export class Header extends Component {
 
  
    
  render() {

    if (this.props.storingInfo!=null) {
      let info = JSON.parse(this.props.storingInfo)
      return (
        <div className='header'>
          <h1> Name : {info.name}</h1>
          <h2>Email : {info.email}</h2>
          <h2>Phone Number: {info.number}</h2>
          <button onClick={this.props.resetInfo}>Edit</button>
        </div>
      )
    }
    return (
      <div className='header'>
          <label>Name</label>
          <input type="text" onChange={this.props.updateName}></input>
          <label>Email</label>
          <input type="email" onChange={this.props.updateEmail}></input>
          <label>Phone Number</label>
          <input type="number" onChange={this.props.updateNumber}></input>
          <button onClick={this.props.storeInfo}>Save</button>


      </div>
    )
  }
}

export default Header
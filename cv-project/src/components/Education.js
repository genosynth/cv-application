import React, { Component } from 'react'

export class Education extends Component {

    
  render() {
    return (
      <div className='education'>
          <label>School Name</label>
          <input type="text"></input>
          <label>Title Of Study</label>
          <input type="text"></input>
          <label>Date of Study From:</label>
          <input type="date" placeholder='From'></input>
          <label>Date of Study To:</label>
          <input type="date" placeholder='To'></input>
          <button>Add</button>
      </div>
    )
  }
}

export default Education
import React, { Component } from 'react'

export class Experience extends Component {
  
    
  render() {
    return (
      <div className='experience'>
          <label>Company Name</label>
          <input type="text" onChange={this.props.updateCompanyName}></input>
          <label>Position Title</label>
          <input type="text" onChange={this.props.updatePositionTitle}></input>
          <label>Main Tasks Of Job</label>
          <textarea type="text" onChange={this.props.updateMainTasks}></textarea>
          <label>Date of Commence of Work:</label>
          <input type="date" placeholder='From' onChange={this.props.updateWorkDateFrom}></input>
          <label>Date End Of Work:</label>
          <input type="date" placeholder='To' onChange={this.props.updateWorkDateTo}></input>
          <button>Add</button>
      </div>
    )
  }
}

export default Experience
import React, { Component } from 'react'

export class Experience extends Component {
  
    
  render() {
    let info = JSON.parse(this.props.storingInfo)
    if (info!=null && info.companyName!=null) {
      
      return (
        <div className='experience'>
          <ul>
            <li><b>Company Name</b> : {info.companyName}</li>
            <li><b>Position Title</b> : {info.positionTitle}</li>
            <li><b>Main Tasks Of Job</b> : {info.mainTasks}</li>
            <li><b>Date of Commence of Work</b>: {info.workDateFrom}</li>
            <li><b>Date End Of Work</b> : {info.workDateTo}</li>
        </ul>
        <button onClick={this.props.resetExperience}>Edit</button>
    </div>
      )
    }
    return (
      <div className='edit-experience'>
        <ul>
          <label>Company Name</label>
          <input type="text" onChange={this.props.updateCompanyName} value={this.props.state.companyName}></input>
          <label>Position Title</label>
          <input type="text" onChange={this.props.updatePositionTitle} value={this.props.state.positionTitle}></input>
          <label>Main Tasks Of Job</label>
          <textarea type="text" onChange={this.props.updateMainTasks} value={this.props.state.mainTasks}></textarea>
          <label>Date of Commence of Work:</label>
          <input type="date" placeholder='From' onChange={this.props.updateWorkDateFrom} value={this.props.state.workDateFrom}></input>
          <label>Date End Of Work:</label>
          <input type="date" placeholder='To' onChange={this.props.updateWorkDateTo} value={this.props.state.workDateTo}></input>
        </ul>
          <button onClick={this.props.addExperience}>Save</button>
      </div>
    )
  }
}

export default Experience
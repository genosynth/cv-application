import React, { Component } from 'react'

export class Education extends Component {

    
  render() {
    let info = JSON.parse(this.props.storedInfo)
    if (info!=null && info.schoolName!=null) {
    return (
      
      <div className='education'>
        <ul>
          <li><b>School Name</b> : {info.schoolName}</li>
          <li><b>Title Of Study</b> : {info.studyName}</li>
          <li><b>Date of Study From</b> :{info.studyDateFrom}</li>
          <li><b>Date of Study To</b> :{info.studyDateTo}</li>
        </ul>
        <button onClick={this.props.editSchool}>Edit</button>
      </div>
     
      )
    }

    return (


      <div className='edit-education'>
        <ul>
          <label>School Name</label>
          <input type="text" onChange={this.props.updateSchoolName} value={this.props.state.schoolName}></input>
          <label>Title Of Study</label>
          <input type="text" onChange={this.props.updateStudyName} value={this.props.state.studyName}></input>
          <label>Date of Study From:</label>
          <input type="date" placeholder='From' onChange={this.props.updateStudyDateFrom} value={this.props.state.studyDateFrom}></input>
          <label>Date of Study To:</label>
          <input type="date" placeholder='To' onChange={this.props.updateStudyDateTo} value={this.props.state.studyDateTo}></input>
        </ul>
      <button onClick={this.props.addSchool}>Save</button>
  </div>


    )
  }
}

export default Education
import React, { Component } from 'react'

export class Experience extends Component {
  constructor(props){
    super(props)
    this.state={
      files: [],
      style: "visible"
    }
  }

  render() {
    let info = JSON.parse(this.props.storingInfo)
    if (info!=null && info.experience!=null) {
    return (
    <div className='edit-experience'>
      <h1>Experience</h1>
      <button style={{visibility: this.state.style}}  onClick={()=>{
        this.setState({style:"hidden"})
        this.props.createExperience()
      }}
        >Add</button>

      {info.experience.map((el)=>{

        if (el.companyName==null && el.positionTitle==null && el.mainTasks==null && el.workDateFrom==null && el.workDateTo==null){
          
          return <div key={el.id}>         
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
            <button onClick={()=> {
              this.setState({style:"visible"})
              this.props.addExperience(this.props.state.companyName)
              }}>Save</button>
        </div>
        }
           return <div>
            
            <ul style={{listStyle: "none"}}>
              <li><b>Company Name</b> : {el.companyName}</li>
              <li><b>Position Title</b> : {el.positionTitle}</li>
              <li><b>Main Tasks Of Job</b> : {el.mainTasks}</li>
              <li><b>Date of Commence of Work</b>: {el.workDateFrom}</li>
              <li><b>Date End Of Work</b> : {el.workDateTo}</li>
          </ul>
          <button  style={{visibility: this.state.style}} onClick={()=>{
            this.setState({style:"hidden"})
            this.props.editExperience(el.id)
          }}
            >Edit</button>   
          <button onClick={()=>{
            this.props.deleteExperience(el.id)
            }}>Delete</button>          
          </div>
         })} 
     
    </div>
    )
  }

  return (
    <div className='experience'>
      <h1>Experience</h1>
      <button onClick={this.props.createExperience}>Add</button>
    </div>
    )
}    


  /*render() {
    let info = JSON.parse(this.props.storingInfo)
    if (info!=null && info.experience!=null) {
      console.log(info.experience[0].companyName)
      return (
        <div className='experience'>
          <h1>Experience</h1>
          {info.experience.map((el)=>{
           return <div>
            
            <ul>
              <li><b>Company Name</b> : {el.companyName}</li>
              <li><b>Position Title</b> : {el.positionTitle}</li>
              <li><b>Main Tasks Of Job</b> : {el.mainTasks}</li>
              <li><b>Date of Commence of Work</b>: {el.workDateFrom}</li>
              <li><b>Date End Of Work</b> : {el.workDateTo}</li>
          </ul>
          <button onClick={this.props.resetExperience}>Edit</button>
          <button>Add</button>
          </div>
         })} 
    </div>
      )
    }
    return (
      <div className='edit-experience'>
        <h1>Experience</h1>
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
  } */
}

export default Experience
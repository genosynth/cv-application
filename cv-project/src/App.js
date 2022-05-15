import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      schoolName: "",
      studyName: "",
      studyDateFrom: "",
      studyDateTo: "",
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      workDateFrom: "",
      workDateTo: "",
      storedInfo: localStorage.getItem('cvapp')
    };

    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateNumber = this.updateNumber.bind(this);
    this.updateSchoolName = this.updateSchoolName.bind(this);
    this.updateStudyName = this.updateStudyName.bind(this);
    this.updateStudyDateFrom = this.updateStudyDateFrom.bind(this);
    this.updateStudyDateTo = this.updateStudyDateTo.bind(this);
    this.updateCompanyName = this.updateCompanyName.bind(this);
    this.updatePositionTitle = this.updatePositionTitle.bind(this);
    this.updateMainTasks = this.updateMainTasks.bind(this);
    this.updateWorkDateFrom = this.updateWorkDateFrom.bind(this);
    this.updateWorkDateTo = this.updateWorkDateTo.bind(this);
    this.storeInfo = this.storeInfo.bind(this);
    this.addExperience = this.addExperience.bind(this)
    this.resetExperience = this.resetExperience.bind(this)
    this.resetInfo = this.resetInfo.bind(this)
    this.addSchool = this.addSchool.bind(this)
    this.editSchool = this.editSchool.bind(this)
  }


storeInfo(e){

  if(JSON.parse(localStorage.getItem('cvapp'))){
    let storage = JSON.parse(localStorage.getItem('cvapp'))

    storage.name = this.state.name
    storage.email = this.state.email
    storage.number = this.state.number
  
  localStorage.setItem('cvapp', JSON.stringify(storage));
  return  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
  }

  const data = {
    name : this.state.name,
    email : this.state.email,
    number : this.state.number
  }
  localStorage.setItem('cvapp', JSON.stringify(data));
  return  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
  
}

addExperience(e){

  if (JSON.parse(localStorage.getItem('cvapp'))){
    let storage = JSON.parse(localStorage.getItem('cvapp'))
     
    storage.companyName = this.state.companyName
    storage.positionTitle = this.state.positionTitle
    storage.mainTasks = this.state.mainTasks
    storage.workDateFrom = this.state.workDateFrom
    storage.workDateTo = this.state.workDateTo
 
  console.log(storage)
  localStorage.setItem('cvapp', JSON.stringify(storage));
  return  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
  }

  
  const data = {
    companyName : this.state.companyName,
    positionTitle : this.state.positionTitle,
    mainTasks : this.state.mainTasks,
    workDateFrom : this.state.workDateFrom,
    workDateTo : this.state.workDateTo
    
  }
  localStorage.setItem('cvapp', JSON.stringify(data));
  return  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
 

}

addSchool(e){
  if( JSON.parse(localStorage.getItem('cvapp'))){
    let storage = JSON.parse(localStorage.getItem('cvapp'))
    storage.schoolName = this.state.schoolName
    storage.studyName = this.state.studyName
    storage.studyDateFrom = this.state.studyDateFrom
    storage.studyDateTo = this.state.studyDateTo
  
    localStorage.setItem('cvapp', JSON.stringify(storage));
    return  this.setState({
  
      storedInfo: localStorage.getItem("cvapp") 
    });;
  }
  
  const data = {
    schoolName : this.state.schoolName,
    studyName : this.state.studyName,   
    studyDateFrom : this.state.studyDateFrom,
    studyDateTo : this.state.studyDateTo
    
  }
  localStorage.setItem('cvapp', JSON.stringify(data));
  return  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
}



resetInfo(e){

 let storage = JSON.parse(localStorage.getItem('cvapp'))
 this.setState({
   name:storage.name,
   email:storage.email,
   number:storage.number
 })
 storage.name = null
 storage.email = null
 storage.number = null
 localStorage.setItem("cvapp", JSON.stringify(storage)) 
 this.setState({
  
  storedInfo: localStorage.getItem("cvapp") 
});;

}

resetExperience(e){

  let storage = JSON.parse(localStorage.getItem('cvapp'))  
 
  this.setState({
    companyName:storage.companyName,
    positionTitle:storage.positionTitle,
    mainTasks:storage.mainTasks,
    workDateFrom:storage.workDateFrom,
    workDateTo:storage.workDateTo
  })

  storage.companyName = null
  storage.positionTitle =  null
  storage.mainTasks = null
  storage.workDateFrom = null
  storage.workDateTo = null
  localStorage.setItem("cvapp", JSON.stringify(storage))
  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
  
  //window.location.reload()

 }

 editSchool(e){

  let storage = JSON.parse(localStorage.getItem('cvapp'))
  this.setState({
    schoolName:storage.schoolName,
    studyName:storage.studyName, 
    studyDateFrom:storage.studyDateFrom,
    studyDateTo:storage.studyDateTo
  })
  storage.schoolName = null
  storage.studyName =  null 
  storage.studyDateFrom = null
  storage.studyDateTo = null
  localStorage.setItem("cvapp", JSON.stringify(storage))
  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
  //window.location.reload()

 }
 

  
 updateName(e){
  this.setState({
    name: e.target.value
  });;
  }

  updateEmail(e){
    this.setState({
      email: e.target.value,
    });;
  }

  updateNumber(e){
    this.setState({
      number: e.target.value,
    });;
  }

  updateSchoolName(e){
    this.setState({
      schoolName: e.target.value,
    });;
  }

  updateStudyName(e){
    this.setState({
      studyName: e.target.value,
    });;
  }

  updateStudyDateFrom(e){
    this.setState({
      studyDateFrom: e.target.value,
    });;
  }

  updateStudyDateTo(e){
    this.setState({
      studyDateTo: e.target.value,
    });;
  }

  updateCompanyName(e){
    this.setState({
      companyName: e.target.value
    });;
  }

  updatePositionTitle(e){
    this.setState({
      positionTitle: e.target.value,
    });;
  }

  updateMainTasks(e){
    this.setState({
      mainTasks: e.target.value,
    });;
  }

  updateWorkDateFrom(e){
    this.setState({
      workDateFrom: e.target.value,
    });;
  }

  updateWorkDateTo(e){
    this.setState({
      workDateTo: e.target.value,
    });;
  }
  

  render() {
    return (
      <div className='main'>
        <h1>CV Application</h1>
        <Header updateName={this.updateName} updateEmail={this.updateEmail} updateNumber={this.updateNumber} storeInfo={this.storeInfo} storingInfo={this.state.storedInfo} resetInfo={this.resetInfo} state={this.state}></Header>
        <Education updateSchoolName={this.updateSchoolName} updateStudyName={this.updateStudyName} updateStudyDateFrom={this.updateStudyDateFrom} updateStudyDateTo={this.updateStudyDateTo} addSchool={this.addSchool} storedInfo={this.state.storedInfo} editSchool={this.editSchool} state={this.state}></Education>
        <Experience updateCompanyName={this.updateCompanyName} updatePositionTitle={this.updatePositionTitle} updateMainTasks={this.updateMainTasks} updateWorkDateFrom={this.updateWorkDateFrom} updateWorkDateTo={this.updateWorkDateTo} addExperience={this.addExperience} storingInfo={this.state.storedInfo} resetExperience={this.resetExperience} state={this.state}></Experience>
        
        
      </div>
    )
  }
}

export default App

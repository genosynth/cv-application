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
    this.resetInfo = this.resetInfo.bind(this)
  }


storeInfo(e){
  const data = {
    name:this.state.name,
    email:this.state.email,
    number:this.state.number
  }
  localStorage.setItem('cvapp', JSON.stringify(data));
  window.location.reload()
}

resetInfo(e){

 
  this.setState({
    storedInfo:null
  })
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
        <Header updateName={this.updateName} updateEmail={this.updateEmail} updateNumber={this.updateNumber} storeInfo={this.storeInfo} storingInfo={this.state.storedInfo} resetInfo={this.resetInfo}></Header>
        <Education updateSchoolName={this.updateSchoolName} updateStudyName={this.updateStudyName} updateStudyDateFrom={this.updateStudyDateFrom} updateStudyDateTo={this.updateStudyDateTo}></Education>
        <Experience updateCompanyName={this.updateCompanyName} updatePositionTitle={this.updatePositionTitle} updateMainTasks={this.updateMainTasks} updateWorkDateFrom={this.updateWorkDateFrom} updateWorkDateTo={this.updateWorkDateTo}></Experience>
      
        
      </div>
    )
  }
}

export default App

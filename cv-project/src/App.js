import React, { Component } from 'react'
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import { v4 as uuidv4 } from 'uuid';


if(!localStorage.getItem("cvapp")){
  localStorage.setItem("cvapp", JSON.stringify({
    name:"",
    email:"",
    phone:"",
    experience:[],
    schoolName:"",
    studyName:"",
    studyDateFrom:"",
    studyDateTo:""

  }))
}


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
      experience: "", // 
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
    this.addExperience = this.addExperience.bind(this);
    this.editExperience = this.editExperience.bind(this);
    this.resetInfo = this.resetInfo.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.editSchool = this.editSchool.bind(this);
    this.createExperience = this.createExperience.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
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
    console.log(e)

   storage.experience.forEach((el) => {
      if (el.companyName==null){
        el.companyName = this.state.companyName
        el.positionTitle = this.state.positionTitle
        el.mainTasks = this.state.mainTasks
        el.workDateFrom = this.state.workDateFrom
        el.workDateTo = this.state.workDateTo
        return el
      }
      return el
    });
    

    console.log(storage.experience)
    /*storage.companyName = this.state.companyName
    storage.positionTitle = this.state.positionTitle
    storage.mainTasks = this.state.mainTasks
    storage.workDateFrom = this.state.workDateFrom
    storage.workDateTo = this.state.workDateTo 
    let toSave = {
      companyName:storage.companyName,
      positionTitle:storage.positionTitle,
      mainTasks:storage.mainTasks,
      workDateFrom:storage.workDateFrom,
      workDateTo:storage.workDateTo
    } */


    //storage.experience = [...storage.experience]
 
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
  localStorage.setItem('cvapp', JSON.stringify({experience: [data]}));
  return  this.setState({
    
    storedInfo: localStorage.getItem("cvapp") 
  });;
 

}

createExperience(){
  console.log("fuck")
  let storage = JSON.parse(localStorage.getItem('cvapp'))  
  let draft = {id: uuidv4(), companyName:null,positionTitle:null, mainTasks:null, workDateFrom:null, workDateTo:null}
  if(storage){
    try {
      let prevExperience = storage.experience
      storage.experience = [...prevExperience, draft]
    } catch {
      storage = {experience:[draft]}
    }
    
    
  } else {
    console.log(storage)
    storage = {experience:[draft]}
    
     
  }  

  if (!storage.name){
    storage.name = this.state.name
    storage.email = this.state.email
    storage.number = this.state.number
  }
  localStorage.setItem("cvapp", JSON.stringify(storage))
  this.setState({
  
    storedInfo: localStorage.getItem("cvapp") 
  });;
}

deleteExperience(id){
  let storage = JSON.parse(localStorage.getItem('cvapp'))
  let array = storage.experience
  

  const filtered = array.filter((el) => {
    if (el.id!==id){
      return el
    }
  })
  storage.experience = filtered

  localStorage.setItem("cvapp", JSON.stringify(storage))
  this.setState({
  
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

editExperience(e){

  let storage = JSON.parse(localStorage.getItem('cvapp'))  
  let array = storage.experience
  
  array.map((el)=>{
    if (el.id==e){
      el.companyName=null
      el.positionTitle=null
      el.mainTasks=null
      el.workDateFrom=null
      el.workDateTo = null
      
    }
  })

  storage.experience = [...array]
  console.log(array)
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
        <Experience updateCompanyName={this.updateCompanyName} updatePositionTitle={this.updatePositionTitle} updateMainTasks={this.updateMainTasks} updateWorkDateFrom={this.updateWorkDateFrom} updateWorkDateTo={this.updateWorkDateTo} addExperience={this.addExperience} storingInfo={this.state.storedInfo} editExperience={this.editExperience} state={this.state} createExperience={this.createExperience} deleteExperience={this.deleteExperience}></Experience>
        
        
      </div>
    )
  }
}

export default App

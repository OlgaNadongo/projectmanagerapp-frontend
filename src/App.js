import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Form from "./components/createuser/Form";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logintrial from "./components/loginuser/Logintrial";
import Homepage from "./components/Homepage";
import ProjectList from "./components/Project/ProjectList";
import TeammateList from "./components/Teammates/TeammateList";
import  Signup from "./components/createuser/Signup"


function App() {

  const[projects, setProjects]=useState([])
  // const[teammates,setTeammates]=useState([])
  

  // useEffect(()=>{
  //           fetch("http://localhost:9292/teammates")
  //           .then((r) => r.json())
  //           .then((data) => setTeammates(data));
  //       // .catch(error=>console.log(error))
  //     },[])

    // console.log(teammates)

  return (
    // <div className="App">
      
    //     <Header />
    //     <Homepage/>
    //     <Logintrial />
    //     <ProjectList projects={projects} setProjects={setProjects} />
    //     <TeammateList teammates={teammates} setTeammates={setTeammates} />
    //     <Footer />
    
    // </div>

    <BrowserRouter>
      <Header />
        
        <Routes>
            <Route path="/" element={<Homepage/>}/>
             
            <Route path="/login" element={<Logintrial/>}/>
              
            <Route path="/signup" element={<Signup/>}/>
              
            <Route path="/projectlist" element={<ProjectList  projects={projects} setProjects={setProjects}  /> }/>

            <Route path="/teammatelist" element={<TeammateList  /> }/>
              
         </Routes>
       
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;

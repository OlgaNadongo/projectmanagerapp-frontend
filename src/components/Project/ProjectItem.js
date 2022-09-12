import React,{useState} from 'react'
import TeammateList from '../Teammates/TeammateList'



const ProjectItem = ({id,title, deleteAProject}) => {
   
  const[showteam,setShowteam]=useState(false)

    function handleDelete(id){
      // console.log("deleted")
        fetch(`https://sweezyprojectmanager.herokuapp.com/projects/${id}`,{
          method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>{
          // console.log(data)
          deleteAProject(id)})
        .catch(error=>console.log(error))
      }

    

  return (
    <div>
      <div className='titledeletewrapper'>

        <div className='titlewrapper'>
              <h3 className='title'>{title}</h3>
        </div>
          <div className='deleteprojectbtnwrapper'>
              <button onClick={()=>handleDelete(id)} className="deleteprojectbtn" >Delete</button>
          </div>

          <div className="showhideteamwrapper">
              <button onClick={()=>setShowteam(!showteam)} className="showhideteambtn" >{showteam? "Hide":"Team"}</button>
          </div>

      </div>

      <div className='displayedteamlist'>
          {
              showteam?<p>{<TeammateList/>}</p>:null
            }
      </div>
       
      
         
    </div>
  )
}

export default ProjectItem
import React,{useState} from 'react'

const NewProjectForm = ({addAProject}) => {
     
    const [projectFormData,setProjectData]= useState({title:""});


    function handleInputChange(event){
        setProjectData({...projectFormData,[event.target.name]:event.target.value})
      }


      function handleFormSubmit(event){
        
        event.preventDefault();
        fetch('https://sweezyprojectmanager.herokuapp.com/projects',{
          method:'POST',
          headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json'
          },
          body:JSON.stringify(projectFormData)
        })
        .then(response=>response.json())
        .then(data=>{
            setProjectData({title:""})
          addAProject(data);
        })
        .catch(error=>console.log(error))
      }

  return (
    <div className='formitemsdiv'>
        <form onSubmit={handleFormSubmit} className="addprojectitems" >
            <div className='titleinput'>
               <input placeholder="Project name..." name="title" value={projectFormData.name} onChange={handleInputChange}/>
            </div>
            
            <div className='submitproject'>
              <input type="submit" className='submitbtn' value="Add project"  />
            </div>          
            
        </form>
    </div>
  )
}

export default NewProjectForm
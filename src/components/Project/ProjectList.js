import React,{useEffect} from 'react'
import ProjectItem from './ProjectItem'
import NewProjectForm from './NewProjectForm';

function ProjectList({projects,setProjects}){
    // const [filter, setFilterItem]=useState('')

    useEffect(()=>{
            fetch("http://localhost:9292/projects")
            .then((r) => r.json())
            .then((data) => setProjects(data));
        // .catch(error=>console.log(error))
      },[])

      // adding a new project
      function addAProject(newProject){
        setProjects([...projects,newProject])
      }

    function deleteAProject(id){
        setProjects(projects.filter(project=>project.id !==id))
    }

    // implementing a search feature

    // function  searchText(e){
    //     setFilterItem(e.target.value)
    //  }

    // let  projectSearch=projects.filter(project=>{
    //  return Object.keys(project).some(key=>
    //    project[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
       
    //    )
    // })
    
    // console.log(projects)
    return (
        <div className='container'>
           
            {/* <input type="text" className='searchContent' placeholder='Search...' value={filter}  onChange={searchText.bind(this)} /> */}
            <div className='projectlistcontainer'>
                 <div className='currentprojects'>
                     <h2>Current Projects</h2>
                 </div>

                 <div className='formshown'>
                     <NewProjectForm   addAProject={addAProject}/>
                 </div>
                   <div className='projectlistdiv'> 
                    <ol>
                      {
                       
                            projects.map((project,index)=>
                            <li className='projectlist'>
                                <ProjectItem  key={index} id={project.id} title={project.title} deleteAProject={deleteAProject} />
                            </li>
                            )
                      }
                    </ol> 
                      
                 </div>

            </div>
        </div>
    )
}
export default ProjectList
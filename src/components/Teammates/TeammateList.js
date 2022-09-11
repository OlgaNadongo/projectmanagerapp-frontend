import React,{useEffect,useState} from 'react'
import TeammateItem from './TeammateItem'
import NewTeammateForm from './NewTeammateForm'

// function TeammateList({teammates,setTeammates }){

function TeammateList(){
    // const [filter, setFilterItem]=useState('')
    const[teammates,setTeammates]=useState([])

    useEffect(()=>{
            fetch("http://localhost:9292/teammates")
            .then((r) => r.json())
            .then((data) => setTeammates(data));
        // .catch(error=>console.log(error))
      },[])

      function addATeammate(newTeammate){
        setTeammates([...teammates,newTeammate])
      }

    function deleteATeammate(id){
        setTeammates(teammates.filter(teammate=>teammate.id !==id))
    }

    // implementing a search feature

    // function  searchText(e){
    //     setFilterItem(e.target.value)
    //  }

    // let  teaearch=projects.filter(project=>{
    //  return Object.keys(project).some(key=>
    //    project[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
       
    //    )
    // })

    // console.log(teammates)
    
    return (
        <div>
           
            {/* <input type="text" className='searchContent' placeholder='Search...' value={filter}  onChange={searchText.bind(this)} /> */}
            <div className='singleteamitem'>
        
             {
            
              teammates.map((teammate,index)=>(
                     
                       <p  className="mappeditems" key={index}>
                            <TeammateItem  key={index} id={teammate.id} name={teammate.name} email={teammate.email} deleteATeammate={deleteATeammate} />
                        </p>
                    
                              )
                        )  
            }
        
            </div>
            
            <NewTeammateForm addATeammate={addATeammate}/>
         </div>
       
    )
}
export default TeammateList
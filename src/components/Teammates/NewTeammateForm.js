import React,{useState} from 'react'

const NewTeammateForm = ({addATeammate}) => {
     
    const [teammateFormData,setTeammateData]= useState({name:"",email:""});
    // const[showTeamForm,setShowTeamForm]=useState(true)


    function handleInputChange(event){
        //  console.log(event.target.name)
        setTeammateData({...teammateFormData,[event.target.name]:event.target.value})

      }


      function handleFormSubmit(event){

        console.log(teammateFormData)

        event.preventDefault();
        fetch('https://sweezyprojectmanager.herokuapp.com/teammates',{
          method:'POST',
          headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json'
          },
          body:JSON.stringify(teammateFormData)
        })
        .then(response=>response.json())
        .then(data=>{
            //  console.log(data)  
            setTeammateData({name:"",email:""})
            addATeammate(data);
        })
        .catch(error=>console.log(error))

      }


  return (
    <div className='teammateformdiv'>
        <form onSubmit={handleFormSubmit} className="addteamitems" >

             <div className='nameinput'>
               <input placeholder="name..." name="name"  value={teammateFormData.name} onChange={handleInputChange}/>
             </div>
            
            <div className='emailinput'>
              <input placeholder="email..." name="email"  value={teammateFormData.email} onChange={handleInputChange}/>  
            </div>

             <div className='submitteam'>
               <input type="submit" className='submitbtn' value="Add Person" />  
            </div>       
           
        </form>
        
    </div>
  )
}

export default NewTeammateForm
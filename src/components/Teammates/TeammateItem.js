import React from 'react'




const TeammateItem = ({id,name,email, deleteATeammate}) => {

  function handleDelete(){
    // console.log("deleted")
    
      fetch(`http://localhost:9292/teammates/${id}`,{
        method:'DELETE'
      })
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
        deleteATeammate(id)
    })
      // .catch(error=>console.log(error))
    }

  return (
    <div className='teamitemwrapper' >
      
      <div className='nameitem'>
         <p> {name}</p>
      </div> 
        
        <div className='emailitem'>
            <p>{email}</p>
        </div>
       
        <div>
            <button onClick={handleDelete} className="submitteamitembtn">Remove</button>
        </div>
    </div>
  )
}

export default TeammateItem
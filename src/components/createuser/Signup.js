import React,{useState} from 'react'
import SignupForm from './SignupForm'
import SignUpFormSuccess from './SignUpFormSuccess'

const Signup = () => {
   const[formIsSubmitted, setFormIsSubmitted]=useState(false)
   const submitForm=()=>{
     setFormIsSubmitted(true)
   }

  return (
    <div>
       {!formIsSubmitted? <SignupForm  submitForm={submitForm}/> : <SignUpFormSuccess/>}
    </div>
  )
}

export default Signup
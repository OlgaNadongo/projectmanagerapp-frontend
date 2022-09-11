import React,{useState} from 'react'
import Logintrial from './Logintrial'
import LoginFormSuccess from './LoginFormSuccess'

const Login = () => {

    const[formIsSubmitted, setFormIsSubmitted]=useState(false)

    const submitForm=()=>{
        setFormIsSubmitted(true)
    }

  return (
    <div>
        {/* If formIsSubmitted correctly show success message(LoginFormSuccess), if not, go back to log in (LoginForm)*/}
        {!formIsSubmitted? <Logintrial submitForm={submitForm}/>:<LoginFormSuccess/>} 
    </div>
  )
}

export default Login
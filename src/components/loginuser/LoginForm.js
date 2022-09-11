import React,{useEffect, useState} from 'react'
import validation from './validation'

const LoginForm = ({submitForm}) => {

    const[values,setValues]=useState({//keeps track of values in input tag
         email:"",
         password_digest:""
    })

    const[errors,setErrors]=useState({})
    const[dataIsCorrect,setDataIsCorrect]=useState(false)

    const handleChange=(event)=>{
        setValues({
            ...values,
            [event.target.name]:event.target.value
        })
   }

    const handleFormSubmit=(event)=>{
        event.preventDefault()//prevents page refresh on form submission

        setErrors(//validates values put in the form and returns any errors
             validation(values)
        )

        setDataIsCorrect(true)
    }


    useEffect(()=>{ //checks for errors.If no errors,sets value of submit form to true thus showing success message
       if(Object.keys(errors).length === 0 && dataIsCorrect){
        submitForm(true)
       }
       // eslint-disable-next-line
    },[errors])
   
  return (
    <div className='logincontainer'>
       <div  className='login-wrapper'>

            <div>
                <h2 className='title'>Log In</h2>
            </div>

            <form className='form-wrapper'>
                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type="email" name="email" value={values.email} onChange={handleChange} />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type="password" name="password_digest" value={values.password_digest} onChange={handleChange}/>
                    {errors.password_digest && <p className='error'>{errors.password_digest}</p>}
                </div>

                <div>
                   <button className='submit' onClick={handleFormSubmit}>Log In</button>
                </div>
                
            </form>

       </div>
    </div>
  )
}

export default LoginForm
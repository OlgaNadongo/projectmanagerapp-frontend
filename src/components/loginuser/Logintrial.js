import React,{useEffect, useState} from 'react'
import validation from './validation'
import { useNavigate } from "react-router-dom";


const Logintrial = ({submitForm}) => {

    const[values,setValues]=useState({//keeps track of values in input tag
         email:"",
         password_digest:""
    })

    const[errors,setErrors]=useState({})
    const[dataIsCorrect,setDataIsCorrect]=useState(false)
    const [usersLogin, setUsersLogin] = useState([]);//added part for login
    const navigate = useNavigate();
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
        mappingThroughUserData();//added for login
        setDataIsCorrect(true)
       
    }

//added part for login
    // useEffect(() => {
    //     fetch("http://localhost:9292/users")
    //       .then((response) => response.json())
    //       .then((data) => setUsersLogin(data));
    //   }, []);

//added part for login
      function mappingThroughUserData() {
        const compareUserData = usersLogin.filter((element) => { 
          return  element.email == values.email &&
             element.password_digest == values.password_digest
    
        });
        console.log(compareUserData);
        if (
          compareUserData.length == 0
        ) {
          console.log(false);
          return false;
        }
        else{
          console.log(true)
          navigate("/projectlist")//comment out if added part for login works
          return true;
        }
       
      }


    useEffect(()=>{ //checks for errors.If no errors,sets value of submit form to true thus showing success message
       if(Object.keys(errors).length === 0 && dataIsCorrect){

              fetch("http://localhost:9292/users")
                .then((response) => response.json())
                .then((data) => setUsersLogin(data));
            
            // submitForm(true)
       }
       
       // eslint-disable-next-line
    },[errors])
   
  return (
    <div className='container'>
       <div  className='login-wrapper'>

            {/* <div>
                <h2 className='title'>Log In</h2>
            </div> */}

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

export default Logintrial
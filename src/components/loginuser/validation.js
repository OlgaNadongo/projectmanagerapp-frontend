
const validation = (values) => {
    let errors={}

    if(!values.email){
        errors.email="Email is required."
      }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
      }

      if(!values.password_digest){
        errors.password_digest="Password is required."
      }else if(values.password_digest.length<5){
        errors.password_digest="Password must be more than five characters."
      }

  return errors
  
}

export default validation
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

  const { createUser, setUser, updateUser, signInWithGoogle }= use(AuthContext);
  const [nameError, setNameError]= useState("");
  const [passwordError,setPasswordError]= useState("");
  const navigate =useNavigate();

  const handleRegister =(e)=>{
    


    e.preventDefault();
    console.log(e.target);
    const form = e.target;

    const name= form.name.value;
    if(name.length < 5){
            setNameError("Name should be more then 5 character");
            return;

        }
        else{
            setNameError("");
        }

    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
       const hasUppercase = /[A-Z]/;
       const hasLowercase = /[a-z]/;

        if(password.length < 6){
          setPasswordError("Password must be at least 6 character");
          return;
        }
        if (!hasUppercase.test(password)) {
          setPasswordError( "Password must have at least one uppercase letter.");
          return;
        } 
        if (!hasLowercase.test(password)) {
    setPasswordError( "Password must have at least one lowercase letter.");
    return;
  }
        else{
          setPasswordError("");
        }

    console.log({name,email,photo,password});
    createUser(email,password)
    .then((result) =>{
      const user = result.user;
      // console.log(user);
      updateUser({displayName: name, photoURL: photo}).then(()=>{
        setUser({...user,displayName: name, photoURL: photo});
        navigate("/");
      }).catch((error) => {
       console.log(error);
       setUser(user);
});
      
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage,errorCode)
    });

  }
  const handleGoogleSignin = ()=>{
    signInWithGoogle()
    .then((result)=>{
       console.log(result);
       navigate(location?.state || "/");
    })
    .catch(error =>{
      console.log(error);
    })
  }



    return (
         <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg: mx-auto ">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 lg:w-[500px] max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-xl font-bold pl-6 pt-5">Create Your Account!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">

          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" required />

          {nameError && <p className="text-sm text-error">{nameError}</p>}

           <label className="label">Email</label>
          <input name="email" type="text" className="input" placeholder="Email"  required/>

           <label className="label">Photo-URL</label>
          <input name="photo" type="text" className="input" placeholder="Photo"  required/>

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required/>

          {passwordError && <p className="text-sm text-error">{passwordError}</p>}

          <button onClick={handleGoogleSignin} className='btn mt-5 text-amber-800'>Sign in with Google</button>

          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        
          <p>Already have an account? <Link className='text-red-600 underline' to={"/auth/login"}>Login</Link></p>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;
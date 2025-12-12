import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

  const { createUser, setUser }= use(AuthContext);
   
  const handleRegister =(e)=>{
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name= form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log({name,email,photo,password});
    createUser(email,password)
    .then((result) =>{
      const user = result.user;
      // console.log(user);
      setUser(user);
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

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

          {/* {nameError && <p className="text-sm text-error">{nameError}</p>} */}

           <label className="label">Email</label>
          <input name="email" type="text" className="input" placeholder="Email"  required/>

           <label className="label">Photo-URL</label>
          <input name="photo" type="text" className="input" placeholder="Photo"  required/>

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required/>

          {/* {passwordError && <p className="text-sm text-error">{passwordError}</p>} */}

          <button className='btn mt-5 text-amber-800'>Sign in with Google</button>

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
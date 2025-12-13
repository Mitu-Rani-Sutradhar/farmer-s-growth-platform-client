import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [error,setError]=useState("");

  const {signIn}=use(AuthContext);
  const location =useLocation();
  console.log(location);

  const navigate =useNavigate();


  const handleLogin = (e) =>{
    e.preventDefault();

     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log({email,password});
     signIn(email, password)
     .then((result) =>{
      const user = result.user;
      console.log(user);
      navigate(`${location.state? location.state : "/"}`)

     })
     .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // alert(errorCode, errorMessage)
    setError(errorCode);
  });

  };
    return (
         <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg: mx-auto ">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-[500px] max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold pl-10 pt-5">Login to Your Account</h1>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">


          <label className="label">Email</label>
          <input type="email" name="email"
           className="input" 
        //   ref={emailRef} 
          placeholder="Email" required />
          
          
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" required />
          
          {error && <p className='text-red-600 text-xr'>{error}</p>}


          <div className='flex justify-between px-3 pt-3'>
          <a className="link link-hover">Forgot password?</a>
          <button className="link link-hover text-secondary"><Link to="/auth/register">Register</Link></button>
          
          </div>
          <button type="submit" className='btn mt-5 text-amber-800'>Login with Google</button>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;
import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Profile = () => {
    const { user,updateUser,createUser,setUser }= use(AuthContext);
    const [nameError, setNameError]= useState("");
      const [passwordError,setPasswordError]= useState("");


    const handleEditUser =(e)=>{
    


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
    
    return (
        <div className='w-11/12 mx-auto'>
             
            <h1 className='text-center font-bold py-10 text-3xl underline'>User Profile Information</h1>
            <div className='text-center'>
              <p className='text-xl font-bold'>Name: {user && user.displayName}</p>
              <p className='text-xl font-bold py-5'>Email: {user && user.email}</p>
              <p className='text-xl font-bold'>Photo: <img className='pt-2 w-[300px] h-[200px] mx-auto' src={`${user ? user.photoURL:""}`} alt="" /></p>   

                  <button onClick={handleEditUser} className='btn bg-amber-200 mt-10'>Edit Profile</button>



        {/* <form className="card-body">
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


          <button type="submit" className="btn btn-neutral mt-4">Edit Profile</button>
      
        </fieldset>
      </form> */}

            </div> 
        </div>
    );
};

export default Profile;
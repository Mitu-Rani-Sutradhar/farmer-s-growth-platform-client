import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {
    const { user }= use(AuthContext);
    return (
        <div className='w-11/12 mx-auto'>
             
            <h1 className='text-center font-bold py-10 text-3xl underline'>User Profile Information</h1>
            <div className='text-center'>
              <p className='text-xl font-bold'>Name: {user && user.displayName}</p>
              <p className='text-xl font-bold py-5'>Email: {user && user.email}</p>
              <p className='text-xl font-bold'>Photo: <img className='pt-2 w-[300px] h-[200px] mx-auto' src={`${user ? user.photoURL:""}`} alt="" /></p>   

                  <button className='btn bg-amber-200 mt-10'>Edit Profile</button>

            </div> 
        </div>
    );
};

export default Profile;
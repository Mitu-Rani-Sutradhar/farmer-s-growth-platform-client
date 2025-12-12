

import { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const Header = () => {
  const {user, logOut} =use(AuthContext);

  const handleLogout=()=>{
    // console.log("user tring");
    logOut().then(() => {
         alert("You Logged Out Successfully");
}).catch((error) => {
     console.log(error);
});
  };
   
    return (
        <div className="navbar bg-base-100 shadow-sm pb-5  h-[120px] w-11/12 mx-auto px-8">
       
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow mx-auto">
        <li className='font-bold'><NavLink to="/">Home</NavLink></li>
        <li className='font-bold'><NavLink to="/allCrops">All crops,</NavLink></li>
        <li className='font-bold'><NavLink to="/profile">Profile</NavLink></li>
        <li className='font-bold'><NavLink to="/addCrops">Add crops</NavLink></li>
        <li className='font-bold'><NavLink to="/myPosts">My posts</NavLink></li>
        <li className='font-bold'><NavLink to="/myInterests">My interests</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <div className='pt-4'>
            <img className='pt-3 lg:pt-5 h-[90px] w-[110px] mx-auto' src="/src/assets/logo.png" alt="" />
           <h1 className='text-sm lg:text-sm font-bold pb-10'>Farmer’s Growth<span className=''> & <br /></span> Connection Platform</h1>
        </div>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex mr-30">
    <ul className="menu menu-horizontal px-1">
      <div className=' mx-auto flex'>
        
      <div className='flex'>
         <li className='font-bold'><NavLink to="/">Home</NavLink></li>
        <li className='font-bold'><NavLink to="/allCrops">All crops</NavLink></li>
        <li className='font-bold'><NavLink to="/profile">{user? "Profile": ""}</NavLink></li>
        <li className='font-bold'><NavLink to="/addCrops">{user? "Add crops": ""}</NavLink></li>
        <li className='font-bold'><NavLink to="/myPosts">{user? "My posts": ""}</NavLink></li>
        <li className='font-bold'><NavLink to="/myInterests">{user? "My interests": ""}</NavLink></li>

         </div> 
          
      </div>
      {user ? "":"" }

    </ul>
  </div>
  

  {user ? <div className="navbar-end pr-7">
    
    <a onClick={handleLogout} className="btn bg-lime-500">Logout</a>
  </div> : <div className='lg:flex text-sm gap-2'> 
         <NavLink to="/auth/login" className='btn ml-12 lg:text-2xl'>Login</NavLink>
         <NavLink to="/auth/register" className='btn ml-2 lg:text-2xl'>Register</NavLink>
         </div> }

        
   
</div> 
    );
};

export default Header;
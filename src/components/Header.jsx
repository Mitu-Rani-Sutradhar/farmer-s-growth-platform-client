import logo from "../assets/logo.png"
import { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut().then(() => {
      alert("You Logged Out Successfully");
    }).catch((error) => {
      console.log(error);
    });
  };

  const navLinks = (
    <>
      <li className='font-bold'><NavLink to="/">Home</NavLink></li>
      <li className='font-bold'><NavLink to="/allCrops">All crops</NavLink></li>
      {user && <li className='font-bold'><NavLink to="/profile">Profile</NavLink></li>}
      {user && <li className='font-bold'><NavLink to="/addCrops">Add crops</NavLink></li>}
      {user && <li className='font-bold'><NavLink to="/myPosts">My posts</NavLink></li>}
      {user && <li className='font-bold'><NavLink to="/myInterests">My interests</NavLink></li>}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm py-3 md:py-4 lg:py-5 min-h-[80px] md:min-h-[100px] lg:h-[120px] w-full md:w-11/12 mx-auto px-3 md:px-6 lg:px-8">

      <div className="navbar-start">
        {/* Mobile/Tablet dropdown - hidden on desktop */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 shadow w-52">
            {navLinks}
          </ul>
        </div>

        {/* Logo + Title - responsive sizing */}
        <div className='flex justify-start items-center gap-1 sm:gap-2'>
          <img
            className='h-[45px] w-[55px] sm:h-[60px] sm:w-[70px] md:h-[75px] md:w-[90px] lg:h-[90px] lg:w-[110px] object-contain'
            src={logo}
            alt="Farmer Growth Platform"
          />
          <h1 className='text-[10px] sm:text-xs md:text-sm lg:text-sm font-bold leading-tight'>
            Farmer's Growth<span> & <br className="hidden sm:block" /></span> Connection Platform
          </h1>
        </div>
      </div>

      {/* Center menu - visible from md upward */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex-wrap">
          {navLinks}
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end gap-1 sm:gap-2">
        {user ? (
          <a onClick={handleLogout} className="btn btn-sm sm:btn-md bg-lime-500">
            Logout
          </a>
        ) : (
          <div className='flex flex-wrap gap-1 sm:gap-2'>
            <NavLink to="/auth/login" className='btn btn-sm sm:btn-md lg:btn-md text-xs sm:text-sm lg:text-base'>
              Login
            </NavLink>
            <NavLink to="/auth/register" className='btn btn-sm sm:btn-md lg:btn-md text-xs sm:text-sm lg:text-base'>
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
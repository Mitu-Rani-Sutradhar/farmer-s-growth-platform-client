import logo from "../assets/logo.png";
import { use } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => alert("You Logged Out Successfully"))
      .catch((error) => console.log(error));
  };

  const navClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "text-green-700 bg-green-50"
        : "text-gray-700 hover:text-green-700 hover:bg-green-50"
    }`;

  const navLinks = (
    <>
      <li>
        <NavLink className={navClass} to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink className={navClass} to="/all-crops">
          All Crops
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink className={navClass} to="/profile">
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink className={navClass} to="/add-crops">
              Add Crops
            </NavLink>
          </li>

          <li>
            <NavLink className={navClass} to="/my-posts">
              My Posts
            </NavLink>
          </li>

          <li>
            <NavLink className={navClass} to="/my-interests">
              My Interests
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md"
    >
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">

        {/* Left */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label
              tabIndex={0}
              className="btn btn-ghost text-green-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="menu menu-sm dropdown-content mt-3 w-64 rounded-xl bg-white border border-gray-200 shadow-xl z-[100]"
            >
              {navLinks}
            </motion.ul>
          </div>

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.04 }}>
            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Digital Agriculture"
                className="w-12 sm:w-14 md:w-16 lg:w-20 object-contain"
              />

              <div className="hidden sm:block">
                <h2 className="font-bold text-lg md:text-xl text-green-800">
                  Digital Agriculture
                </h2>

                <p className="text-xs text-gray-500">
                  Smart Farming & Crop Management
                </p>
              </div>
            </NavLink>
          </motion.div>

        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {navLinks}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">

          {user && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              title={user.displayName}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
                />
              ) : (
                <FaUserCircle className="text-4xl text-green-600" />
              )}
            </motion.div>
          )}

          {user ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="btn bg-green-600 hover:bg-green-700 border-none text-white rounded-full px-6"
            >
              Logout
            </motion.button>
          ) : (
            <div className="flex gap-2">

              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink
                  to="/auth/login"
                  className="btn btn-outline border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-full"
                >
                  Login
                </NavLink>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <NavLink
                  to="/auth/register"
                  className="btn bg-green-600 hover:bg-green-700 border-none text-white rounded-full"
                >
                  Register
                </NavLink>
              </motion.div>

            </div>
          )}

        </div>

      </div>
    </motion.header>
  );
};

export default Header;
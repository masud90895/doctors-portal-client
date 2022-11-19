import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const logOutUser = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto  px-4 sm:px-6 lg:px-[100px]">
        <div className="flex h-16 items-center justify-between">
          <label
            htmlFor="dashboard-drawer"
            title="dashboard-drawer"
            className="rounded md:hidden bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="..//">
              <span className="sr-only">Home</span>
              <img
                className="w-[121px] h-[30px]"
                src="https://i.ibb.co/Sy0SsKR/stardoctorsportallogo.jpg"
                alt=""
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#0FCFEC]"
                      }`
                    }
                    to="../home"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#0FCFEC]"
                      }`
                    }
                    to="../about"
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#0FCFEC]"
                      }`
                    }
                    to="../appointment"
                  >
                    Appointment
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#0FCFEC]"
                      }`
                    }
                    to="..//dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#0FCFEC]"
                      }`
                    }
                    to="../contact"
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#0FCFEC]"
                      }`
                    }
                    to="../blog"
                  >
                    Blog
                  </NavLink>
                </li>
                <input
                  title="Dark mode"
                  type="checkbox"
                  className="toggle toggle-lg"
                />
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {user ? (
                  <button
                    onClick={logOutUser}
                    className="rounded-md border border-[#0FCFEC] hover:bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]  px-5 py-2.5 text-sm font-medium hover:text-white shadow"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    className="rounded-md border border-[#0FCFEC] hover:bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]  px-5 py-2.5 text-sm font-medium hover:text-white shadow"
                    to="../login"
                  >
                    Login
                  </NavLink>
                )}
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setHidden(!hidden)}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:hidden shadow-lg border-2 border-gray-700 rounded-lg gap-2 ${
            hidden ? "hidden" : "block"
          }`}
        >
          <Link to="../home">home</Link>
          <Link to="../about">About</Link>
          <Link to="../appointment">Appointment</Link>
          <Link to="../dashboard">Dashboard</Link>
          <Link to="../contact">Contact Us</Link>
          <Link to="../Blog">Blog</Link>
          <input
            title="Dark mode"
            type="checkbox"
            className="toggle mx-auto toggle-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

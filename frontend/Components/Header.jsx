import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Login from "../Pages/Login"; 

export default function Header() {
  const { pathname } = useLocation();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

         
          <Link to="/" className="text-2xl font-semibold italic">
            FreeUp
          </Link>

  
          <div className="flex items-center bg-gray-100 rounded-full px-5 py-2 w-[500px]">
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-1 bg-transparent focus:outline-none text-gray-700"
            />
            <FiSearch className="text-xl text-gray-600" />
          </div>


          <div className="flex items-center space-x-8 text-lg">

            <div className="relative">
              <Link
                to="/"
                className={`pb-1 ${pathname === "/" ? "font-semibold" : "text-gray-700"}`}
              >
                Home
              </Link>
              {pathname === "/" && (
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-yellow-400 rounded"></span>
              )}
            </div>

            <div className="relative">
              <Link
                to="/about"
                className={`pb-1 ${pathname === "/about" ? "font-semibold" : "text-gray-700"}`}
              >
                About Us
              </Link>
              {pathname === "/about" && (
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-yellow-400 rounded"></span>
              )}
            </div>

            <button
              onClick={() => setShowLogin(true)}
              className="text-gray-700 pb-1 hover:font-semibold transition"
            >
              Login
            </button>

            <button className="bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
              Sell
            </button>

          </div>
        </div>
      </header>
      {showLogin && <Login close={() => setShowLogin(false)} />}
    </>
  );
}


import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaCartShopping } from "react-icons/fa6";
import React from "react";
import { useSelector } from "react-redux";

import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useState } from "react";


//subscribing to the store using useSelector hook

const Header = () => {
  const totalItems = useSelector((store) => store.cart.totalItems);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="header px-3 lg:px-8 h-16  flex justify-between items-center bg-blue-300  z-50 ">
      <div className="h-full py-3 lg:py-2 ">
        <Link to={"/"}>
          <img className="w-full h-full" src={logo} loading="lazy" />
        </Link>
      </div>

      <div>
     
       
        <button className="flex items-center space-x-3 pr-2 md:pr-0">
             
      <Link to={"/login"} className=" px-2 py-2 font-bold border border-solid border-black rounded-lg">
      {!loggedInUser ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="#">{loggedInUser}</Link>
            )}
        </Link>

       
          <Link to={"cart"}>
            <div className="relative ">
            <span className=" md:inline-block font-semibold  text-black"><FaCartShopping className="text-2xl"/></span>
            {totalItems > 0 && (
                  <span
                    className="absolute -right-3 -top-2 bg-green-600 text-xs w-5 h-5 flex
                         justify-center items-center animate-bounce rounded-full text-white  "
                  >
                    {totalItems}
                  </span>
                )}
              {/* <span className="absolute text-center -right-2 -top-2 text-xs font-bold bg-[#D4145A] text-white rounded-full w-4 h-4">
                {totalItems }
              </span> */}
            </div>
          </Link>

          
        </button>
      </div>
    </div>
  );
};

export default Header;

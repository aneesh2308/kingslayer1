import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import { FaAddressBook, FaCamera, FaIdCard, FaList } from "react-icons/fa";

function NavbarBottom(props) {
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
//     window.addEventListener("resize", handleResize);

//     handleResize();
//     console.log(windowSize)
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  return (
    <header>
      <nav class="navbar fixed-bottom navbar-light navbar-bottom bg-main mx-auto desktop-float-menu">
        <div class="mx-auto row">
          <div className="col-lg-3 col-3">
            <a class="navbar-brand px-3 text-center text-white" href="#">
              <FaCamera className="mr-2 mb-1" size="1.5rem" />
              <span hidden = {props.screenWidth < 600 ? true : false}>Consult Now Live</span>
            </a>
          </div>
          <div className="col-lg-3 col-3">
            <a
              class="navbar-brand px-3 text-center text-white menu-divider"
              href="#"
            >
              <FaList className="mr-2 mb-1" size="1.5rem" />
              <span hidden = {props.screenWidth < 600 ? true : false} >
                  My Appoinments
                  </span>
            </a>
          </div>
          <div className="col-lg-3 col-3">
            <a
              class="navbar-brand px-3 text-center text-white menu-divider"
              href="#"
            >
              <FaAddressBook className="mr-2 mb-1" size="1.5rem" />
              <span hidden = {props.screenWidth < 600 ? true : false}>
                  Book Appoinment
                  </span>
            </a>
          </div>
          <div className="col-lg-3 col-3">
            <a
              class="navbar-brand px-3 text-center text-white menu-divider"
              href="#"
            >
              <FaIdCard className="mr-2 mb-1" size="1.5rem" />
              <span hidden = {props.screenWidth < 600 ? true : false}>
                  Buy Membership
                  </span> 
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavbarBottom;

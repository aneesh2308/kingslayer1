import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const FooterBottom = () => {
  return (
    <div className="container text-center pb-9">
      <Link to="/">
        <img src={logo} className="mb-3" />
      </Link>
      <div className="row justify-content-center">
        <div className="col-1">
          <FaFacebookSquare size="1.5em" />
        </div>
        <div className="col-1">
          <FaTwitterSquare size="1.5em" />
        </div>
        <div className="col-1">
          <FaInstagramSquare size="1.5em" />
        </div>
        <div className="col-1">
          <FaLinkedin size="1.5em" />
        </div>
      </div>
      <p className="pt-4">
        Copyright &copy; 2020, Fexperts. All rights reserved
      </p>
    </div>
  );
};

export default FooterBottom;

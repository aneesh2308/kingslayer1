import React from "react";
import logo from '../assets/images/logo.png'
import { FaFacebookSquare } from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const TopBar=()=>{
    return(
        <div className=" container-fluid row text-center p-1 m-0">
        <div className="col-md-10 col-sm-12 text-center text-muted">
          <span className="topbar-heading">Welcome to Fexperts</span>
        </div>
        <div className="col-md-2 col-sm-12">
        <div className="row justify-content-center text-muted">
            <div className="col-3">
                <a href="https://www.facebook.com/Fexpertscom-102690731782536/">
                    <FaFacebookSquare size="1.5em"/>
                    
                </a>
            </div>
            <div className="col-3">
                <a href="https://instagram.com/fexpertsindia?r=nametag">
                <FaInstagramSquare size="1.5em"  />
                </a>
            </div>
            <div className="col-3">
               <a href="https://www.linkedin.com/company/70920855/admin/">
                   <FaLinkedin size="1.5em"  />
                   </a> 
            </div>
        </div>
        </div>
      </div>
    )
}
export default TopBar;
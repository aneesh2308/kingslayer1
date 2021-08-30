import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import TopBar from "../components/TopBar";
import { isAdminAuth, adminAuthToken,userType} from "../config";
import axios from "axios";
import img from "../6.jpg";
import { NavDropdown } from "react-bootstrap";
import { CSpinner } from "@coreui/react";
class Bar extends Component {
  state = {
    wait: false,
  };
  handleLogout = () => {
    if(userType==='expert'){
      var config = {
        headers: {
          "Authorization": window.logout,
          "Content-Type": "application/json",
        },
      };
      this.setState({ wait: true });
      axios
        .get("http://34.121.241.39:4000/api/v1/expert/logout/", config)
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.removeItem("adminAuthToken");
            sessionStorage.removeItem("adminAuth");
            this.setState({ wait: false });
            window.location.href = "/home";
          }
        });
    }else{

      var config = {
        headers: {
          Authorization: adminAuthToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      this.setState({ wait: true });
      axios
        .get("http://35.225.64.66:4000/api/v1/user/logout/", config)
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.removeItem("adminAuthToken");
            sessionStorage.removeItem("adminAuth");
            this.setState({ wait: false });
            window.location.href = "/home";
          }
        });

    }
    
  };
  render() {
    return (
      <>
        <header>
          <TopBar />
          <nav className="navbar navbar-expand-lg navbar-dark bg-main text-white">
            <div className="container-fluid">
              <Link to="/home" className="navbar-brand">
                <img src={logo} className="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse content-right"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <Link to="/home/faq" className="nav-link text-white mr-1">
                    FAQs
                  </Link>
                  <Link to="/home/blog" className="nav-link text-white mr-1">
                    Blog
                  </Link>
                  <Link
                    to="/home/about-us"
                    className="nav-link text-white mr-1"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/home/contact-us"
                    className="nav-link text-white mr-1"
                  >
                    Contact Us
                  </Link>
                  {this.state.wait ? (
                    <CSpinner color="white" size="lg"  />
                  ) : adminAuthToken !== null ? (
                    <NavDropdown
                      eventKey={1}
                      title={
                        <span>
                          <img
                            className="thumbnail-image"
                            src={img}
                            width="30"
                            height="30"
                            style={{ borderRadius: "50%" }}
                            alt="user pic"
                          />
                        </span>
                      }
                      id="basic-nav-dropdown"
                    >
                      {/* <NavDropdown.Item
                        className="nav-link dropdown-item"
                        style={{ color: "black" }}
                      >
                        DashBoard
                      </NavDropdown.Item> */}

                      <NavDropdown.Item
                        onClick={this.handleLogout}
                        className="nav-link dropdown-item"
                        style={{ color: "black" }}
                      >
                        LogOut
                      </NavDropdown.Item>
                    </NavDropdown>
                  ) : (
                    <div className="dropdown">
                      <button
                        className="btn btn-light dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Log In / Sign Up
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link to="/user/login" className="dropdown-item">
                            Log In
                          </Link>
                        </li>
                        <li>
                          <Link to="/user/sign-up" className="dropdown-item">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
export default Bar;

import React from "react";
import FooterBottom from "../components/FooterBottom";
import NavList from "../components/NavList";

const Footer = () => {
  const fexperts = [
    {
      name: "About",
      link: "/home/about-us",
    },
    {
      name: "Blog",
      link: "/home/blog",
    },
    {
      name: "Careers",
      link: "#",
    },
    {
      name: "Press",
      link: "#",
    },
    {
      name: "Contact",
      link: "/home/contact-us",
    },
  ];

  const forExperts = [
    {
      name: "Login",
      link: "/expert/login",
    },
    {
      name: "Profile",
      link: "/expert",
    },
    {
      name: "Register",
      link: "/sign-up",
    },
  ];

  const forCustomers = [
    {
      name: "Search for expert",
      link: "/experts",
    },
    {
      name: "Consult for services",
      link: "/experts",
    },
    {
      name: "Book appointments",
      link: "#",
    },
    {
      name: "Read articles",
      link: "#",
    },
    {
      name: "Fexpert app",
      link: "#",
    },
  ];
  const more = [
    {
      name: "Help",
      link: "#",
    },
    {
      name: "Developers",
      link: "#",
    },
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Terms & Condition",
      link: "#",
    },
    {
      name: "Fexperts Bluebook",
      link: "#",
    },
  ];
  return (
    <div className="container-fluid bg-main ">
      <div className="container pt-6 pb-6">
        <div className="row">
          <div className="col-md-3">
            <h4>Fexperts</h4>
            <NavList list={fexperts} />
          </div>
          <div className="col-md-3">
            <h4>For Experts</h4>
            <NavList list={forExperts} />
          </div>
          <div className="col-md-3">
            <h4>For Customers</h4>
            <NavList list={forCustomers} />
          </div>
          <div className="col-md-3">
            <h4>More</h4>
            <NavList list={more} />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-main pt-4 pb-2">
        <FooterBottom />
      </div>
    </div>
  );
};

export default Footer;

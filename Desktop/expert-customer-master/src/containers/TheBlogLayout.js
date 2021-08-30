import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavList from "../components/NavList";
import CommonHeroSection from "../components/CommonHeroSection";

const TheBlogLayout = () => {
  const latestBlog = [
    {
      blogTitle: "Invesment Tips",
      blogDate: "12/12/2020",
    },
    {
      blogTitle: "How to save your Tax",
      blogDate: "12/12/2020",
    },
    {
      blogTitle: "Invesment Tips",
      blogDate: "12/12/2020",
    },
    {
      blogTitle: "How to save your Tax",
      blogDate: "12/12/2020",
    },
  ];
  return (
    <>
      <Navbar />
      <CommonHeroSection title="Expert articles" />
      <div className="container pt-6 pb-6">
        <h3>Latest articles</h3>
        <div className="row d-flex">
          <div className="col-8">
            <div className="row">
              {latestBlog.map((item) => {
                return (
                  <div className="col-6">
                    <div className="bg-light p-1 mb-3">
                      <h5>{item.blogTitle}</h5>
                      <p>
                        <i>{item.blogDate}</i>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-4">
            <div className="bg-light p-4">
              <div className="row">
                <div className="col-md-12">
                  <h3>Subscribe</h3>
                </div>
                <div className="col-md-12 mb-5">
                  <form>
                    <div className="mb-3">
                      <input
                        type="search"
                        placeholder="Search"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn bg-main">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="col-md-12 mb-3">
                  <h3>Follow us for latest updates</h3>
                </div>
                <div className="row">
                  <div className="col-md-6 text-right">
                    <FaTwitterSquare size="4em" color="#1DA1F2" />
                  </div>
                  <div className="col-md-6">
                    <FaFacebookSquare size="4em" color="#3b5998" />
                  </div>
                  <div className="col text-right">
                    <FaInstagramSquare size="4em" color="#8a3ab9" />
                  </div>
                  <div className="col">
                    <FaLinkedin size="4em" color="#0e76a8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
                <h3>Popular articles</h3>
                <NavList list={latestBlog} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TheBlogLayout;

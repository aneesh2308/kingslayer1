import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import NavbarBottom from "../components/NavbarBottom";
import HeroSection from "../components/HeroSection";
import Slider from "react-slick";
import ImageCard from "../components/ImageCard";
import TestimonialSlider from "../components/TestimonialSlider";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import FaqSection from "../components/FaqSection";

import expert_1 from "../assets/images/expert-1.jpeg";
import expert_2 from "../assets/images/expert-2.jpeg";
import covid from "../assets/images/covid.jpg";
import bar from "../assets/images/company-img/bar.jpg";
import jp from "../assets/images/company-img/jp.png";
import smfg from "../assets/images/company-img/smg.png";
import hsbc from "../assets/images/company-img/hsbc.jpg";
import ubs from "../assets/images/company-img/ubs.png";
import city from "../assets/images/company-img/citi.png";
import deu from "../assets/images/company-img/deutsche.png";
import boa from "../assets/images/company-img/boa.jpg";
import rbs from "../assets/images/company-img/rbs.png";
import mufg1 from "../assets/images/company-img/mufg.png";
import imgcard from "../assets/images/imgcard.jpg";
import imgcard0 from "../assets/images/financial advisor.jpg";
import imgcard1 from "../assets/images/investment banker.jpg";
import imgcard2 from "../assets/images/digital currency.jpg";
import imgcard3 from "../assets/images/investment.jpg";
import { Link } from 'react-router-dom';
import '../App.css'

const TheHomeLayout = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var imageCardSetting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
  
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    console.log('Main',windowSize)
  return (
    <>
      <Navbar />
      <NavbarBottom screenWidth={windowSize.width} />
      <HeroSection />
      <div className="container">
        <div className="row pt-7 pb-7 ">
          <div className="col-lg-6 col-md-6 col-6">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <img src={expert_2} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-12 p-3">
                <h4 className="fw-700">Find experts near you</h4>
                <p className="row col-sm-11 col-12">
                  Select prefered expert and time slot to book an appointment
                  for video consultation
                </p>
                <Link to ="/experts" exact>
                <button type="button" className="btn bg-main text-white">
                  Find expert now
                </button>
                </Link>
      
              </div>
            </div>
          </div>
          <div className="col-md-6 col-6">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                <img src={expert_1} style={{ width: "100%", height: "auto" }} />
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-12 p-3">
                <h4 className="fw-700">Experts online now</h4>
                <p className="row col-sm-10 col-12">
                  Tell us your investment query and we will assign you the best
                  expert in 60 seconds
                </p>
                <Link to ="/experts" exact>
                <button type="button" className="btn bg-main text-white">
                  Start consulting
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-6 pb-5">
        <h3 className="fw-700">Popular expert categories</h3>

        <Slider {...imageCardSetting} className="pt-4">
          <div className="col text-center">
            <ImageCard alt="wealth-manager" src={imgcard} />
            <p className="mt-3">Wealth Manager</p>
          </div>
          <div className="col text-center">
            <ImageCard alt="wealth-manager" src={imgcard0} />
            <p className="mt-3">Financial Advisor</p>
          </div>
          <div className="col text-center">
            <ImageCard alt="wealth-manager" src={imgcard1} />
            <p className="mt-3">Investment Banker</p>
          </div>
          {/* <div className="col text-center">
            <ImageCard alt="wealth-manager" src={imgcard2} />
            <p className="mt-3">Money</p>
          </div> */}
        </Slider>
      </div>
      <div className="container pt-6 pb-5">
        <h3 className="fw-700">Articles from our top experts</h3>
        <div className="row pt-4">
          <div className="col-lg-6 col-md-6 col-12 p-3">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <ImageCard
                  alt="15-smart-tips-for-your-investment"
                  src={imgcard3}
                />
              </div>
              <div className="col-lg-4 col-12">
                <div className="blog-details bg-main pt-5 pb-5">
                  <h4 className="fw-700 blog-info">Know about crypto currency</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 p-3">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <ImageCard
                  alt="everything-you-should-know-about-cryptocurrency"
                  src={imgcard2}
                />
              </div>
              <div className="col-lg-4 col-12">
                <div className="blog-details bg-main p-4 pt-5 pb-5">
                  <h4 className="fw-700 blog-info">15 smart tips for your next investments</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-6 pb-5">
      <h3 className="fw-700">Experts from top organization</h3>
        <div class="row pt-4 justify-content-center ">
          <div class="col-md-6  col-4 mt-3 pb-3   text-center ">
            <img src={mufg1} />
          </div>-
          <div class="col-md-6  col-4 mt-3 pb-3  text-center">
            <img src={bar} />
          </div>
          <div class="col-md-6  col-4 mt-3 pb-3  text-center">
            <img src={hsbc} />
          </div>
          <div class=" col-4 text-center">
            <img src={smfg}  />
          </div>
        </div>

        <div class="row pt-3">
          <div class="col-6 text-center">
            <img src={ubs} />
          </div>
          <div class="col-6  text-center">
            <img src={deu} />
          </div>
          <div class="col-6  text-center">
            <img src={city}  />
          </div>
          <div class="col-6  text-center">
            <img src={jp}  />
          </div>
        </div>
        <div class="row pt-3">
          <div class="col-md-6  col mt-3 pb-3 text-center">
            <img src={rbs} style={{ }} />
          </div>
          <div class="col-md-6 col mt-3 text-center">
            <img src={boa} />
          </div>
        </div>
      </div>
      <div className="container pt-6 pb-5">
        <FaqSection />
      </div>

      <div className="container pt-6 pb-5">
        <TestimonialSlider />
      </div>
      <div className="container-fluid pt-5 pb-4 bg-light">
        <DownloadSection />
      </div>
      <Footer />
    </>
  );
};

export default TheHomeLayout;

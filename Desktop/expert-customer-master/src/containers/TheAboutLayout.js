import react from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const TheAboutLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="container text-center pt-6 pb-6 mt-3">
        <h3>About Experts</h3>
        <div className="row justify-content-center">
          <div className="col-md text-left">
            <p><br/>
              Fexperts is the most trusted and familiar home for millions of
              people where they would find the relevant expert to help solve
              their investment/ Financial planning queries and advise
              accordingly. It connects them on everything they need an expert’s
              advice for-to take good care of themselves and their family –
              assessing current gaps/issues, finding the right expert (based on
              various criteria such as location, portfolio, qualification etc),
              booking an advice meeting , obtaining right guidance , storing
              financial records or learning new ways for better future planning
              for themselves and their family.<br /><br /> Domain experts can also harness
              the power of Fexpert as the definitive platform that helps them
              build their presence, grow establishments and engage clients more
              deeply than ever. We help millions of customers and thousands of
              experts with a simpler, easier ,financial service experience. We
              list for free and ensure each expert profile is verified for
              license, qualification and specialisation.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-main p-5">

          <div className="row text-center">
              <div className="col-md-3">
                  <h2>7000+</h2>
                  <p>Tranined Experts</p>
              </div>
              <div className="col-md-3">
              <h2>900+</h2>
                  <p>Happy Customers</p>
              </div>
              <div className="col-md-3">
              <h2>28</h2>
                  <p>Cities</p>
              </div>
              <div className="col-md-3">
              <h2>3</h2>
                  <p>Contries</p>
              </div>
          </div>
         
      </div>
      <div className="container text-center pt-6 pb-6 mt-3">
        <h3>How we do it</h3>
        <div className="row justify-content-center">
          <div className="col">
            <p>
              Fexperts is the most trusted and familiar home for millions of
              people where they would find the relevant expert to help solve
              their investment/ Financial planning queries and advise
              accordingly. It connects them on everything they need an expert’s
              advice for-to take good care of themselves and their family –
              assessing current gaps/issues, finding the right expert (based on
              various criteria such as location, portfolio, qualification etc),
              booking an advice meeting , obtaining right guidance , storing
              financial records or learning new ways for better future planning
              for themselves and their family. Domain experts can also harness
              the power of Fexpert as the definitive platform that helps them
              build their presence, grow establishments and engage clients more
              deeply than ever. We help millions of customers and thousands of
              experts with a simpler, easier ,financial service experience. We
              list for free and ensure each expert profile is verified for
              license, qualification and specialisation.
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center pt-6 pb-6 mt-3">
        <h3>Our Team</h3>
        <div className="row justify-content-center pt-3">
          <div className="col-md">
          <div className="card" style={{width: "18rem",backgroundColor: "rgb(15,15,97)",color : "white"}}>
              <img src="..." className="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          </div>
          <div className="col-md">
          <div className="card" style={{width: "18rem",backgroundColor: "rgb(15,15,97)",color : "white"}}>
              <img src="..." className="card-img-top" alt="..."/>
              <div class="card-body" style={{color : "white"}}>
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          </div>

          <div className="col-md">
          <div className="card" style={{width: "18rem" ,backgroundColor: "rgb(15,15,97)",color : "white"}}>
              <img src="..." className="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          </div>
        </div>
      </div>
      <div className="container text-center pt-6 pb-6 mt-3">
        <h3>Our Investor</h3>
      </div>
      <div class="container">
      <div class="row">
        <p>ddfsf sdf xzc</p>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default TheAboutLayout;

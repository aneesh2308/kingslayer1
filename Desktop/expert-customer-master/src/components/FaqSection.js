import React from "react";
import question from "../assets/images/questions.jpeg";

function FaqSection() {
  return (
    <section class="video-and-faqs">
      <div class="auto-container">
        <h3 className="fw-700">Commonly asked questions</h3>
        <div class="row mt-4">
          <div className="col-lg-6 text-center p-2 col-md-6 col-sm-12">
            <img alt="question" src={question} />
          </div>

          <div class="faq-column col-lg-6 col-md-6 col-sm-12 p-2">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Fexpert?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Fexpert Search is a customer focused, unbiased,
                      independent service website with over 100,000 domain
                      expert profiles from across India. Customers can book
                      confirmed appointments with experts listed on Fexpert’s
                      website. This is a free service for both the customers and
                      the domain expert.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does Fexpert work?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Domain experts can create profiles and get listed in the
                      database of Fexperts. There will be details about
                      experience, history and reviews. Based upon the profiles,
                      customer connect with expert to get consultation as well
                      as a one on one meeting.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What does Fexpert do?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Our vision is to simplify Financial and Investment
                      Industry by making quality domain experts more accessible,
                      affordable and convenient
                    </p>
                    <p>
                      Fexpert connects the entire Financial ecosystem together –
                      Banks, NBFC’s, IFA’s, wealth managers, stock brokers,
                      insurance advisors and other partners, to generate
                      exceptional value and service for all, esp. the end
                      consumers. We integrate different parts of the Finance
                      industry and put them together end-to-end on our platform,
                      so that consumers can have one seamless experience,
                      irrespective of their need
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    {" "}
                    What are the products/services offered by Fexpert for
                    consumers?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Mutual funds, SIP, Equity, Debt, PMS, Life Insurance,
                      Medical Insurance, Liquid Funds etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;

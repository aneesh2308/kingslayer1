import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CRow,
} from "@coreui/react";

const Payments = () => {
  const [collapse, setCollapse] = useState(false);
  // const [collapseMulti, setCollapseMulti] = useState([false, false]);
  const [accordion, setAccordion] = useState(1);
  const [fade, setFade] = useState(true);

  const toggle = (e) => {
    setCollapse(!collapse);
    e.preventDefault();
  };

  const toggleFade = () => {
    setFade(!fade);
  };
  return (
    <div className="c-main">
      <h3>Payments</h3>
      <CRow className>
        <CCol md="10" className="align-center">
          {/* <CCard>
            <CCardHeader>
              Collapse
              <small> accordion</small>
            </CCardHeader>
            <CCardBody> */}
              <div id="accordion">
                <CCard className="">
                  <CCardHeader id="headingOne">
                    <CRow>
                      <CCol md="2" className="m-0 text-center">
                        <p className="p-0 m-0">25</p>
                        <p className="p-0 m-0">NOV 20'</p>
                      </CCol>
                      <CCol md="8" className="info">
                        <div
                          block
                          color=""
                          className="text-left m-0 p-0 "
                          onClick={() =>
                            setAccordion(accordion === 0 ? null : 0)
                          }
                        >
                        <span className="text-muted">Appointment with</span>
                        <h5 className="m-0 p-0" style={{display:'inline'}}> Customer Name</h5>
                        <p className="mb-0">5:00 PM for 30 mintues</p>
                        </div>
                      </CCol>
                      <CCol md="2" className="text-right">
                        {/* <CButton color="success">Invoice</CButton> */}
                        <h4>Rs. 1300</h4>
                      </CCol>
                    </CRow>
                  </CCardHeader>
                  <CCollapse show={accordion === 0}>
                    <CCardBody>
                      1. Anim pariatur cliche reprehenderit, enim eiusmod high
                      life accusamus terry richardson ad squid. 3 wolf moon
                      officia aute, non cupidatat skateboard dolor brunch. Food
                      truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven''t heard
                      of them accusamus labore sustainable VHS.
                    </CCardBody>
                    <CCardFooter>
                <CButton color="success">
                    Download Invoice
                </CButton>
            </CCardFooter>
                  </CCollapse>
                </CCard>
                <CCard>
                  <CCardHeader id="headingTwo">
                    <CButton
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 1 ? null : 1)}
                    >
                      <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 1}>
                    <CCardBody>
                      2. Anim pariatur cliche reprehenderit, enim eiusmod high
                      life accusamus terry richardson ad squid. 3 wolf moon
                      officia aute, non cupidatat skateboard dolor brunch. Food
                      truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven''t heard
                      of them accusamus labore sustainable VHS.
                    </CCardBody>
                  </CCollapse>
                </CCard>
                <CCard>
                  <CCardHeader id="headingThree">
                    <CButton
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => setAccordion(accordion === 2 ? null : 2)}
                    >
                      <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                    </CButton>
                  </CCardHeader>
                  <CCollapse show={accordion === 2}>
                    <CCardBody>
                      3. Anim pariatur cliche reprehenderit, enim eiusmod high
                      life accusamus terry richardson ad squid. 3 wolf moon
                      officia aute, non cupidatat skateboard dolor brunch. Food
                      truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably havent heard
                      of them accusamus labore sustainable VHS.
                    </CCardBody>
                  </CCollapse>
                </CCard>
              </div>
            {/* </CCardBody>
            
          </CCard> */}
        </CCol>
      </CRow>
    </div>
  );
};

export default Payments;

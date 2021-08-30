import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CLabel,
  CSpinner,
  CAlert,
  CInputCheckbox,
} from "@coreui/react";
import axios from "axios";

import { apiEndpoint as API_ENDPOINT, isAdminAuth } from "../../config";

import { Redirect } from "react-router-dom";
import account from "../../assets/images/account.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


export default class LoginOTPLayout extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      code:"",
      mobile:"",
      pathName:"",
      errorMessage:"",
      wait:"",
      hidden:true,
      loginWithPassword:false,
      regexp : /^[0-9\b]+$/
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    if (event.target.value === '' || this.state.regexp.test(event.target.value)){
    this.setState({
    [event.target.name]: event.target.value
      });
    }
    this.state.errorMessage="";
  }


  handleSubmit(event) {
    const {  pathName, hidden, mobile, errorMessage } = this.state;
    console.log("Input mobile and password message", pathName, mobile, errorMessage); 
      axios.post(API_ENDPOINT + `api/v1/user/login`,
        {
          mobile: "91"+mobile,
          loginWithPassword: false  
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(response => { 
        console.log("this is response "+response.status);
        this.setState({hidden:!hidden})
        if (response.status == 200 && response.data.success === true) {
          this.props.handleSuccessfulAuth(response.data);
        } 
      })
      .catch(error => {
        console.log("login error", error);
        this.setState({errorMessage:"Error!!!Either Phone Number is Wrong or Not registered.Please check"});
      });  
    event.preventDefault();
  }

  handleSubmit1(event) {
    const { pathName, mobile, code, errorMessage } = this.state;
    console.log("Input mobile and password message", pathName, code, mobile, errorMessage);

    if (code !== ""){
      axios
      .post(
        API_ENDPOINT + `api/v1/user/loginotpverify`,
        {
          mobile: "91"+mobile, 
          code: code, 
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        },
      )
      .then(response => {
        console.log("this is response "+response.status);
        this.setState({pathName:"/home"});
        sessionStorage.setItem("adminAuthToken", response.data.accessToken);
        sessionStorage.setItem("adminAuth", true);
        sessionStorage.setItem("userType",response.data.userType)
        console.log("adminAuthToken ",response.data.accessToken);
        console.log("userType ", response.data.userType);
          if (response.status === 200 && response.data.success === true) {
            this.props.handleSuccessfulAuth(response.data);
        }
        setTimeout(() => {
          window.location.href = "/home";
        }, 250);
      })
      .catch(error => {
        console.log("login error", error);
        this.setState({errorMessage:"Error!!!Wrong OTP.Please Check"});
      });
    }else {
      console.log("Reached else");
    }
    event.preventDefault();
  }

  render(){
    var show, btnText;
  if (this.state.wait) {
    btnText = <CSpinner color="white" size="sm" />;
  } else {
    btnText = "Log In";
  }
    show=(
    <>
    <div
      className="c-app c-default-layout flex-row align-items-center"
      style={{ minHeight: "80vh" }}
    >
      
      <CContainer>
      <CRow alignHorizontal="end">
         <CCol lg={6} className="mb-1">
         </CCol>
       </CRow>
        <CRow className="justify-content-center mt-4">
          <CCol md="6">
          <img
            src={account}
            alt="account"
            className="hero-image"
            style={{ height: "auto", width: "100%" }}
          />
          </CCol>
          <CCol md="6" className="p-3">
            <CCardGroup>
              <CCard className="p-4 br-1" style={{background: "transparent"}}>
                <CCardBody>
                  <CForm onSubmit={this.handleSubmit} hidden={!this.state.hidden}>
                    {/* <h1>Login</h1>
                    <p className="text-muted">
                      Sign In to your customer account
                    </p> */}
                    <CLabel>Enter Mobile Number</CLabel>
                    <CInputGroup className="mb-3" >
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Mobile Number"
                        name="mobile"
                        autoComplete="mobile"
                        required
                        value={this.state.mobile}
                        onChange={this.handleChange}
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    <CCol xs="12">
                    {this.state.errorMessage && (
                        <p style={{ color: "#e55353" }} className="error"> {this.state.errorMessage} </p>
                    )}
                    
                    </CCol>
                    <CRow>
                    <CCol lg={6}>
                    </CCol>
                    
                        <CButton
                            block                          
                            className="px-4 mt-4 bg-main justify-content-center"
                            type = "submit"
                            disabled={this.state.mobile.length != 10}   
                          >
                          OTP 
                          </CButton>
                            
                      {/* <CCol xs="4" className="text-right">
                            <CButton color="link" className="px-0" hidden={hidden} onClick={handleReset}>Change Email id?</CButton>
                          </CCol>
                          <CCol xs="4" className="text-right">
                            <CButton color="link" className="px-0" hidden={hidden} onClick={handleOTP}>Resend OTP</CButton>
                          </CCol> */}
                    </CRow>
                  </CForm>
                  <CForm onSubmit={this.handleSubmit1} hidden={this.state.hidden}>
                    {/* <h1>Login</h1>
                    <p className="text-muted">
                      Sign In to your customer account
                    </p> */}
                    <CLabel>Enter OTP</CLabel>
                    <CInputGroup className="mb-3" >
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        type="tel"
                        placeholder="OTP"
                        name="code"
                        autoComplete="OTP"
                        required
                        value={this.state.code}
                        onChange={this.handleChange}
                      />
                    </CInputGroup>
                    <CCol xs="12">
                    {this.state.errorMessage && (
                        <p style={{ color: "#e55353" }} className="error"> {this.state.errorMessage} </p>
                    )}
                    
                    </CCol>
                    <CRow>
                    <CCol lg={6}>
                    </CCol>
                    
                          <CButton
                            block                          
                            className="px-4 mt-4 bg-main justify-content-center"
                            type = "submit"
                            disabled={this.state.code.length != 4}   
                            Link to = {(this.state.pathName == "/home")? "/home" :null}                
                          >
                          Confirm OTP  
                          </CButton>
                            
                      {/* <CCol xs="4" className="text-right">
                            <CButton color="link" className="px-0" hidden={hidden} onClick={handleReset}>Change Email id?</CButton>
                          </CCol>
                          <CCol xs="4" className="text-right">
                            <CButton color="link" className="px-0" hidden={hidden} onClick={handleOTP}>Resend OTP</CButton>
                          </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
            
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </>
    );
  return isAdminAuth() ? (
    <Redirect to="/" />
  ) : (
    <div>
      <div className="row">
        <Navbar />
      </div>
      {show}
      <div className="row">
        <Footer />
      </div>
    </div>
  );
  }
}

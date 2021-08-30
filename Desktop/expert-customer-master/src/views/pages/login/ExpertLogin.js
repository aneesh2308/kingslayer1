import React, { useState } from "react";
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
  CSpinner
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import axios from "axios";

import { apiEndpoint as API_ENDPOINT, isAdminAuth } from "../../../config";

import { Redirect } from "react-router-dom";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const ExpertLogin = () => {
  //state to manage the OTP button
  // const [hidden, setHidden] = useState(true);

  // //state to manage the button name
  // const [btnName, setBtnName] = useState("Get OTP");

  //state to manage the link of button
  const [pathName, setPathName] = useState("#");

  //state to manage the email field
  // const [disable, setDisable] = useState(false);

  //state to manage the error message
  const [errMessage, setErrMessage] = useState("");

  const [email, setEmail] = useState("");
  const [wait,setWait]=useState(false);

  //state to manage the fields
  const [input, setInput] = useState({
    mobile: "",
    password: "",
  });

  //state to manage the randomID
  // const [token, setToken] = useState();

  function handleLogin() {
    console.log("handleLogin", input);
    setWait(true)
    axios
      .post(
        API_ENDPOINT + "api/v1/expert/login",
        {
          mobile: input["mobile"],
          password: input["password"],
          "email" : "amit@gmail.com"
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      )
      // .then((data) => data.json())
      .then((response) => {
        setWait(false)
        console.log("verify", response);
        if (
          response.status === 200 &&
          response.data.message === "success"
        ) {
          sessionStorage.setItem('adminAuthToken',response.data.accessToken);
          sessionStorage.setItem('adminAuth',true);
          sessionStorage.setItem("userType", response.data.userType)
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log("err", err);
        setWait(false)
        setErrMessage("Mobile number or password is not registered");
      });
  }
  function handleSubmit() {
    console.log("Input mobile and password message", input, errMessage);
    if (input["mobile"] !== "" && input["password"] !== "") {
      handleLogin();
      } else {
        console.log("Reached else");
        setErrMessage('Please input the details')
    }
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    console.log("Value recieved", value);

    if (name === "mobile") {
      if (value !== "" && Number(value)) {
        setInput((prevState) => {
          return {
            ...prevState,
            ["mobile"]: value,
          };
        });
        // setPathName("/dashboard");
        // setErrMessage((prevState) => {
        //   return {
        //     ...prevState,
        //     [name]: "",
        //   };
        // });
      } else {
        // setErrMessage((prevState) => {
        //   return {
        //     ...prevState,
        //     [name]: "Mobile should contain numbers only",
        //   };
        // });
      }
    } else if (name === "password") {
      if (value !== "") {
        setInput((prevState) => {
          return {
            ...prevState,
            ["password"]: value,
          };
        });
        // setPathName("/dashboard");
        // setErrMessage((prevState) => {
        //   return {
        //     ...prevState,
        //     [name]: "",
        //   };
        // });
      } else {
        // setErrMessage((prevState) => {
        //   return {
        //     ...prevState,
        //     [name]: "Please enter the password",
        //   };
        // });
        setPathName("");
      }
    }
  }
  var show;
  var btnText;
  
    if(wait){
      btnText=(
        <CSpinner
          color="white"
          size="sm"
        />
      )
    }else{
      btnText="Log In"
    }

    show=(
      <div className="c-app c-default-layout flex-row align-items-center"  style={{ minHeight: "50vh" }}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Mobile Number"
                        name="mobile"
                        autoComplete="mobile"
                        required
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete=""
                        name="password"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CCol xs="12">
                      <p style={{ color: "#e55353" }} color="danger">
                        {errMessage}
                      </p>
                    </CCol>
                    <CRow>
                      <CCol xs="4">
                        <Link to={pathName}>
                          <CButton
                            
                            className="px-4 bg-main"
                            onClick={handleSubmit}
                          >
                            {btnText}
                          </CButton>
                        </Link>
                      </CCol>
                      <CCol xs={8} className="d-flex justify-content-end">
                        <Link to="/sign-up"><p>Don't have account ?</p></Link>
                      </CCol>
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
    )
  
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
};

export default ExpertLogin;

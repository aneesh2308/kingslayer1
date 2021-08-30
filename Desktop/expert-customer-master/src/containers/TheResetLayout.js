// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CInput,
//   CInputGroup,
//   CInputGroupPrepend,
//   CInputGroupText,
//   CRow,
//   CLabel,
//   CSpinner,
//   CAlert,
//   CInputCheckbox,
// } from "@coreui/react";
// import axios from "axios";

// import { apiEndpoint as API_ENDPOINT, isAdminAuth } from "../config";

// import { Redirect } from "react-router-dom";
// import account from "../assets/images/account.png";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const ExpertLogin = () => {
//   const [pathName, setPathName] = useState("#");

//   //state to manage the error message
//   const [errMessage, setErrMessage] = useState("");

//   const [wait, setWait] = useState(false);

//   //state to manage the fields
//   const [input, setInput] = useState({
//     mobile: "",
//     newPassword: "",
//     otp: "",
//     loginWithPassword: true
//   });

//   const [newPassword, setnewPassword] = useState("");

//   //state to login with OTP
//   const [hidden, setHidden] = useState(true);
//   //state to manage the randomID

//   function handleLogin() {
//     console.log("handleLogin", newPassword);
//     setWait(true);
//     if(input["loginWithPassword"]){

//       axios
//         .post(
//           API_ENDPOINT + "api/v1/user/update-password",
//           {
//             newPassword:newPassword,
//             randomID:window.randomID,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json",
//               "Authorization":window.accessToken,
//             },
//           }
//         )
//         // .then((data) => data.json())
//         .then((response) => {
//           console.log("verify", response);
//           setWait(false);
//           if (response.status === 200 && response.data.message === "success") {
//             console.log(response)
//             sessionStorage.setItem("adminAuthToken", response.data.accessToken);
//             sessionStorage.setItem("adminAuth", true);
//             sessionStorage.setItem("userType", response.data.userType)
//             window.location.href = "/home";
//           }
//         })
//         .catch((err) => {
//           console.log("err", err);
//           setWait(false);
//           setErrMessage("Mobile number or password is not registered");
//         });
//     }else{
//       axios.post(API_ENDPOINT + "api/v1/user/loginotpverify", {
//         mobile: input["mobile"],
//         code: input["otp"],
//       },{
//         headers:{
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         }
//       }).then((response) => {
//         console.log(response)
//         if (response.status === 200 && response.data.message ==="Verified Successfully") {
//           console.log(response)
//           sessionStorage.setItem("adminAuthToken", response.data.accessToken);
//           sessionStorage.setItem("adminAuth", true);
//           sessionStorage.setItem("userType", response.data.userType)
//           window.location.href = "/home";
//         }
//       })
//     }
//   }
//   function handleSubmit() {
//     console.log("Input mobile and password message", input, errMessage);
//     if (input["mobile"] !== ""){
//       if(input["password"] !== "" || input["otp"] !==""){
//         handleLogin();
//       }
//     }else {
//       console.log("Reached else");
//       setErrMessage("Please input the details");
//     }
//   }

//   function logInWithOtp(){
//     setHidden(!hidden);
//     setInput((prevState) => {
//       return {
//         ...prevState,
//         ["loginWithPassword"]: false,
//       };
//     });
//     getOTP();
  
//   }

//   console.log(input);
//   function getOTP(){
//     axios.post(API_ENDPOINT+ "api/v1/user/login",{
//           mobile: input["mobile"],
//           password: input["password"],
//           loginWithPassword: false
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//       },
//     })
//     .then((response) => console.log(response))
//   }
//   function handleChange(event) {

//     let name = event.target.name;
//     let value = event.target.value;

//     if (name === "mobile") {
//       if (value !== "" && Number(value)) {
//         setInput((prevState) => {
//           return {
//             ...prevState,
//             ["mobile"]: value,
//           };
//         });
//         // setPathName("/dashboard");
//         // setErrMessage((prevState) => {
//         //   return {
//         //     ...prevState,
//         //     [name]: "",
//         //   };
//         // });
//       } else {
//         // setErrMessage((prevState) => {
//         //   return {
//         //     ...prevState,
//         //     [name]: "Mobile should contain numbers only",
//         //   };
//         // });
//       }
//     } else if (name === "password") {
//       if (value !== "") {
//         setInput((prevState) => {
//           return {
//             ...prevState,
//             ["password"]: value,
//             newPassword:value,
//           };
//         });
//         // setPathName("/dashboard");
//         // setErrMessage((prevState) => {
//         //   return {
//         //     ...prevState,
//         //     [name]: "",
//         //   };
//         // });
//       }else {
//         // setErrMessage((prevState) => {
//         //   return {
//         //     ...prevState,
//         //     [name]: "Please enter the password",
//         //   };
//         // });
//         setPathName("");
//       }
//     }else if(name === "otp"){
//       console.log("caught")
//       if (value !== "") {

//         setInput((prevState) => {
//           return {
//             ...prevState,
//             ["otp"]: value,
//           };
//         })
//       }
//     } 
//   }
//   var show, btnText;
//   if (wait) {
//     btnText = <CSpinner color="white" size="sm" />;
//   } else {
//     btnText = "Log In";
//   }
//   show = (
//     <>
//     <div
//       className="c-app c-default-layout flex-row align-items-center"
//       style={{ minHeight: "80vh" }}
//     >
      
//       <CContainer>
//       <CRow alignHorizontal="end">
//          <CCol lg={6} className="mb-1">
//          <div>
//             <CAlert color="primary" className="mb-0 text-dark" hidden={hidden} fade >OTP has been sent to your registered Mobile Number</CAlert>
//             </div>
//          </CCol>
//        </CRow>
//         <CRow className="justify-content-center mt-4">
//           <CCol md="6">
//           <img
//             src={account}
//             alt="account"
//             className="hero-image"
//             style={{ height: "auto", width: "100%" }}
//           />
//           </CCol>
//           <CCol md="6" className="p-3">
//             <CCardGroup>
//               <CCard className="p-4 br-1" style={{background: "transparent"}}>
//                 <CCardBody>
//                   <CForm>
//                     {/* <h1>Login</h1>
//                     <p className="text-muted">
//                       Sign In to your customer account
//                     </p> */}
//                     <CLabel>New Password</CLabel>
//                     <CInputGroup className="mb-3">
                      
//                       <CInputGroupPrepend>
//                         {/* <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText> */}
//                       </CInputGroupPrepend>
//                       <CInput
//                         type="text"
//                         placeholder=""
//                         name="mobile"
//                         autoComplete="mobile"
//                         required
//                         onChange={handleChange}
//                         className="br-1 bg-transp"
//                       />
//                     </CInputGroup>
//                     <CLabel hidden={!hidden}>Confirm new Password</CLabel>
//                     <CInputGroup className="mb-4" hidden={!hidden}>
//                       <CInputGroupPrepend>
//                         {/* <CInputGroupText>
//                           <CIcon name="cil-lock-locked" />
//                         </CInputGroupText> */}
//                       </CInputGroupPrepend>
//                       <CInput
//                         type="password"
//                         placeholder=""
//                         autoComplete=""
//                         name="password"
//                         onChange={handleChange}
//                         className="br-1 bg-transp"
//                         hidden={!hidden}
//                       />
//                     </CInputGroup>
//                     <CLabel hidden={hidden}>OTP</CLabel>
//                     <CInputGroup className="mb-4" hidden={hidden}>
//                       <CInputGroupPrepend>
//                         {/* <CInputGroupText>
//                           <CIcon name="cil-lock-locked" />
//                         </CInputGroupText> */}
//                       </CInputGroupPrepend>
//                       <CInput
//                         type="text"
//                         placeholder="Enter OTP"
//                         autoComplete=""
//                         name="otp"
//                         onChange={handleChange}
//                         className="br-1 bg-transp"
                        
//                       />
//                     </CInputGroup>
//                     <CCol xs="12">
//                       <p style={{ color: "#e55353" }} color="danger">
//                         {errMessage}
//                       </p>
//                     </CCol>
//                     <CRow>
                   
                    
                    
//                       <CCol>
//                         <Link to={pathName}>
//                           <CButton
//                             className="px-4 mt-4 bg-main"
//                             onClick={handleSubmit}
//                             block
//                           >
//                             Reset Password
//                           </CButton>
//                         </Link>
//                       </CCol>
//                       <CCol hidden={!hidden}>
//                       </CCol>
//                       {/* <CCol xs="4" className="text-right">
//                             <CButton color="link" className="px-0" hidden={hidden} onClick={handleReset}>Change Email id?</CButton>
//                           </CCol>
//                           <CCol xs="4" className="text-right">
//                             <CButton color="link" className="px-0" hidden={hidden} onClick={handleOTP}>Resend OTP</CButton>
//                           </CCol> */}
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
            
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//     </>
//   );

//   return isAdminAuth() ? (
//     <Redirect to="/" />
//   ) : (
//     <div>
//       <div className="row">
//         <Navbar />
//       </div>
//       {show}
//       <div className="row">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default ExpertLogin;
import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
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
import { apiEndpoint as API_ENDPOINT, isAdminAuth } from "../config";
import { Redirect } from "react-router-dom";
import account from "../assets/images/account.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OTPLayout from "./OTPLayout";

export default class TheResetLayout extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      newPassword:"",
      confirmnewPassword:"",
      pathName:null,
      errorMessage:"",
      wait:"",
      regexp : /^[0-9\b]+$/
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    this.setState({
    [event.target.name]: event.target.value,
      });
    this.state.errorMessage="";
  }

  handleSubmit(event) {
    const {  pathName, confirmnewPassword, newPassword, errorMessage } = this.state;
    console.log("Input mobile and password message", pathName, confirmnewPassword, newPassword, errorMessage,window.randomID,window.accessToken);
      if(newPassword === confirmnewPassword){
        axios.post(API_ENDPOINT + `api/v1/user/update-password`,
        {
          newPassword: newPassword,
          randomID: window.randomID,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization":window.accessToken,
          },
        }
      ).then(response => { 
        console.log("this is response "+response.status);
        this.setState({pathName:"/home"});
        if (response.status == 200 && response.data.success === true) {
          this.props.handleSuccessfulAuth(response.data);
        }
        window.location.href = "/home";
      })
      .catch(error => {
        console.log("login error", error);
        this.setState({errorMessage:"Sorry for invonvience.Please try later"});
      }); } 
      else{
        console.log("Reached else");
        this.setState({errorMessage:"Error!!!Make Sure password are same"});
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
      show = (
    <>
    <div
      className="c-app c-default-layout flex-row align-items-center"
      style={{ minHeight: "80vh" }}
    >
      
      <CContainer>
      <CRow alignHorizontal="end">
         <CCol lg={6} className="mb-1">
         <div>
            </div>
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
                <CAlert color="primary" className="mb-0 text-dark" hidden={this.state.pathName != "/home"}>Password has been reset</CAlert>
                <CAlert color="white" className="mb-0 text-dark"></CAlert>
                  <CForm onSubmit={this.handleSubmit}>
                    {/* <h1>Login</h1>
                    <p className="text-muted">
                      Sign In to your customer account
                    </p> */}
                    <CLabel>New Password</CLabel>
                    <CInputGroup className="mb-3">
                      
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder=""
                        name="newPassword"
                        autoComplete="newPassword"
                        required
                        value={this.state.newPassword}
                        onChange={this.handleChange}
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    <CLabel >Confirm new Password</CLabel>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder=""
                        autoComplete="confirmnewPassword"
                        name="confirmnewPassword"
                        value={this.state.confirmnewPassword}
                        onChange={this.handleChange}
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    {this.state.errorMessage && (
                        <p style={{ color: "#e55353" }} > {this.state.errorMessage} </p>
                    )}
                    <CRow>
                      <CCol>
                    
                          <CButton
                            className="px-4 mt-4 bg-main"
                            onClick={this.handleSubmit}
                            type = "submit"
                            disabled={(this.state.newPassword.length || this.state.confirmnewPassword.length ) == 0}    
                            link to = {(this.state.pathName=="/home")?"/home":null}
                            block
                          >
                            Reset Password
                          </CButton>
                    
                      </CCol>
                      <CCol>
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

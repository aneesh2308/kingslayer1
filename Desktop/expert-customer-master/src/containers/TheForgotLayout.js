// import React, { useState, Component } from "react";
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


// const TheForgotLayout = () => {
//   const [pathName, setPathName] = useState("#");

//   //state to manage the error message
//   const [errMessage, setErrMessage] = useState("");

//   const [wait, setWait] = useState(false);

//   //state to manage the fields
  // const [input, setInput] = useState({
  //   mobile: "",
  //   password: "",
  //   otp: "",
  //   loginWithPassword: true
  // });

//   //state to login with OTP
//   const [hidden, setHidden] = useState(true);
//   //state to manage the randomID

//   function handleLogin() {
//     console.log("handleLogin", input);
//     setWait(true);
//     if(input["loginWithPassword"]){
//       axios
//         .post(
//           API_ENDPOINT + "api/v1/user/login",
//           {
//             mobile: input["mobile"],
//             password: input["password"],
//             loginWithPassword: input["loginWithPassword"]
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json",
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
//         axios.get(API_ENDPOINT+ "api/v1/user/forgot-password")
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
//         handleLogin();
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
//   // function handleChange(event) {

//   //   let name = event.target.name;
//   //   let value = event.target.value;

//   //   console.log("Value recieved", value, name);

//   //   if (name === "mobile") {
//   //     if (value !== "" && Number(value)) {
//   //       setInput((prevState) => {
//   //         return {
//   //           ...prevState,
//   //           ["mobile"]: value,
//   //         };
//   //       });
//   //       // setPathName("/dashboard");
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "",
//   //       //   };
//   //       // });
//   //     } else {
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "Mobile should contain numbers only",
//   //       //   };
//   //       // });
//   //     }
//   //   } else if (name === "password") {
//   //     if (value !== "") {
//   //       setInput((prevState) => {
//   //         return {
//   //           ...prevState,
//   //           ["password"]: value,
//   //         };
//   //       });
//   //       // setPathName("/dashboard");
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "",
//   //       //   };
//   //       // });
//   //     }else {
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "Please enter the password",
//   //       //   };
//   //       // });
//   //       setPathName("");
//   //     }
//   //   }else if(name === "otp"){
//   //     console.log("caught")
//   //     if (value !== "") {

//   //       setInput((prevState) => {
//   //         return {
//   //           ...prevState,
//   //           ["otp"]: value,
//   //         };
//   //       })
//   //     }
//   //   } 
//   // }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
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
//                   <CForm controlId="mobile">
//                     {/* <h1>Login</h1>
//                     <p className="text-muted">
//                       Sign In to your customer account
//                     </p> */}
//                     <CLabel>Mobile Number</CLabel>
//                     <CInputGroup className="mb-3">
                      
//                       <CInputGroupPrepend>
//                         {/* <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText> */}
//                       </CInputGroupPrepend>
//                       <CInput
//                         type="text"
//                         placeholder="Mobile Number"
//                         name="mobile"
//                         autoComplete="mobile"
//                         required
//                         onChange={handleChange}
//                         className="br-1 bg-transp"
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
//                     <CCol lg={6}>
//                     </CCol>
                        
//                           <CButton
//                             block                          
//                             className="px-4 mt-4 bg-main justify-content-center"
//                             onSubmit={handleSubmit}
//                             type = "submit" 
//                             disabled={input["mobile"] == ""}
//                             Link to="/home/Reset-password"
//                           >
//                           Reset password  
//                           </CButton>
//                       <CCol hidden={!hidden}>
//                         <Link to={pathName}>
//                         </Link>
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

// export default import React, { useState, Component } from "react";
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


// const TheForgotLayout = () => {
//   const [pathName, setPathName] = useState("#");

//   //state to manage the error message
//   const [errMessage, setErrMessage] = useState("");

//   const [wait, setWait] = useState(false);

//   //state to manage the fields
//   const [input, setInput] = useState({
//     mobile: "",
//     password: "",
//     otp: "",
//     loginWithPassword: true
//   });

//   //state to login with OTP
//   const [hidden, setHidden] = useState(true);
//   //state to manage the randomID

//   function handleLogin() {
//     console.log("handleLogin", input);
//     setWait(true);
//     if(input["loginWithPassword"]){
//       axios
//         .post(
//           API_ENDPOINT + "api/v1/user/login",
//           {
//             mobile: input["mobile"],
//             password: input["password"],
//             loginWithPassword: input["loginWithPassword"]
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//               "Accept": "application/json",
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
//         axios.get(API_ENDPOINT+ "api/v1/user/forgot-password")
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
//         handleLogin();
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
//   // function handleChange(event) {

//   //   let name = event.target.name;
//   //   let value = event.target.value;

//   //   console.log("Value recieved", value, name);

//   //   if (name === "mobile") {
//   //     if (value !== "" && Number(value)) {
//   //       setInput((prevState) => {
//   //         return {
//   //           ...prevState,
//   //           ["mobile"]: value,
//   //         };
//   //       });
//   //       // setPathName("/dashboard");
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "",
//   //       //   };
//   //       // });
//   //     } else {
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "Mobile should contain numbers only",
//   //       //   };
//   //       // });
//   //     }
//   //   } else if (name === "password") {
//   //     if (value !== "") {
//   //       setInput((prevState) => {
//   //         return {
//   //           ...prevState,
//   //           ["password"]: value,
//   //         };
//   //       });
//   //       // setPathName("/dashboard");
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "",
//   //       //   };
//   //       // });
//   //     }else {
//   //       // setErrMessage((prevState) => {
//   //       //   return {
//   //       //     ...prevState,
//   //       //     [name]: "Please enter the password",
//   //       //   };
//   //       // });
//   //       setPathName("");
//   //     }
//   //   }else if(name === "otp"){
//   //     console.log("caught")
//   //     if (value !== "") {

//   //       setInput((prevState) => {
//   //         return {
//   //           ...prevState,
//   //           ["otp"]: value,
//   //         };
//   //       })
//   //     }
//   //   } 
//   // }
//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
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
//                   <CForm controlId="mobile">
//                     {/* <h1>Login</h1>
//                     <p className="text-muted">
//                       Sign In to your customer account
//                     </p> */}
//                     <CLabel>Mobile Number</CLabel>
//                     <CInputGroup className="mb-3">
                      
//                       <CInputGroupPrepend>
//                         {/* <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText> */}
//                       </CInputGroupPrepend>
//                       <CInput
//                         type="text"
//                         placeholder="Mobile Number"
//                         name="mobile"
//                         autoComplete="mobile"
//                         required
//                         onChange={handleChange}
//                         className="br-1 bg-transp"
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
//                     <CCol lg={6}>
//                     </CCol>
                        
//                           <CButton
//                             block                          
//                             className="px-4 mt-4 bg-main justify-content-center"
//                             onSubmit={handleSubmit}
//                             type = "submit" 
//                             disabled={input["mobile"] == ""}
//                             Link to="/home/Reset-password"
//                           >
//                           Reset password  
//                           </CButton>
//                       <CCol hidden={!hidden}>
//                         <Link to={pathName}>
//                         </Link>
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

// export default TheForgotLayout;
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
import { number } from "prop-types";
window.number=""
export default class TheForgotLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
      mobile:"",
      pathName:null,
      errorMessage:"",
      wait:"",
      regexp : /^[0-9\b]+$/
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    if (event.target.value === '' || this.state.regexp.test(event.target.value)){
    this.setState({
    [event.target.name]: event.target.value,
      });
    }
    this.state.errorMessage="";
  }

  handleSubmit(event) {
    const {  pathName, mobile, errorMessage } = this.state;
    console.log("Input mobile and password message", pathName, mobile, errorMessage); 
      axios.post(API_ENDPOINT + `api/v1/user/forgot-password`,
        {
          mobile: "91"+mobile,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then(response => { 
        console.log("this is response "+response.status);
        window.number=mobile;
        this.setState({pathName:"/home/OTP"});
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
                  <CForm onSubmit={this.handleSubmit}>
                    {/* <h1>Login</h1>
                    <p className="text-muted">
                      Sign In to your customer account
                    </p> */}
                    <CLabel>Mobile Number </CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        type="tel"
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
                        <p style={{ color: "#e55353" }} > {this.state.errorMessage} </p>
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
                            link to = {(this.state.pathName=="/home/OTP")?"/home/OTP":null} 
                          >
                          Reset password  
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

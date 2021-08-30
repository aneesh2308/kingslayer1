import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import axios from "axios";

import { apiEndpoint as  API_ENDPOINT, isAdminAuth} from '../../../config';

import { Redirect } from 'react-router-dom';

const Login = () => {
  
  //state to manage the OTP button
  const [hidden, setHidden] = useState(true);

  //state to manage the button name
  const [btnName, setBtnName] = useState("Get OTP");

  //state to manage the link of button
  const[pathName, setPathName] = useState("#");

  //state to manage the email field
  const[disable, setDisable] = useState(false);
 
  //state to manage the error message
  const[errMessage, setErrMessage] = useState(
    {
      email: "",
      OTP: "",
    }
  );

const [email, setEmail] =useState('');

  //state to manage the fields
  const [input, setInput] = useState(
    {
      email: "",
      OTP: "",
    }
  );

  //state to manage the randomID
  const [token, setToken] = useState();

function handleOTP(){
  console.log('[email] ',email);
  axios.post(API_ENDPOINT+"api/v1/admin/login" , {
    "email": email
  },{
  headers: {
      "Content-Type": 'application/json',
      "Accept": "application/json"
}
}).then((response) => {
    console.log(response);
    if(response.status === 200 && response.data.message==="otp_sent"){
      setToken(response.data.RandomID)
      setHidden(false);
      setBtnName("Login");
      setDisable(true);
    }

  }).catch((err) =>{
     console.log(err);
     setErrMessage({['email']: "Please enter valid email address"})
   })

   
}

function handleLogin(){
  console.log("handleLogin",input)
  axios.post(API_ENDPOINT+"api/v1/admin/otpverify" ,{
    "email": email,
    "code": input['OTP'], //
    "randomId": token//
   }).then((response) => {
     console.log('verify',response);
     if (response.status === 200 && response.data.message === "Verification_done"){
        sessionStorage.setItem('adminAuthToken',response.data.accessToken);
        sessionStorage.setItem('adminAuth',true);
        window.location.href = '/dashboard';
     }
   }).catch((err) =>{
     console.log('err',err);
     setErrMessage({['OTP']: "Please enter valid OTP"})
   })
}
  function handleSubmit(name) {
    const buttonName = name.btnName;
    console.log(buttonName);
    if(buttonName === "Get OTP"){
      console.log("Input email and error message", input, errMessage );
      if(email !== "" && errMessage['email'] === ""){
        // setHidden(false);
        // setBtnName("Login");
        // setDisable(true);
        handleOTP(); 
    }else{
      console.log("Reached else");
      setErrMessage(prevState =>{
        return {
          ...prevState,
          email: 'Please enter email id first'
        }
      });
    }
  }else if(buttonName === "Login"){
    console.log(errMessage);
    console.log('[OTP]', input['OTP']);
    if(input['OTP'] !== "" && errMessage['OTP'] === ""){
      //setErrMessage({['OTP']: ""})
      handleLogin();
    }else{
      setErrMessage({['OTP']: "Enter OTP"});
    }
  }
  console.log('Error message',errMessage['email']);
  }
  
  function handleReset() {
    setDisable(false);
    setHidden(true);
    setBtnName("Get OTP");
    setPathName("/");
    setErrMessage({
      email: "",
      OTP: "",
    });
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    
    console.log('Value recieved', value);
    const regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
    if(name === "email"){
      if(!regex.test(value)){
        setErrMessage({[name]: "Invalid Email address"})
      }else{
        setErrMessage({[name]: ""})
        //setInput({['email']: value});
        setEmail(value);
      }
    }else if(name === "OTP"){
      if (value !=="" && Number(value)) {
        setInput({['OTP']:value})
        // setPathName("/dashboard");
        setErrMessage({[name]: ""})
      }else{
        setErrMessage({[name]:"OTP should contain numbers only"});
        setPathName("")
      }
    }
  }

  
  return (
    isAdminAuth() ? <Redirect to='/' />
      :
    <div className="c-app c-default-layout flex-row align-items-center">
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
                      <CInput type="text" placeholder="Email id" name="email" autoComplete="email" onChange={handleChange} required disabled={disable}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <p style={{color: "#e55353"}} color="danger">{errMessage['email']}</p>
                      </CCol>
                    </CRow>
                    <CInputGroup className="mb-4" hidden={hidden}>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="OTP" autoComplete="" name="OTP" onChange={handleChange}/>
                    </CInputGroup>
                    <CCol xs="12">
                        <p style={{color: "#e55353"}} color="danger">{errMessage['OTP']}</p>
                      </CCol>
                    <CRow>
                      <CCol xs="4">
                        <Link to={pathName}>
                          <CButton color="primary" className="px-4" onClick={() => handleSubmit({btnName})}>{btnName}</CButton>
                        </Link>
                      </CCol>
                      <CCol xs="4" className="text-right">
                        <CButton color="link" className="px-0" hidden={hidden} onClick={handleReset}>Change Email id?</CButton>
                      </CCol>
                      <CCol xs="4" className="text-right">
                        <CButton color="link" className="px-0" hidden={hidden} onClick={handleOTP}>Resend OTP</CButton>
                      </CCol>
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
}

// const Login = () => {

//   //state to manage the OTP button
//   const [hidden, setHidden] = useState(true);

//   //state to manage the button name
//   const [btnName, setBtnName] = useState("Get OTP");

//   //state to manage the link of button
//   const[pathName, setPathName] = useState("#");

//   //state to manage the email field
//   const[disable, setDisable] = useState(false);

//   //state to manage the error message
//   const[errMessage, setErrMessage] = useState(
//     {
//       email: "",
//       OTP: "",
//     }
//   );

//   //state to manage the fields
//   const [input, setInput] = useState(
//     {
//       email: "",
//       OTP: "",
//     }
//   );

//   //state to manage the randomID
//   const [token, setToken] = useState();

// function handleOTP(){
//   axios.post(API_ENDPOINT+"api/v1/admin/auth/login" , {
//     "email": input['email']
//   },{
//     'Content-Type': 'application/json;charset=UTF-8',
//     "Access-Control-Allow-Origin": "*",
// }).then((response) => {
//     console.log(response);
//   })
// }

// function handleLogin(){
//   axios.post(API_ENDPOINT+"api/v1/admin/auth/verify" ,{
//     "email": input['email'],
//     "code": input['OTP'], //
//     "randomId": token//
//    }).then((response) => {
//      console.log(response);
//    }).catch((err) =>{
//      console.log(err);
//    })
// }
//   function handleSubmit(name, event) {
//     const buttonName = name.btnName;
//     console.log(buttonName);
//     console.log('Email recieved: ', input['email']);
//     if(buttonName === "Get OTP"){
//       console.log("Input email and error message", input, errMessage );
//       if(input['email'] !== "" && errMessage['email'] === ""){
//         console.log('Setting');
//         setHidden(false);
//         setBtnName("Login");
//         setDisable(true);
//         console.log('End');
//         //handleOTP();
//     }else{
//       console.log('Blank Email');
//       setErrMessage({['email']: "Please enter valid email address"});
//       console.log('Error message set:', errMessage);
//     }
//   }else if(buttonName === "Login"){
//     if(input['OTP'] !== "" && errMessage['OTP'] !== ""){
//       setErrMessage({['OTP']: "Enter OTP"});
//     }else{
//       handleLogin();
//     }
//   }
//   }

  
//   console.log('Error message',errMessage);
//   function handleReset() {
//     setDisable(false);
//     setHidden(true);
//     setBtnName("Get OTP");
//     setPathName("/");
//     setErrMessage({
//       email: "",
//       OTP: "",
//     });
//   }

//   function handleChange(event) {
//     let name = event.target.name;
//     let value = event.target.value;

//     console.log('Value recieved', value);
//     const regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

//     if(name === "email"){
//       if(!regex.test(value)){
//         setErrMessage({[name]: "Invalid Email address"})
//       }else{
//         setErrMessage({[name]: ""})
//         setInput({[name]: value});
//       }
//     }else if(name === "OTP"){
//       if (value !=="" && Number(value)) {
//         setInput({[name]:value})
//         setPathName("/dashboard");
//         setErrMessage({[name]: ""})
//       }else{
//         setErrMessage({[name]:"OTP should contain numbers only"});
//         setPathName("")
//       }
//     }
//   }

//   return (
//     <div className="c-app c-default-layout flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md="6">
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-muted">Sign In to your account</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-user" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput type="text" placeholder="Email id" name="email" autoComplete="email" onChange={handleChange} required disabled={disable}/>
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs="6">
//                         <p style={{color: "#e55353"}} color="danger">{errMessage['email']}</p>
//                       </CCol>
//                     </CRow>
//                     <CInputGroup className="mb-4" hidden={hidden}>
//                       <CInputGroupPrepend>
//                         <CInputGroupText>
//                           <CIcon name="cil-lock-locked" />
//                         </CInputGroupText>
//                       </CInputGroupPrepend>
//                       <CInput type="text" placeholder="OTP" autoComplete="" name="OTP" onChange={handleChange}/>
//                     </CInputGroup>
//                     <CCol xs="12">
//                         <p style={{color: "#e55353"}} color="danger">{errMessage['OTP']}</p>
//                       </CCol>
//                     <CRow>
//                       <CCol xs="4">
//                         <Link to={pathName}>
//                           <CButton color="primary" className="px-4" onClick={() => handleSubmit({btnName})}>{btnName}</CButton>
//                         </Link>
//                       </CCol>
//                       <CCol xs="4" className="text-right">
//                         <CButton color="link" className="px-0" hidden={hidden} onClick={handleReset}>Change Email id?</CButton>
//                       </CCol>
//                       <CCol xs="4" className="text-right">
//                         <CButton color="link" className="px-0" hidden={hidden} onClick={handleOTP}>Resend OTP</CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }
export default Login;

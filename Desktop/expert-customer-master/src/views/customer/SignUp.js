import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CInput,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow,
  CContainer,
  CInputGroup,
  CCardHeader,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import { apiEndpoint as API_ENDPOINT } from "../../config";
//import { values } from "core-js/fn/array";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import account from '../../assets/images/account.png'

const SignUp = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [hidden, setHidden] = useState(true);
  const [otpForm, setOtpForm] = useState(false);
  const [err, seterr] = useState(false);

  const signup = (values) => {
    formik.handleSubmit();
    console.log("Errors", formik.errors);
    if (formik.errors === null) {
      console.log("Values", values);
      console.log("Requesting server");
      axios
        .post(API_ENDPOINT + "api/v1/expert/signup", values, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const formik = useFormik({
    initialValues: {
      //fullname: "",
      firstname: "",
      lastname: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      email: "",
      dob: "",
      age: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Please enter your full name"),
      lastname: Yup.string().required("Please enter your last name"),
      mobile: Yup.number()
        .min(1111111111, "Enter a valid mobile number")
        .max(9999999999, "Enter a valid mobile number")
        .required("Please enter a mobile number"),
      email: Yup.string('Enter your Email')
      .email('Enter a valid Email')
      .required('Email is Required'),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Please enter a password"),
      confirmPassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string()
          .oneOf([Yup.ref("password")], "Both password need to be the same")
          .required("Please confirm password"),
      }),
      dob: Yup.string().required("Please enter date of birth"),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log(" what are value  " + values.firstname + " ");
      console.log("Errors", formik.errors);

      console.log("Sending these values", values);

      var data = {
        firstname: values.firstname,
        lastname: values.lastname,
        mobile: "91"+values.mobile,
        password: values.password,
        channel: "sms",
        email: values.email,
        dob: values.dob,
        age: values.age,
      };
      console.log(data);

      axios
        .post(API_ENDPOINT + "api/v1/user/signup", data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((response) => {
          console.log("i am here");
          console.log("response", response);
          if (
            response.status === 200 &&
            response.data.message === "OTP has been sent"
          ) {
            setOtpForm(true);
            setHidden(false);
          }
        })
        .catch((err) => {
          seterr(true);
          console.log(err.response);
        });
      // console.log("firstname", values.firstname );
    },
  });

  const handleSignUp = (values) => {
    console.log("function handleSignUP chala ");

    console.log("Values : " + values);
    var otpData = {
      firstname: values.firstname,
      lastname: values.lastname,
      mobile: "91"+values.mobile,
      password: values.password,
      email: values.email,
      dob: values.dob,
      code: values.OTP,
    };
    // console.log("firstname", values.firstname );
    console.log(otpData);
    console.log("sending..");
    axios
      .post(API_ENDPOINT + "api/v1/user/otpverify", otpData)
      .then((response) => {
        console.log("verify", response);

        if (
          response.status === 200 &&
          response.data.message === "Verified Successfully"
        ) {
          console.log("chala");
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log("errOTP", err.response);
      });
    console.log("okkk..");
  };

  return (
    <div>
      <Navbar />
      <div
        className="c-app c-default-layout flex-row align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <CContainer>
          <CRow className="justify-content-center mt-5">
            <CCol lg="6">
            <img
            src={account}
            alt="account"
            className="hero-image mt-6"
            style={{ height: "auto", width: "100%" }}
          />
            </CCol>
            <CCol md="6" lg="6">
              <CCard
                className="mx-4 br-1"
                style={{ background: "transparent" }}
              >
                <CCardHeader
                  className="bg-transp"
                  style={{ borderBottom: "1px solid black" }}
                >
                  <CRow alignHorizontal="center">
                    <CCol>
                      <h3 className="fw-700">Join Fexperts</h3>
                    </CCol>
                    <CCol>
                      <p className="mt-1">Are you an expert? <Link to="/sign-up">Register here</Link></p>
                    </CCol>
                  </CRow>
                </CCardHeader>
                <CCardBody className="p-4">
                  <CForm onSubmit={formik.handleSubmit} hidden={otpForm}>
                    {err ? (
                      <div className="alert mt-0 p-0">
                        User Already Register
                      </div>
                    ) : null}
                    <CLabel>Firstname</CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText> */}
                      </CInputGroupPrepend>

                      <CInput
                        id="firstname"
                        name="firstname"
                        type="firstname"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        placeholder="First name"
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    {formik.touched.firstname && formik.errors.firstname ? (
                      <div className="alert p-0">{formik.errors.firstname}</div>
                    ) : null}
                    <CLabel>Lastname</CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        id="lastname"
                        name="lastname"
                        type="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        placeholder="last name"
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    {formik.touched.lastname && formik.errors.lastname ? (
                      <div className="alert p-0">{formik.errors.lastname}</div>
                    ) : null}
                    <CLabel>Mobile No.</CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        id="mobile"
                        name="mobile"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile}
                        placeholder="Ex-9876543210"
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="alert mt-0 p-0">
                        {formik.errors.mobile}
                      </div>
                    ) : null}
                    <CLabel>Email</CLabel>
                    <CInputGroup className="mb-3" > 
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                        <CIcon name="cis-mailbox" />
                      </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        name="email"
                        type="text"
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Email"
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    {formik.touched.email && formik.errors.email ? (
                      <div className="alert mt-0 p-0">
                        {formik.errors.email}
                      </div>
                    ) : null}
                    <CRow>
                      <CCol md={8}>
                        <CLabel>Date of birth</CLabel>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            {/* <CInputGroupText>
                        <CIcon name="cil-calendar" />
                      </CInputGroupText> */}
                          </CInputGroupPrepend>
                          <CInput
                            name="dob"
                            type="date"
                            id="dob"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                            placeholder="Date of birth"
                            className="br-1 bg-transp"
                          />
                        </CInputGroup>
                        {formik.touched.dob && formik.errors.dob ? (
                          <div className="alert mt-0 p-0">
                            {formik.errors.dob}
                          </div>
                        ) : null}
                      </CCol>

                      <CCol md={4}>
                        <CLabel>Age</CLabel>
                        <CInputGroup className="mb-3">
                          <CInputGroupPrepend>
                            {/* <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText> */}
                          </CInputGroupPrepend>
                          <CInput
                            name="age"
                            type="text"
                            id="age"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.age}
                            placeholder="age"
                            className="br-1 bg-transp"
                          />
                        </CInputGroup>
                      </CCol>
                    </CRow>

                    <CLabel>Password</CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder="Password"
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="alert p-0">{formik.errors.password}</div>
                    ) : null}
                    <CLabel>Confirm Password</CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        placeholder="Password"
                        className="br-1 bg-transp"
                      />
                    </CInputGroup>
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div className="alert p-0">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                    <CButton className="bg-main" block type="submit">
                      Create an account
                    </CButton>
                  </CForm>
                  <CForm hidden={hidden}>
                    <CLabel>Enter OTP</CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Enter OTP"
                        autoComplete=""
                        name="OTP"
                        id="OTP"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="br-1"
                        // value={formik.values.code}
                      />
                    </CInputGroup>

                    {formik.touched.otp && formik.errors.otp ? (
                      <div className="alert mt-0 p-0">{formik.errors.otp}</div>
                    ) : null}

                    <CButton
                      color="primary"
                      className="px-4"
                      block
                      onClick={() => handleSignUp(formik.values)}
                    >
                      Verify OTP
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      <Footer />
    </div>
  );
};
export default SignUp;

import React, {useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
import Footer from "../../components/Footer";
import { apiEndpoint as API_ENDPOINT } from "../../config";
//import { values } from "core-js/fn/array";

const SignUp = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const [hidden, setHidden] = useState(true);
  const [otpForm, setOtpForm] = useState(false);

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
      mobile: "+91",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Please enter your full name"),
      lastname: Yup.string().required("Please enter your last name"),
      mobile: Yup.number()
        .min(1111111111, "Enter a valid mobile number")
        .required("Please enter a mobile number"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Please enter a password"),
      confirmPassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string()
          .oneOf([Yup.ref("password")], "Both password need to be the same")
          .required("Please confirm password"),
      }),
    }),
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      console.log(" what are value  " + values.firstname + " ");
      console.log("Errors", formik.errors);

      console.log("Sending these values", values);

      var data = {
        firstname: values.firstname,
        lastname: values.lastname,
        mobile: values.mobile,
        password: values.password,
        channel: "sms",
      };

      axios
        .post(API_ENDPOINT + "api/v1/expert/signup", data, {
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
          console.log(err);
        });
      // console.log("firstname", values.firstname );
    },
  });

  function handleSignUp(values) {
    console.log("function handleSignUP chala ");

    console.log("Values : " + values.code);
    var otpData = {
      firstname: values.firstname,
      lastname: values.lastname,
      mobile: values.mobile,
      password: values.password,
      code: values.code,
    };
    // console.log("firstname", values.firstname );
    console.log("otp", values);

    axios
      .post(API_ENDPOINT + "api/v1/expert/otpverify", otpData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("verify", response);
        if (
          response.status === 200 &&
          response.data.message === "Verified Successfully"
        ) {
          console.log("chala");
          window.location.href = "/expert";
        }
      })
      .catch((err) => {
        console.log("errOTP", err.response);
      });
  }

  return (
    <div>
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={formik.handleSubmit} hidden={otpForm}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CLabel>Firstname</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="firstname"
                      name="firstname"
                      type="firstname"
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                      placeholder="First name"
                    />
                  </CInputGroup>
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="alert p-0">{formik.errors.firstname}</div>
                  ) : null}
                  <CLabel>Lastname</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="lastname"
                      name="lastname"
                      type="lastname"
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                      placeholder="last name"
                    />
                  </CInputGroup>
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="alert p-0">{formik.errors.lastname}</div>
                  ) : null}
                  <CLabel>Mobile No.</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="mobile"
                      name="mobile"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                      placeholder="Mobile number"
                    />
                  </CInputGroup>
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div className="alert mt-0 p-0">{formik.errors.mobile}</div>
                  ) : null}
                  <CLabel>Password</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      placeholder="Password"
                    />
                  </CInputGroup>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="alert p-0">{formik.errors.password}</div>
                  ) : null}
                  <CLabel>Confirm Password</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      placeholder="Password"
                    />
                  </CInputGroup>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="alert p-0">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                  <CButton color="primary" block type="submit">
                    Create an account
                  </CButton>
                </CForm>
                <CForm hidden={hidden}>
                  <CLabel>Enter OTP</CLabel>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Enter OTP"
                      autoComplete=""
                      name="OTP"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
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
                    type="submit"
                    onClick={handleSignUp(formik.values)}
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

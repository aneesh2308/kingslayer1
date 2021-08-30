import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {apiEndpoint as API_ENDPOINT} from '../config';
import { FaUserAlt, FaPhoneAlt, FaLock } from "react-icons/fa";
const UserSignUp = () => {

  const [hidden, setHidden] = useState(true);
  const [otpForm, setOtpForm] = useState(false);
  const [err,seterr]=useState(false)

    const signup = (values) => {
        formik.handleSubmit()
        console.log('Errors', formik.errors);
        if(formik.errors === null){
            console.log('Values', values);
            console.log('Requesting server');
        axios.post(API_ENDPOINT + 'api/v1/expert/signup',values,{
            headers:{
              "Content-Type": 'application/json',
              "Accept": "application/json"
            }
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
        }
    }

  const formik = useFormik({
    initialValues: {
      //fullname: "",
      firstname:"",
      lastname:"",
      mobile: "+91",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "Must be 3 characters or more")
        .required("Please enter your full name"),
        lastname: Yup.string()
        .required("Please enter your last name"),
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
      console.log(" what are value  "+values.firstname+" ")
      console.log('Errors', formik.errors);

          console.log('Sending these values', values);

          var data = {
              "firstname": values.firstname,
              "lastname": values.lastname,
              "mobile": values.mobile,
              "password": values.password,
              "channel": "sms"

             }
             console.log(data)

          axios.post(API_ENDPOINT + 'api/v1/user/signup', data,{
            headers:{
              "Content-Type": 'application/json',
              "Accept": "application/json"
            }
        }).then((response) => {
          console.log("i am here")
            console.log("response",response);
            if(response.status === 200 && response.data.message ==="OTP has been sent"){
              setOtpForm(true);
              setHidden(false);

            }
        }).catch((err) => {
            seterr(true)
            console.log(err.response);
        })
// console.log("firstname", values.firstname );

    },

  });

  const handleSignUp=(values)=>{
    console.log("function handleSignUP chala ")

     console.log("Values : "+values)
         var otpData = {

            "firstname": values.firstname,
            "lastname": values.lastname,
            "mobile": values.mobile,
            "password": values.password,
            "code": values.OTP

     }
     // console.log("firstname", values.firstname );
      console.log( otpData);
     console.log("sending..")
   axios.post(API_ENDPOINT+"api/v1/user/otpverify", otpData).then((response) => {

      console.log('verify',response);

      if (response.status === 200 && response.data.message === "Verified Successfully"){
         console.log("chala")
         window.location.href = '/';
      }
    }).catch((err) =>{
      console.log('errOTP',err.response);

    })
    console.log("okkk..")

}





  return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-1 col-lg-7 col-xl-6">
            <div className="m-3 card mx-4">
              <div className="card-body text-dark p-4">
                <form onSubmit={formik.handleSubmit} hidden={otpForm}>
                  <h2>Register</h2>
                  {err ? <div className="alert mt-0 p-0">User Already Register</div> : null}
                  <p className="text-muted">Create your customer account</p>
                  <label>First name</label>
                  <div className="input-group mb-3">
                    <div className="flex-nowrap">
                      <div className="input-group-text">
                        <FaUserAlt size="1.5rem" className="text-muted" />
                      </div>
                    </div>

                    <input
                    className="form-control"
                      id="firstname"
                      name="firstname"
                      type="firstname"
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                      placeholder="First name"
                    />
                  </div>
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="text-danger alert p-0">{formik.errors.firstname}</div>
                  ) : null}
                   <label>Last name</label>
                  <div className=" input-group mb-3">
                    <div className="flex-nowrap">
                      <div className="input-group-text">
                      <FaUserAlt size="1.5rem" className="text-muted" />
                      </div>
                    </div>
                    <input
                    className="form-control"
                      id="lastname"
                      name="lastname"
                      type="lastname"
                      onChange={formik.handleChange}
                      value={formik.values.lastname}
                      placeholder="last name"
                    />
                  </div>
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="text-danger alert p-0">{formik.errors.lastname}</div>
                  ) : null}
                  <label className="form-label">Mobile No.</label>
                  <div className="input-group mb-3">
                    <div className="flex-nowrap">
                      <div className="input-group-text">
                      <FaPhoneAlt size="1.5rem" className="text-muted" />
                      </div>
                    </div>
                    <input
                    className="form-control"
                      id="mobile"
                      name="mobile"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mobile}
                      placeholder="Mobile number"
                    />
                  </div>
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div className=" text-danger alert mt-0 p-0">{formik.errors.mobile}</div>
                  ) : null}
                  <label>Password</label>
                  <div className="input-group mb-3">
                    <div className="flex-nowrap">
                      <div className="input-group-text">
                      <FaLock size="1.5rem" className="text-muted" />
                      </div>
                    </div>
                    <input
                    className="form-control"
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      placeholder="Password"
                    />
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="alert text-danger p-0">{formik.errors.password}</div>
                  ) : null}
                  <label>Confirm Password</label>
                  <div className="input-group mb-3">
                    <div className="flex-nowrap">
                      <div className="input-group-text">
                      <FaLock size="1.5rem" className="text-muted" />
                      </div>
                    </div>
                    <input
                    className="form-control"
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      placeholder="Password"
                    />
                  </div>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <div className="text-danger alert p-0">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                  <div class="d-grid gap-2">

                  <button className="btn bg-main mt-3" color="primary" block>
                    Create an account
                  </button>
                  </div>
                </form>
                <form hidden={hidden} >

                  <label>Enter OTP</label>
                  <div className="input-group mb-3">
                    <div className="flex-nowrap">
                      <div className="input-group-text">
                        {/* <CIcon name="cil-lock-locked" /> */}
                      </div>
                    </div>
                    <input
                    className="form-control"
                      type="text"
                      placeholder="Enter OTP"
                      autoComplete=""
                      name="OTP"
                      id="OTP"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      // value={formik.values.code}
                    />
                  </div>

                  {formik.touched.otp && formik.errors.otp ? (
                    <div className="alert mt-0 p-0">{formik.errors.otp}</div>
                  ) : null}


                    <button color="primary" className="px-4" block  onClick={()=>handleSignUp(formik.values)} >
                      Verify OTP
                    </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default UserSignUp;

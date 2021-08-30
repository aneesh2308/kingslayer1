import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiEndpoint as API_ENDPOINT, isAdminAuth } from "../config";
import { Redirect } from "react-router-dom";

const UserLogin = () => {
  //state to manage the OTP button
  const [hidden, setHidden] = useState(true);

  //state to manage the button name
  const [btnName, setBtnName] = useState("Get OTP");

  //state to manage the link of button
  const [pathName, setPathName] = useState("#");

  //state to manage the email field
  const [disable, setDisable] = useState(false);

  //state to manage the error message
  const [errMessage, setErrMessage] = useState("");

  const [email, setEmail] = useState("");

  const [wait,setWait]=useState(false)

  //state to manage the fields
  const [input, setInput] = useState({
    mobile: "",
    password: "",
  });

  //state to manage the randomID
  const [token, setToken] = useState();

  function handleLogin() {
    console.log("handleLogin", input);
    setWait(true)
    axios
      .post(
        API_ENDPOINT + "api/v1/user/login",
        {
          mobile: input["mobile"],
          password: input["password"],
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
        console.log("verify", response);
        setWait(false)
        if (
          response.status === 200 &&
          response.data.message === "success"
        ) {
          sessionStorage.setItem('adminAuthToken',response.data.accessToken);
          sessionStorage.setItem('adminAuth',true);
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
  if(wait){
    show=(
      <div >
          {/* <CSpinner
              className="d-flex justify-content-between align-items-center"
              style={{width:'4rem', height:'4rem'}}
              color="primary"
              variant="gr)ow"
              /> */}
      </div>
    )
  }else{
        show=(
          <div className="bg-main d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                {/* <CCardGroup> */}
                  <div className="card text-dark p-4 mt-15 mb-15">
                    <div className="card-body">
                      <form>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your customer account</p>
                        <div className="input-group mb-3">
                          <div className="flex-nowrap">
                            <div className="input-group-text">
                              {/* <CIcon name="cil-user" /> */}
                            </div>
                          </div>
                          <input
                          className="form-control"
                            type="text"
                            placeholder="Mobile Number"
                            name="mobile"
                            autoComplete="mobile"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="input-group mb-4">
                          <div className="flex-nowrap">
                            <div className="input-group-text">
                              {/* <CIcon name="cil-lock-locked" /> */}
                            </div>
                          </div>
                          <input
                          className="form-control"
                            type="password"
                            placeholder="Password"
                            autoComplete=""
                            name="password"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-xs-12">
                          <p style={{ color: "#e55353" }} color="danger">
                            {errMessage}
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-xs-4">
                            <Link to={pathName}>
                            <div class="d-grid gap-2">

                              <button
                                color="primary"
                                className="btn bg-main px-4"
                                onClick={handleSubmit}
                              >
                                Log In
                              </button>
                            </div>
                            </Link>
                          </div>
                          {/* <CCol xs="4" className="text-right">
                            <CButton color="link" className="px-0" hidden={hidden} onClick={handleReset}>Change Email id?</CButton>
                          </CCol>
                          <CCol xs="4" className="text-right">
                            <CButton color="link" className="px-0" hidden={hidden} onClick={handleOTP}>Resend OTP</CButton>
                          </CCol> */}
                        </div>
                      </form>
                    </div>
                  </div>
                {/* </CCardGroup> */}
              </div>
            </div>
          </div>
        </div>
        )
  }
  return isAdminAuth() ? (
    <Redirect to="/" />
  ) : (
          <div>
            {show}
          </div>
  );
};

export default UserLogin;

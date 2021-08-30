import React, { useEffect, useState } from "react";
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
} from "@coreui/react";
import { useDispatch } from "react-redux";

import CIcon from "@coreui/icons-react";
import { auth } from "../../../config/fbconfig";
import db from "../../../config/fbconfig";
const Login = ({ ...props }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    username: "",
    password: "",
    message: "",
    loading: true,
  });

  useEffect(() => {
    const checkLoggedInuser = async () => {
      setState({
        ...state,
        loading: true,
      });
      try {
        const loggedUserInRole = localStorage.getItem("role");
        if (loggedUserInRole) {
          dispatch({ type: "set", role: loggedUserInRole, loggedIn: true });
          props.history.push("/");
          return true;
        }
      } catch (error) {
        console.error(error);
      }
      setState({ ...state, loading: false });
    };
    checkLoggedInuser();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
      message: "",
    }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();

    if (state.username.length && state.password.length) {
      setState({ ...state, loading: true });
      auth
        .signInWithEmailAndPassword("admin@gmail.com", "admin1234")
        .then((data) => {
          return db
            .collection("admins")
            .where("username", "==", state.username)
            .where("password", "==", state.password)
            .get();
        })
        .then((snap) => {
          if (snap.docs.length <= 0) {
            auth.signOut();
            setState((prevState) => ({
              ...prevState,
              loading: false,
              message: "Invalid Username/Password",
            }));
            return;
          }
          const doc = snap.docs[0];
          if (
            doc.data().username === state.username &&
            doc.data().password === state.password
          ) {
            dispatch({ type: "set", role: "admin", loggedIn: true });
            localStorage.setItem("institute", doc.data()?.institute_id);
            localStorage.setItem("admin_id", doc.id);
            props.history.push("/");
          } else {
            auth.signOut();
            setState((prevState) => ({
              ...prevState,
              loading: false,
              message: "Invalid Username/Password",
            }));
          }
        })
        .catch((err) => {
          setState((prevState) => ({
            ...prevState,
            loading: false,
            message: "Invalid Username/Password",
          }));
        });
    } else {
      setState((prevState) => ({
        ...prevState,
        loading: false,
        message: "Both fields are mandatory",
      }));
    }
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center justify-content-center">
      {state.loading ? (
        <span style={{ fontSize: "16px" }}>Please Wait...</span>
      ) : (
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
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
                          value={state.username}
                          id="username"
                          onChange={handleChange}
                          placeholder="Username"
                          autoComplete="username"
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
                          value={state.password}
                          id="password"
                          onChange={handleChange}
                          placeholder="password"
                          autoComplete="current-password"
                        />
                      </CInputGroup>
                      <p className="text-danger">{state.message}</p>
                      <CRow>
                        <CCol xs="6">
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={handleLoginClick}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Link to="/register">
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
};

export default Login;
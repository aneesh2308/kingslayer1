import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CInput,
  CLabel,
  CRow,
  CSelect,
  CSpinner,
  CTextarea,
} from "@coreui/react";
import { Alert, AlertTitle } from "@material-ui/lab";
import axios from "axios";
import React, { Component } from "react";
import { adminAuthToken } from "../../config";
// import SideBar from "../../containers/TheExpertSidebar";
class Organization extends Component {
  state = {
    file: null,
    serverUrl: null,
    name: null,
    url: null,
    website: null,
    companySize: null,
    companyType: null,
    about: null,
    wait: false,
    check: true,
    address: null,
    location: null,
    success: false,
  };
  globalHandler = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "url") {
      this.setState({ url: value });
    } else if (name === "name") {
      this.setState({ name: value });
    } else if (name === "website") {
      this.setState({ website: value });
    } else if (name === "companySize") {
      this.setState({ companySize: value });
    } else if (name === "CompanyType") {
      this.setState({ companyType: value });
    } else if (name === "aboutname") {
      this.setState({ about: value });
    } else if (name === "address") {
      this.setState({ address: value });
    } else if (name === "location") {
      this.setState({ location: value });
    }
  };
  fileHandler = (e) => {
    this.setState({ file: e.target.files[0] }, () => {
      console.log(this.state.file);
    });
  };
  checkBox = () => {
    let fine = !this.state.check;
    this.setState({ check: fine });
  };
  imgUpload = () => {
    let config = {
      headers: {
        Authorization: adminAuthToken,
      },
    };

    const fd = new FormData();
    fd.append("orgLogo", this.state.file);
    console.log(fd);
    console.log(this.state);
    this.setState({ wait: true });
    axios
      .put(
        "http://35.223.86.66:3000/api/v1/expert/organization/uploadlogo",
        fd,
        config
      )
      .then((res) => {
        if (res.status === 200) {
          this.setState({ serverUrl: res.data.data }, () => {
            console.log(this.state);
            let config = {
              headers: {
                Authorization: adminAuthToken,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            };

            let data = {
              name: this.state.name,
              orgUserName: this.state.name,
              logo: this.state.serverUrl,
              email: "kush1280@gmail.com",
              website: this.state.website,
              industry: "xyz",
              companySize: this.state.companySize,
              companyType: this.state.companyType,
              about: this.state.about,
              owner: "600400878594d4effe06b8e9",
              members: "5fcf1f6b3987071558620206",
            };
            axios
              .post(
                "http://35.223.86.66:3000/api/v1/expert/organization",
                data,
                config
              )
              .then((res) => {
                console.log(res.data);
                this.setState({ wait: false });
                this.setState({ success: true });
                setTimeout(() => {
                  this.setState({ success: false });
                }, 2000);
              })
              .catch((err) => {
                console.log(err.body);
              });
          });
        }
      });
  };
  render() {
    let show;
    if (this.state.wait) {
      show = (
        <CRow style={{ height: "700px" }}>
          <CCol
            className="col-md-1 col-sm-12 mx-auto"
            style={{ paddingTop: "300px" }}
          >
            <CSpinner
              color="bg-main"
              style={{ width: "4rem", height: "4rem", paddingTop: "40%" }}
            />
          </CCol>
        </CRow>
      );
    } else {
      let alert;
      if (this.state.success) {
        alert = (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Organization created Successfully
          </Alert>
        );
      } else {
        alert = null;
      }
      show = (
        <div className="c-app c-default-layout">
          {/* <SideBar /> */}
          <CContainer>
            {alert}
            <CRow className="mt-5" style={{ color: "#17345F" }}>
              <div className="d-flex justify-content-center">
                <h1 style={{ fontWeight: "bold" }}>Create Organization</h1>
              </div>
            </CRow>

            <CRow className="mt-4">
              <CCard className="col-md-6 mx-auto">
                <CCardBody>
                  <h3 style={{ color: "#17345F", fontWeight: "bold" }}>
                    Basic Details
                  </h3>
                  <div className="mb-4">
                    <CLabel className="mb-2">Name</CLabel>
                    <CInput
                      name="name"
                      onChange={(e) => {
                        this.globalHandler(e);
                      }}
                    ></CInput>
                  </div>

                  <div className="mb-3">
                    <CLabel className="mb-1">Flexpert public url</CLabel>
                    <div className="d-flex">
                      <div>
                        <p className="mt-2">flexpert.com/Organization/</p>
                      </div>
                      <div>
                        <CInput
                          className="m-1"
                          name="url"
                          onChange={(e) => {
                            this.globalHandler(e);
                          }}
                        ></CInput>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <CLabel className="mb-2">Website</CLabel>
                    <CInput
                      defaultValue="www."
                      name="website"
                      onChange={(e) => {
                        this.globalHandler(e);
                      }}
                    />
                    <p className="m-1">This is your external website</p>
                  </div>

                  <div className="mb-4">
                    <CLabel className="mb-2">Location</CLabel>
                    <CInput
                      name="location"
                      onChange={(e) => {
                        this.globalHandler(e);
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <CLabel className="mb-2">Address</CLabel>
                    <CTextarea
                      name="address"
                      onChange={(e) => {
                        this.globalHandler(e);
                      }}
                    />
                  </div>
                </CCardBody>
              </CCard>
            </CRow>

            <CRow className="mt-2">
              <CCard className="col-md-6 mx-auto">
                <CCardBody>
                  <h3 style={{ color: "#17345F", fontWeight: "bold" }}>
                    Organizational Detail
                  </h3>
                  <div className="mb-4">
                    <CLabel className="mb-2">Industry</CLabel>
                    <CSelect></CSelect>
                  </div>

                  <div className="mb-4">
                    <CLabel className="mb-2">Company Size</CLabel>
                    <CSelect
                      onChange={(e) => {
                        this.globalHandler(e);
                      }}
                      name="companySize"
                    >
                      <option value="">select company size</option>
                      <option value="1-5">1-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-25">11-25</option>
                      <option value="26-50">26-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </CSelect>
                  </div>

                  <div className="mb-4">
                    <CLabel className="mb-2">Company Type</CLabel>
                    <CSelect
                      name="CompanyType"
                      onChange={(e) => {
                        this.globalHandler(e);
                      }}
                    >
                      <option value="">select company type </option>
                      <option value="Public company">Public company</option>
                      <option value="Self employed">Self employed</option>
                      <option value="Government agency">
                        Government agency
                      </option>
                      <option value="Non profit">Non profit</option>
                      <option value="Sole proprietorship">
                        Sole proprietorship
                      </option>
                      <option value="Privately held">Privately held</option>
                      <option value="Partnership">Partnership</option>
                    </CSelect>
                  </div>
                </CCardBody>
              </CCard>
            </CRow>

            <CRow className="mt-2">
              <CCard className="col-md-6 mx-auto">
                <CCardBody>
                  <h3 style={{ color: "#17345F" }}>Page Identity</h3>

                  <div className="mb-4">
                    <CLabel className="mb-2">Logo</CLabel>
                    <CRow>
                      {/* <CCol md={8}>
                        <CInput
                          defaultValue="upload organization image"
                          disabled
                        />
                      </CCol> */}
                      <CCol md={12}>
                        <CInput
                          type="file"
                          name="logo"
                          accept="image/*"
                          onChange={(e) => this.fileHandler(e)}
                        />
                      </CCol>
                    </CRow>

                    <CRow className="mt-2">
                      <p>
                        300 x 300px recommended. JPG, JPEG, and PNG files
                        supported.
                      </p>
                    </CRow>
                  </div>

                  <div className="mb-4">
                    <CLabel className="mb-2">About</CLabel>
                    <CTextarea
                      onChange={(e) => {
                        this.globalHandler(e);
                      }}
                      name="aboutname"
                    ></CTextarea>
                  </div>

                  <div className="mb-4">
                    <CRow className="mt-2">
                      <CCol md={1}>
                        <input type="checkbox" onChange={this.checkBox} />
                      </CCol>
                      <CCol md={11}>
                        I verify that I am an authorised representative of this
                        organisation and have the right to act on its behalf in
                        the creation and management of this page. The
                        organization and I agree to the additional terms for
                        Pages.
                      </CCol>
                    </CRow>
                  </div>

                  <CRow className="mt-4 mb-1">
                    <CCol md="8"></CCol>
                    <CCol md="4">
                      <CButton
                        style={{ backgroundColor: "#17345F", color: "white" }}
                        onClick={this.imgUpload}
                        disabled={this.state.check}
                      >
                        Create Page
                      </CButton>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CRow>
          </CContainer>
        </div>
      );
    }
    return <div>{show}</div>;
  }
}
export default Organization;

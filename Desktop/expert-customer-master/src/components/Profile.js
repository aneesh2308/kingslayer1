import React, { Component } from "react";
import { adminAuthToken } from "../config";
import axios from "axios";
import profile from "../assets/images/thumb-3.jpg";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CInput,
  CLabel,
  CSpinner,
  CContainer,
  CTextarea,
  CImg,
} from "@coreui/react";
import {
  EmailIcon,
  WhatsappIcon,
  FacebookIcon,
  EmailShareButton,
  WhatsappShareButton,
  FacebookShareButton,
} from "react-share";
import { Alert, AlertTitle } from "@material-ui/lab";
import CIcon from "@coreui/icons-react";
import Icon from '@material-ui/icons/Edit';
class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      personalDetails: null,
      addressDetails: null,
      qualification: null,
      professionalDetails: null,
      profileDetails: null,
      inOfficeDetails: null,
      establishmentDetails: null,
      verificationDetails: null,
      accordion: -1,
      wait: true,
      data: null,
      success: false,
      img: null,
    };
  }
  getData = () => {
    axios
      .get("http://35.223.86.66:3000/api/v1/expert/dashboard/", {
        headers: {
          Authorization: adminAuthToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        this.setState({
          data: res.data,
        });

        if (!res.data.expert.personalDetails) {
          this.setState({ personalDetails: null });
        } else {
          this.setState({ personalDetails: res.data.expert.personalDetails });
        }

        if (!res.data.expert.addressDetails) {
          this.setState({ addressDetails: null });
        } else {
          this.setState({ addressDetails: res.data.expert.addressDetails });
        }

        if (!res.data.expert.professionalDetails) {
          this.setState({ professionalDetails: null });
        } else {
          this.setState({
            professionalDetails: res.data.expert.professionalDetails,
          });
        }

        if (!res.data.expert.inOfficeDetails) {
          this.setState({ inOfficeDetails: null });
        } else {
          this.setState({ inOfficeDetails: res.data.expert.inOfficeDetails });
        }
        this.setState({ wait: false });
      });
  };
  componentDidMount() {
    this.setState({ wait: true });
    this.getData();
  }
  check = (data) => {
    if (data !== null) {
      return data;
    }
    return "";
  };
  globalHandler = (e) => {
    var temp, name, value;
    switch (e.target.id) {
      case "personalDetails":
        console.log("i am here");
        temp = Object.assign({}, this.state.personalDetails);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            personalDetails: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      case "addressDetails":
        console.log("i am here");
        temp = Object.assign({}, this.state.addressDetails);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            addressDetails: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      case "qualification":
        console.log("i am here");
        temp = Object.assign({}, this.state.qualification);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            qualification: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      case "professionalDetails":
        console.log("i am here");
        temp = Object.assign({}, this.state.professionalDetails);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            professionalDetails: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      case "profileDetails":
        console.log("i am here");
        temp = Object.assign({}, this.state.profileDetails);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            profileDetails: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      case "verificationDetails":
        console.log("i am here");
        temp = Object.assign({}, this.state.verificationDetails);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            verificationDetails: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      case "establishmentDetails":
        console.log("i am here");
        temp = Object.assign({}, this.state.establishmentDetails);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            establishmentDetails: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      case "inOfficeDetails":
        console.log("i am here");
        temp = Object.assign({}, this.state.inOfficeDetails);
        console.log(temp);
        name = e.target.name;
        console.log(name);
        value = e.target.value;
        delete temp[name];
        temp[name] = value;
        console.log(temp);
        this.setState(
          {
            inOfficeDetails: temp,
          },
          () => {
            console.log(this.state);
          }
        );
        break;

      default:
        console.log("do nothing");
    }
  };
  fileHandler = (e) => {
    this.setState({ img: e.target.files[0] }, () => {
      console.log(this.state.img);
    });
  };
  submitHandler = () => {
    this.setState({ wait: true });
    console.log("coooool");
    console.log(this.state);
    let config = {
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let data = {
      addressDetails: { ...this.state.addressDetails },
      personalDetails: { ...this.state.personalDetails },
      qualification: { ...this.qualification },
      professionalDetails: { ...this.state.professionalDetails },
      profileDetails: { ...this.profileDetails },
      verificationDetails: { ...this.state.verificationDetails },
      establishmentDetails: { ...this.state.establishmentDetails },
      inOfficeDetails: { ...this.state.inOfficeDetails },
    };
    console.log(data);
    axios
      .patch(
        "http://35.223.86.66:3000/api/v1/expert/updateProfileDetails",
        data,
        config
      )
      .then((res) => {
        console.log("heere");
        console.log(res);
        this.setState({ success: true });
        let fd = new FormData();
        fd.append("profileImage", this.state.img);
        fd.append("mobile", this.state.personalDetails.mobile);
        console.log(fd);
        let config = {
          headers: {
            Authorization: adminAuthToken,
          },
        };
        if (this.state.img !== null) {
          axios
            .put(
              "http://35.223.86.66:3000/api/v1/expert/uploadimages",
              fd,
              config
            )
            .then((res) => {
              console.log(res);
              this.getData();
            });
        }
        setTimeout(() => {
          this.setState({ success: false });
        }, 3000);
        this.setState({ wait: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    if (this.state.wait) {
      return (
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
            Profile update Successfully
          </Alert>
        );
      } else {
        alert = null;
      }

      return (
        <div className="c-main">
          {alert}
          <CRow className="mt-3" style={{ color: "#17345F" }}>
            <div className="d-flex justify-content-center mb-4">
              <h1 style={{ fontWeight: "bold" }}>Manage Profile</h1>
            </div>
          </CRow>
          <CRow className="d-flex justify-content-space-around">
            <CCol md={6}>
              <CCard>
                <CCardBody>
                  <h3
                    className="mb-3"
                    style={{ color: "#17345F", fontWeight: "bold" }}
                  >
                    Basic Details
                  </h3>
                  <CRow className="d-flex justify-content-space-around mb-2">
                    <div className="col-md-6 mb-2">
                      <CLabel className="mb-1">First Name</CLabel>
                      <CInput
                        type="text"
                        name="firstname"
                        id="personalDetails"
                        defaultValue={
                          this.state.personalDetails === null
                            ? ""
                            : this.state.personalDetails.firstname === null
                            ? ""
                            : this.state.personalDetails.firstname
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </div>

                    <div className="col-md-6 mb-2">
                      <CLabel className="mb-1">Last Name</CLabel>
                      <CInput
                        type="text"
                        name="lastname"
                        id="personalDetails"
                        defaultValue={
                          this.state.personalDetails === null
                            ? ""
                            : this.state.personalDetails.lastname === null
                            ? ""
                            : this.state.personalDetails.lastname
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </div>
                  </CRow>

                  <CRow className="d-flex justify-content-space-around mb-2">
                    <div className="col-md-6 mb-2">
                      <CLabel>Email</CLabel>
                      <CInput
                        type="text"
                        name="email"
                        id="personalDetails"
                        defaultValue={
                          this.state.personalDetails === null
                            ? ""
                            : this.state.personalDetails.email === null
                            ? ""
                            : this.state.personalDetails.email
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </div>

                    <div className="col-md-6 mb-2">
                      <CLabel>Contact No</CLabel>
                      <CInput
                        type="text"
                        name="mobile"
                        id="personalDetails"
                        defaultValue={
                          this.state.personalDetails === null
                            ? ""
                            : this.state.personalDetails.mobile === null
                            ? ""
                            : this.state.personalDetails.mobile
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </div>
                  </CRow>

                  <CRow className="d-flex justify-content-space-around mb-2 mt-2">
                    <div className="col-md-6">
                      <CLabel>Gender</CLabel>
                      <CInput
                        type="text"
                        name="gender"
                        id="personalDetails"
                        defaultValue={
                          this.state.personalDetails === null
                            ? ""
                            : this.state.personalDetails.gender === null
                            ? ""
                            : this.state.personalDetails.gender
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </div>

                    <div className="col-md-6">
                      <CLabel>Date of birth</CLabel>
                      <CInput
                        type="text"
                        name="dateOfBirth"
                        id="personalDetails"
                        defaultValue={
                          this.state.personalDetails === null
                            ? ""
                            : this.state.personalDetails.dateOfBirth === null
                            ? ""
                            : this.state.personalDetails.dateOfBirth
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </div>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={6}>
              <CCard>
                <CCardBody>
                  <CRow className="d-flex align-items-center">
                    <CCol>
                      <CRow className="mb-4">
                        <img
                          src={
                            "http://35.223.86.66:3000" +
                            this.state.personalDetails.profileImage
                          }
                          style={{
                            borderRadius: "50%",
                            height: "150px",
                            width: "150px",
                          }}
                          className="testimonial-image"
                        ></img>
                      </CRow>
                      <CRow>
                        <CCol md={3} className="choose-img mx-auto">
                          <h5 style={{marginLeft:"16%"}}>{this.state.personalDetails.firstname} {this.state.personalDetails.lastname}                          
                           <label> <Icon style={{marginLeft : "50%"}}></Icon>
                          
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => this.fileHandler(e)}
                            ></input>
                          </label></h5>

                        </CCol>
                      </CRow>

                      <CRow>

                        <CCol md={12} className="text-center choose-img">
                          <p>Chartered Accountant</p>
                        </CCol>
                        <CCol md={12} className="text-center">
                          <p>
                            Hey there! I am Chartered Accountant with a 4+ years
                            of experience.
                          </p>
                        </CCol>
                      </CRow>
                      <CRow className="text-center mt-4">
                        <CCol md={4} className="text-right">
                          <FacebookShareButton>
                            <FacebookIcon size={32} round={true} />
                          </FacebookShareButton>
                        </CCol>
                        <CCol md={4}>
                          <EmailShareButton>
                            <EmailIcon size={32} round={true} />
                          </EmailShareButton>
                        </CCol>
                        <CCol md={4} className="text-left">
                          <WhatsappShareButton>
                            <WhatsappIcon size={32} round={true} />
                          </WhatsappShareButton>
                        </CCol>
                      </CRow>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <CRow className="d-flex justify-content-space-around">
            <CCol md="6">
              <CCard>
                <CCardBody>
                  <h3
                    className="mb-3"
                    style={{ color: "#17345F", fontWeight: "bold" }}
                  >
                    Educational details
                  </h3>
                  <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                    <CCol md={6}>
                      <CLabel>Qualification</CLabel>
                      <CInput
                        type="text"
                        name="degree"
                        id="qualification"
                        onChange={(e) => this.globalHandler(e)}
                        defaultValue={
                          this.state.qualification === null
                            ? ""
                            : this.state.qualification.degree === null
                            ? ""
                            : this.state.qualification.degree
                        }
                      ></CInput>
                    </CCol>

                    <CCol md={6}>
                      <CLabel>Year of passing</CLabel>
                      <CInput
                        type="text"
                        name="yearOfCompletion"
                        id="qualification"
                        onChange={(e) => this.globalHandler(e)}
                        defaultValue={
                          this.state.qualification === null
                            ? ""
                            : this.state.qualification.yearOfCompletion === null
                            ? ""
                            : this.state.qualification.yearOfCompletion
                        }
                      ></CInput>
                    </CCol>
                  </CRow>

                  <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                    <CCol md="6">
                      <CLabel>University</CLabel>
                      <CInput
                        type="text"
                        name="universityName"
                        id="qualification"
                        onChange={(e) => this.globalHandler(e)}
                        defaultValue={
                          this.state.qualification === null
                            ? ""
                            : this.state.qualification.universityName === null
                            ? ""
                            : this.state.qualification.universityName
                        }
                      ></CInput>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md="6">
              <CCard>
                <CCardBody>
                  <h3
                    className="mb-3"
                    style={{ color: "#17345F", fontWeight: "bold" }}
                  >
                    Brief profile
                  </h3>
                  <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                    <CCol md={12}>
                      <CLabel>Business description</CLabel>
                      <CTextarea
                        type="text"
                        name="businessDes"
                        id="professionalDetails"
                        onChange={(e) => this.globalHandler(e)}
                        defaultValue={
                          this.state.professionalDetails === null
                            ? ""
                            : this.state.professionalDetails.businessDes ===
                              null
                            ? ""
                            : this.state.professionalDetails.businessDes
                        }
                      ></CTextarea>
                    </CCol>
                  </CRow>

                  <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                    <CCol md={12}>
                      <CLabel>Experience</CLabel>
                      <CTextarea
                        type="text"
                        name="experienceDes"
                        id="professionalDetails"
                        onChange={(e) => this.globalHandler(e)}
                        defaultValue={
                          this.state.professionalDetails === null
                            ? ""
                            : this.state.professionalDetails.experienceDes ===
                              null
                            ? ""
                            : this.state.professionalDetails.experienceDes
                        }
                      ></CTextarea>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <CRow className="d-flex justify-content-space-around">
            <CCol md={6}>
              <CCard>
                <CCardBody>
                  <h3
                    className="mb-3"
                    style={{ color: "#17345F", fontWeight: "bold" }}
                  >
                    Professional details
                  </h3>
                  <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                    <CCol md={6}>
                      <CLabel>Work as/in</CLabel>
                      <CInput
                        type="text"
                        name="workInAs"
                        id="professionalDetails"
                        defaultValue={
                          this.state.professionalDetails === null
                            ? ""
                            : this.state.professionalDetails.workInAs === null
                            ? ""
                            : this.state.professionalDetails.workInAs
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>

                    <CCol md={6}>
                      <CLabel>Name of current organization</CLabel>
                      <CInput
                        type="text"
                        name="orgName"
                        id="establishmentDetails"
                        defaultValue={
                          this.state.establishmentDetails === null
                            ? ""
                            : this.state.establishmentDetails.orgName === null
                            ? ""
                            : this.state.establishmentDetails.orgName
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>
                  </CRow>

                  <CRow className="d-flex justify-content-space-around mb-2 mt-2">
                    <CCol md={6}>
                      <CLabel>City</CLabel>
                      <CInput
                        type="text"
                        name="orgCity"
                        id="establishmentDetails"
                        onChange={(e) => this.globalHandler(e)}
                        defaultValue={
                          this.state.establishmentDetails === null
                            ? ""
                            : this.state.establishmentDetails.orgCity === null
                            ? ""
                            : this.state.establishmentDetails.orgCity
                        }
                      ></CInput>
                    </CCol>

                    <CCol md={6}>
                      <CLabel>Expertise</CLabel>
                      <CInput
                        type="text"
                        name="expertise"
                        id="professionalDetails"
                        defaultValue={
                          this.state.establishmentDetails === null
                            ? ""
                            : this.state.establishmentDetails.orgCity === null
                            ? ""
                            : this.state.establishmentDetails.orgCity
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>
                  </CRow>

                  <CRow className="d-flex justify-content-space-around mb-2 mt-2">
                    <CCol md={6}>
                      <CLabel>Years of experience</CLabel>
                      <CInput
                        type="text"
                        name="yearOfExperience"
                        id="professionalDetails"
                        defaultValue={
                          this.state.professionalDetails === null
                            ? ""
                            : this.state.professionalDetails
                                .yearOfExperience === null
                            ? ""
                            : this.state.professionalDetails.yearOfExperience
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={6}>
              <CCard>
                <CCardBody>
                  <h3
                    className="mb-3"
                    style={{ color: "#17345F", fontWeight: "bold" }}
                  >
                    Verification
                  </h3>
                  <CRow>
                    <CCol md="6">
                      <CLabel>Identity proof</CLabel>
                      <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                        <CCol md={6}>
                          <CInput
                            defaultValue="upload organization image"
                            disabled
                          />
                        </CCol>
                        <CCol md={6}>
                          <CButton
                            style={{
                              backgroundColor: "#17345F",
                              color: "white",
                            }}
                          >
                            Choose file
                          </CButton>
                        </CCol>
                      </CRow>
                      <CRow className="mt-1">
                        <p>Please upload file size of maximum 2MB</p>
                      </CRow>
                    </CCol>
                    <CCol md="6">
                      <CLabel>Identity proof</CLabel>
                      <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                        <CCol md={6}>
                          <CInput
                            defaultValue="upload organization image"
                            disabled
                          />
                        </CCol>
                        <CCol md={6}>
                          <CButton
                            style={{
                              backgroundColor: "#17345F",
                              color: "white",
                            }}
                          >
                            Choose file
                          </CButton>
                        </CCol>
                      </CRow>
                      <CRow className="mt-1">
                        <p>Please upload file size of maximum 2MB</p>
                      </CRow>
                    </CCol>
                  </CRow>

                  <CLabel>Identity proof</CLabel>
                  <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                    <CCol md={8}>
                      <CInput
                        defaultValue="upload organization image"
                        disabled
                      />
                    </CCol>
                    <CCol md={4}>
                      <CButton
                        style={{ backgroundColor: "#17345F", color: "white" }}
                      >
                        Choose file
                      </CButton>
                    </CCol>
                  </CRow>
                  <CRow className="m-1">
                    <p>Please upload file size of maximum 2MB</p>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <CRow className="d-flex justify-content-space-around">
            <CCol md={6}>
              <CCard>
                <CCardBody>
                  <h3
                    className="mb-3"
                    style={{ color: "#17345F", fontWeight: "bold" }}
                  >
                    Details for customer
                  </h3>
                  <CRow className="d-flex justify-content-space-around mt-2 mb-2">
                    <CCol md={6}>
                      <CLabel>Available from</CLabel>
                      <CInput
                        type="text"
                        name="availableFrom"
                        id="inOfficeDetails"
                        defaultValue={
                          this.state.inOfficeDetails === null
                            ? ""
                            : this.state.inOfficeDetails.availableFrom === null
                            ? ""
                            : this.state.inOfficeDetails.availableFrom
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>

                    <CCol md={6}>
                      <CLabel>Available to</CLabel>
                      <CInput
                        type="text"
                        name="availableTill"
                        id="inOfficeDetails"
                        defaultValue={
                          this.state.inOfficeDetails === null
                            ? ""
                            : this.state.inOfficeDetails.availableTill === null
                            ? ""
                            : this.state.inOfficeDetails.availableTill
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>
                  </CRow>

                  <CRow className="d-flex justify-content-space-around mb-2 mt-2">
                    <CCol md={6}>
                      <CLabel>Location</CLabel>
                      <CInput
                        type="text"
                        name="orgLocality"
                        id="establishmentDetails"
                        defaultValue={
                          this.state.establishmentDetails === null
                            ? ""
                            : this.state.establishmentDetails.orgLocality ===
                              null
                            ? ""
                            : this.state.establishmentDetails.orgLocality
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>

                    <CCol md={6}>
                      <CLabel>Fees</CLabel>
                      <CInput
                        type="text"
                        name="feeDetail"
                        id="inOfficeDetails"
                        defaultValue={
                          this.state.inOfficeDetails === null
                            ? ""
                            : this.state.inOfficeDetails.feeDetail === null
                            ? ""
                            : this.state.inOfficeDetails.feeDetail
                        }
                        onChange={(e) => this.globalHandler(e)}
                      ></CInput>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <CContainer>
            <CRow>
              <div className="d-flex justify-content-end">
                <CButton
                  style={{ backgroundColor: "#17345F", color: "white" }}
                  onClick={this.submitHandler}
                >
                  Save changes
                </CButton>
              </div>
            </CRow>
          </CContainer>
        </div>
      );
    }
  }
}

export default Profile;

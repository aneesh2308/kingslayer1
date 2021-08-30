import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CImg,
  CInput,
  CLabel,
  CRow,
  CTextarea,
} from "@coreui/react";
import axios from "axios";
import React, { Component } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { apiEndpoint as API_ENDPOINT } from "../../config";

class ExpertProfile extends Component {
  constructor(props) {
    super();
    this.state = {
      personalDetails: {
        firstname: "",
        lastname: "",
        mobile: "",
        password: "",
        email: "",
        gender: "",
        profileImage: "",
        dateOfBirth: "",
        familyDetails: {
          totalMembers: "",
        },
        profileLink: "",
      },
      addressDetails: {
        city: "",
        fullAddress: "",
        location: "",
      },
      qualification: {
        degree: "",
        yearOfCompletion: "",
        qualificationDD: "",
        collegeName: "",
        universityName: "",
      },
      authentications: {
        otp: "",
        randomID: "",
        jwtToken: "",
      },
      professionalDetails: {
        workInAs: "",
        specialization: "",
        subSpecialization: "",
        expertise: "",
        yearOfExperience: "",
        nameOfCurrentOrgBusiness: "",
        socialProfileLinks: [
          {
            socialPlatformName: "",
            socialPlatformLink: "",
          },
        ],
        certificates: "",
        testimonials: "",
        articles: "",
        blog: "",
        businessDes: "",
        experienceDes: "",
      },
      profileDetails: {
        registrationNumber: "",
        registrationCouncil: "",
        registrationYear: "",
        gstNo: "",
        irdaRegistration: "",
        amfiRegistration: "",
      },
      verificationDetails: {
        identityProof: "",
        registrationProof: "",
        officeProof: "",
        establishmentProof: "",
      },
      establishmentDetails: {
        orgName: "",
        orgCity: "",
        orgLocality: "",
      },
      inOfficeDetails: {
        faceToFaceVisitTime: "",
        virtualVisitTime: "",
        feeDetail: "",
        availableFrom: "",
        availableTill: "",
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      bookings: [
        {
          bookingId: "",
        },
      ],
      status: {
        type: Boolean,
        default: false,
      },
    };
  }

  updateProfile() {
    console.log("Clicked");
    axios
      .put(API_ENDPOINT + "api/v1/expert/updateProfileDetails", this.state, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTcwMjA2NjY3NDYiLCJpYXQiOjE2MTAyMDY0NDR9.eD-2e5jxlUs-9hcGYJa1sSeFPGT62x2oFGZ8awn3PLE",
        },
      })
      .then((res) => {
        console.log("Response: ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="c-main">
        <CRow>
          <CCol md={8}>
            <CCard>
              <CCardHeader>Edit Profile</CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CForm>
                    <CRow>
                      <CCol md={6}>
                        <CLabel>Company</CLabel>
                        <CInput disabled value="ABC Organisation"></CInput>
                      </CCol>
                      <CCol md={3}>
                        <CLabel>Email address</CLabel>
                        <CInput
                          type="text"
                          value="abc@example.com"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                      <CCol md={3}>
                        <CLabel>Contact</CLabel>
                        <CInput
                          type="text"
                          value="92000000"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                    </CRow>
                    <CRow className="pt-4">
                      <CCol md={6}>
                        <CLabel>First name</CLabel>
                        <CInput
                          type="text"
                          value="John"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                      <CCol md={6}>
                        <CLabel>Last name</CLabel>
                        <CInput
                          type="text"
                          value="Doe"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                    </CRow>
                    <CRow className="pt-4">
                      <CCol md={12}>
                        <CLabel>Address</CLabel>
                        <CInput
                          type="text"
                          value="Street No. 123"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                    </CRow>
                    <CRow className="pt-4">
                      <CCol md={4}>
                        <CLabel>City</CLabel>
                        <CInput
                          type="text"
                          value="New York"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                        <CLabel>Country</CLabel>
                        <CInput
                          type="text"
                          value="United States"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                        <CLabel>Postal Code</CLabel>
                        <CInput
                          type="text"
                          value="11234"
                          onChange={() => ""}
                        ></CInput>
                      </CCol>
                    </CRow>
                    <CRow className="pt-4">
                      <CCol md="12">
                        <CLabel htmlFor="textarea-input" onChange={() => ""}>
                          About Me
                        </CLabel>
                      </CCol>
                      <CCol xs="12" md="12">
                        <CTextarea
                          name="textarea-input"
                          id="textarea-input"
                          rows="4"
                          placeholder="Content..."
                        />
                      </CCol>
                    </CRow>
                    <CRow className="pl-3 pt-4">
                      <CButton color="primary" onClick={this.updateProfile}>
                        Update Profile
                      </CButton>
                    </CRow>
                  </CForm>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md={4}>
            <CCard>
              <CCardBody>
                <CRow>
                  <div className="profile-avatar align-center">
                    <CImg
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      className="c-avatar-img"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </CRow>
                <CRow className="border-bottom">
                  <CCol md={12} className="text-center mt-4">
                    <h5>John Doe</h5>
                  </CCol>
                  <CCol md={12} className="text-center">
                    <p>Chartered Accountant</p>
                  </CCol>
                  <CCol md={12} className="text-center">
                    <p>
                      Hey there! I am Chartered Accountant with a 4+ years of
                      experience.
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
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default ExpertProfile;

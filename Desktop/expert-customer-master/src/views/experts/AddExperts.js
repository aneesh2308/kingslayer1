import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CInvalidFeedback,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";
import axios from "axios";
import React, { useState } from "react";
import { adminAuthToken, apiEndpoint as API_ENDPOINT } from "../../config";

const AddExperts = () => {
  //state to manage field inputs
  const [input, setInput] = useState({
    //change the object
    personalDetails: {
      firstname: "",
      lastname: "",
      gender: "",
      mobile: "",
      email: "",
    },
    addressDetails: {
      city: "",
      fullAddress: "",
    },
    qualification: {
      degree: "",
      qualificationDD: "",
      yearOfComplition: "",
    },

    professionalDetails: {
      nameOfCurrentOrgBusiness: "",
      yearOfExperience: "",
      expertise: "",
    },

    profileDetails: {
      registrationNumber: "",
      gstNo: "",
      irdaRegistration: "",
      amfiRegistration: "",
    },
  });

  //state to manage validation feedback
  const [error, setError] = useState({
    firstname: false,
    lastname: false,
    gender: false,
    mobile: false,
    city: false,
    yearOfExperience: false,
    registrationNumber: false,
    gstNo: false,
    degree: false,
    qualificationDD: false,
    nameOfCurrentOrgBusiness: false,
    expertise: false,
    email: false,
    fullAddress: false,
    yearOfComplition: false,
    irdaRegistration: false,
    amfiRegistration: false,
  });

  function handleValidation(event) {
    let name = event.target.name;
    let value = event.target.value;

    var regex = /\d/g;
    if (
      name === "firstname" ||
      name === "lastname" ||
      name === "qualificationDD" ||
      name === "city" ||
      name === "fullAddress" ||
      name === "irdaRegistration" ||
      name === "amfiRegistration"
    ) {
      if (regex.test(value)) {
        setError((prevValue) => {
          return { ...prevValue, [name]: true };
        });
      } else {
        setError((prevValue) => {
          return {
            ...prevValue,
            [name]: false,
          };
        });
        setInput((prevValue) => {
          return {
            ...prevValue,
            personalDetails: { ...prevValue.personalDetails, [name]: value },
            addressDetails: { ...prevValue.addressDetails, [name]: value },
            qualification: { ...prevValue.qualification, [name]: value },
            professionalDetails: {
              ...prevValue.professionalDetails,
              [name]: value,
            },
            profileDetails: { ...prevValue.profileDetails, [name]: value },
          };
        });
      }
    } else if (
      name === "registrationNumber" ||
      name === "gstNo" ||
      name === "mobile" ||
      name === "yearOfComplition"
    ) {
      if (value !== "" && !Number(value)) {
        setError((prevValue) => {
          return { ...prevValue, [name]: true };
        });
      } else {
        setError((prevValue) => {
          return { ...prevValue, [name]: false };
        });
        setInput((prevValue) => {
          return {
            ...prevValue,
            personalDetails: { ...prevValue.personalDetails, [name]: value },
            addressDetails: { ...prevValue.addressDetails, [name]: value },
            qualification: { ...prevValue.qualification, [name]: value },
            professionalDetails: {
              ...prevValue.professionalDetails,
              [name]: value,
            },
            profileDetails: { ...prevValue.profileDetails, [name]: value },
          };
        });
      }
    } else {
      if (value !== "") {
        setInput((prevValue) => {
          return {
            ...prevValue,
            personalDetails: { ...prevValue.personalDetails, [name]: value },
            addressDetails: { ...prevValue.addressDetails, [name]: value },
            qualification: { ...prevValue.qualification, [name]: value },
            professionalDetails: {
              ...prevValue.professionalDetails,
              [name]: value,
            },
            profileDetails: { ...prevValue.profileDetails, [name]: value },
          };
        });
        setError((prevValue) => {
          return { ...prevValue, [name]: false };
        });
      }
    }
  }

  function handleSubmit() {
    axios
      .post(API_ENDPOINT + "api/v1/admin/addexpert", input, {
        headers: {
          Authorization: adminAuthToken,
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
  console.log(input);
  return (
    <>
      <div className="align-center">
        <CRow>
          <CCol>
            <CCol xs="12">
              <CCard>
                <CCardHeader>Upload a .CSV file</CCardHeader>
                <CCardBody>
                  <CFormGroup row>
                    <CLabel col md={3}>
                      Upload
                    </CLabel>
                    <CCol xs="12" md="11">
                      <CInputFile custom id="custom-file-input" />
                      <CLabel htmlFor="custom-file-input" variant="custom-file">
                        Upload file...
                      </CLabel>
                    </CCol>
                  </CFormGroup>
                </CCardBody>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary">
                    {" "}
                    Submit
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol xs="12" sm="12">
              <CCard>
                <CCardHeader>Fill Expert Details</CCardHeader>
                <CCardBody>
                  <CForm>
                    <CFormGroup row className="my-0">
                      <CCol xs={6}>
                        <CFormGroup>
                          <CLabel htmlFor="firstname">First Name</CLabel>
                          <CInput
                            id="firstname"
                            name="firstname"
                            invalid={error["firstname"]}
                            placeholder="Enter your first name"
                            required
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid name
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs={6}>
                        <CFormGroup>
                          <CLabel htmlFor="lastname">Last Name</CLabel>
                          <CInput
                            id="lastname"
                            name="lastname"
                            invalid={error["lastname"]}
                            placeholder="Enter your last name"
                            required
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid name
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol xs={6}>
                        <CFormGroup>
                          <CLabel htmlFor="gender">Gender</CLabel>
                          <CSelect
                            custom
                            name="gender"
                            id="expGender"
                            invalid={error["gender"]}
                            onChange={handleValidation}
                          >
                            <option value="0">Please select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </CSelect>
                          <CInvalidFeedback>
                            Enter a valid gender
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="mobile">Phone No.</CLabel>
                          <CInput
                            name="mobile"
                            id="mobile"
                            type="text"
                            placeholder="Enter your phone number"
                            invalid={error["mobile"]}
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid Phone number
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs={6}>
                        <CFormGroup>
                          <CLabel htmlFor="email">Email-Id</CLabel>
                          <CInput
                            name="email"
                            id="email"
                            placeholder="Enter your Email-id"
                            onChange={handleValidation}
                            invalid={error["email"]}
                          />
                          <CInvalidFeedback>
                            Enter your Email-id
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs={6}>
                        <CFormGroup>
                          <CLabel htmlFor="city">City</CLabel>
                          <CInput
                            name="city"
                            id="city"
                            placeholder="Enter your city"
                            onChange={handleValidation}
                            invalid={error["city"]}
                          />
                          <CInvalidFeedback>Enter your city</CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs={6}>
                        <CFormGroup>
                          <CLabel htmlFor="degree">Qualification</CLabel>
                          <CSelect
                            custom
                            name="degree"
                            id="expQualification"
                            invalid={error["degree"]}
                            onChange={handleValidation}
                          >
                            <option value="0">Please select</option>
                            <option value="1">option 1</option>
                            <option value="2">option 2</option>
                            <option value="3">option 3</option>
                          </CSelect>
                          <CInvalidFeedback>
                            Enter a valid qualification
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="Year Of Complition">
                            Year Of Complition
                          </CLabel>
                          <CInput
                            name="yearOfComplition"
                            id="yearOfComplition"
                            type="text"
                            placeholder="Year Of Complition"
                            invalid={error["yearOfComplition"]}
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid Year Of Complition
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol xs={6}>
                        <CFormGroup>
                          <CLabel htmlFor="qualificationDD">
                            Qualification DD
                          </CLabel>
                          <CInput
                            name="qualificationDD"
                            id="qualificationDD"
                            placeholder="Enter your qualification"
                            onChange={handleValidation}
                            invalid={error["qualificationDD"]}
                          />
                          <CInvalidFeedback>
                            Enter a valid Qualification DD
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                      {/* <CCol xs={6}>
                  <CFormGroup>
                  <CLabel>
                  Qualification Proof
                </CLabel>
                <CCol xs="12" md="12">
                  <CInputFile custom id="custom-file-input" name="qualificationProof" />
                  <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Upload file...
                  </CLabel>
                </CCol>
                  </CFormGroup>
                </CCol>*/}
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="fullAddress">Address</CLabel>
                      <CInput
                        name="fullAddress"
                        id="fullAddress"
                        placeholder="Enter your Address"
                        onChange={handleValidation}
                        invalid={error["fullAddress"]}
                      />
                      <CInvalidFeedback>Enter your Address</CInvalidFeedback>
                    </CFormGroup>

                    <CFormGroup>
                      <CLabel htmlFor="nameOfCurrentOrgBusiness">
                        Current Organization/Business
                      </CLabel>
                      <CInput
                        name="nameOfCurrentOrgBusiness"
                        id="nameOfCurrentOrgBusiness"
                        placeholder="Enter your current organization or business name"
                        onChange={handleValidation}
                        invalid={error["nameOfCurrentOrgBusiness"]}
                      />
                      <CInvalidFeedback>
                        Enter a valid occupation
                      </CInvalidFeedback>
                    </CFormGroup>

                    <CFormGroup row className="my-0">
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="yearOfExperience">
                            Years Of Experience
                          </CLabel>
                          <CInput
                            name="yearOfExperience"
                            id="yearOfExperience"
                            type="Number"
                            placeholder="Enter your years of experience"
                            onChange={handleValidation}
                            invalid={error["yearOfExperience"]}
                          />
                          <CInvalidFeedback>
                            Enter a valid experience number
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="expertise">Expertise</CLabel>
                          <CSelect
                            custom
                            name="expertise"
                            id="expExpertise"
                            invalid={error["expertise"]}
                            onChange={handleValidation}
                          >
                            <option value="0">Please select</option>
                            <option value="1">option 1</option>
                            <option value="2">option 2</option>
                            <option value="3">option 3</option>
                          </CSelect>
                          <CInvalidFeedback>
                            Enter a valid expertise area
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row className="my-0">
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="registrationNumber">
                            Registration Number
                          </CLabel>
                          <CInput
                            name="registrationNumber"
                            id="registrationNumber"
                            type="text"
                            placeholder="Enter your registration number"
                            invalid={error["registrationNumber"]}
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid registration number
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="gstNo">GST Number</CLabel>
                          <CInput
                            name="gstNo"
                            id="gstNo"
                            type="text"
                            placeholder="Enter your GST number"
                            invalid={error["gstNo"]}
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid GST number
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="irdaRegistration">
                            IRDA Number
                          </CLabel>
                          <CInput
                            name="irdaRegistration"
                            id="irdaRegistration"
                            type="text"
                            placeholder="Enter your IRDA number"
                            invalid={error["irdaRegistration"]}
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid IRDA number
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>

                      <CCol xs="6">
                        <CFormGroup>
                          <CLabel htmlFor="amfiRegistration">
                            AMFI Number
                          </CLabel>
                          <CInput
                            name="amfiRegistration"
                            id="amfiRegistration"
                            type="text"
                            placeholder="Enter your AMFI number"
                            invalid={error["amfiRegistration"]}
                            onChange={handleValidation}
                          />
                          <CInvalidFeedback>
                            Enter a valid AMFI number
                          </CInvalidFeedback>
                        </CFormGroup>
                      </CCol>
                    </CFormGroup>
                    {/* <CFormGroup row className="my-0">
                <CLabel col md={3}>
                  Profile Picture
                </CLabel>
                  <CCol xs="12" md="9">
                  <CInputFile custom id="custom-file-input" />
                  <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Choose file...
                  </CLabel>
                </CCol>
              </CFormGroup>*/}
                  </CForm>
                </CCardBody>
                <CCardFooter>
                  <CButton
                    type="submit"
                    size="sm"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    {" "}
                    Submit
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default AddExperts;

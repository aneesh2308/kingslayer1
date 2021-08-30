import React, { useState, Children} from "react";
import "../Styles/ExpertRegistration.css";
import { Formik, useField , Form} from "formik";
import * as Yup from "yup";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";

const CustomFileInput = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className="Files">
      <label htmlFor={props.name}>{label}</label>

      <input className="File-input"{...field}{...props} />
       {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>):null}

    </div>
    )
}

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="fields">
      <label htmlFor={props.name}>{label}</label>
      <input className="text-input"{...field}{...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>) : null}

    </div>
  )
}
const LargeInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="large">
      <label htmlFor={props.name}>{label}</label>
      <textarea className="large-Fields"{...field}{...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>) : null}

    </div>
  )
}


export function FormikStepper({ children, ...props }) {
  const childrenArray = Children.toArray(children)
  const [Step, setStep] = useState(0);
  const currentChild = childrenArray[Step]

  function isLast() {
    return Step === childrenArray.length - 1;
  }

  return (<Formik
    {...props}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      console.log(values)
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false)
      }, 1000)
    }}
  >
    <div className="formContainer1" >
    <Form>
    {currentChild}
      <div className="buttons">
      {Step > 0 ? <Button onClick={() => setStep(s => s - 1)}> Back </Button> : null}
      {isLast() ? null : <Button onClick={() => setStep(s => s + 1)}> Next </Button>}
        {isLast() ? <Button type="submit" Link to="/home"> Submit </Button> : null}

        </div>
      </Form>
      </div>

  </Formik>)
}
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="fields">
      <label htmlFor={props.name}>{label}</label>
      <select{...field}{...props} className="text-input"/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>) : null}
    </div>
  )
}

function ExpertRegistration() {

  return (
    <>
      <h5 className="fexpertHeader"> fexpert</h5>
      <FormikStepper
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          DOB: "",
          gender: "",
          qualification: "",
          yearOfPassing: "",
          university: "",
          working: "",
          //no
          nameOfOrganisation: "",
          city: "",
          expertise: "",
          yearsOfExperience:"",
          //no
          businessDesc: "",
          //no
          experienceDesc: "",
          //no
          profilePic: "",
          identityProof: "",
          //no
          RegistrationProof: "",
          //no
          establishmentProof: "",
          location: "",
          availableFrom: "",
          availableTo: "",
          fees: "",
        }}

        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, "Must be atleast 3 characters")
            .max(15, "Must be 15 or less characters")
            .required('required'),
          lastName: Yup.string()
            .min(3, "Must be atleast 3 characters")
            .max(15, "Must be 15 or less characters")
            .required('required'),
          email: Yup.string()
            .email("Invalid Email-Id")
            .required("required"),
          mobile: Yup.number()
            .min(1000000000, "invalid number")
            .max(9999999999, "invalid number")
            .required("required"),
          DOB: Yup.date()
            .required("required"),
          gender: Yup.string()
            .oneOf(["male", "female", "others"], "Invalid Selection")
            .required("required"),
          qualification: Yup.string()
            .required('required'),
          yearOfPassing: Yup.number()
            .min(1900, "year has atleast 4 numbers")
            .max(2300,"invalid year")
            .required("required"),
            yearsOfExperience: Yup.number()
              .min(0,"cant be negative")
            .required("required"),
          university: Yup.string()
            .oneOf(["option 1", 'option 2'])
            .required("required"),
          working: Yup.string()
            .oneOf(["option 1", 'option 2'])
            .required("required"),
          nameOfOrganisation: Yup.string()
            .required('required'),
          city: Yup.string()
            .required("required"),
          expertise: Yup.string()
            .oneOf(["option 1", 'option 2'])
            .required("required"),

          identityProof: Yup.mixed()
            .required("required"),

          location: Yup.string()
            .required("required"),
          availableFrom: Yup.string()
            .required("required"),
          availableTo: Yup.string()
            .required("required"),
          fees: Yup.number()
            .required("required"),
        })}

      >

            <div>
              <h1 className="Steps" >Step1</h1>
          <div className="formpage">
            <h4 className="contentTitle">Personal Details</h4>
            <div className="Profile">
              <Avatar alt="Profile Pic" src="" style={{ width: "100px", height: "100px",marginLeft:"27px" }} />
              <CustomFileInput label="Profile Pic" name="profilePic" type="file" placeholder="your photo" />
              </div>
            <div className="content-type">
              <CustomTextInput label="First Name" name="firstName" type="text" placeholder="First Name" />
                <CustomTextInput label="Last Name" name="lastName" type="text" placeholder="Last Name" />
                <CustomTextInput label="Email" name="email" type="email" placeholder="Type your email" />
                <CustomTextInput label="Mobile NO." name="mobile" type="number" placeholder="Mobile No." />
                <CustomTextInput label="Date Of Birth" name="DOB" type="date" placeholder="dd-mm-yyyy" />
                <CustomSelect label="Gender" name="gender">
                  <option value="">Select your gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
              </CustomSelect>
            </div>
            <h4 className="contentTitle">Educational Details</h4>
            <div className="content-type">
                 <CustomTextInput label="Qualification" name="qualification" type="text" placeholder="your qualification" />
                  <CustomTextInput label="Year of passing" name="yearOfPassing" type="number" placeholder="Year of passing" />
                  <CustomSelect label="University" name="university">
                    <option value="">Select your university</option>
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
              </CustomSelect>
              </div>
            </div>
          </div>
          <div>
            <h1 className="Steps" >Step2</h1>
          <div className="formpage">
            <h4 className="contentTitle">Professional Details</h4>
            <div className="content-type">
                  <CustomSelect label="Working in/as" name="working">
                    <option value="">Working as</option>
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
                  </CustomSelect>
              <CustomTextInput label="Organization Name" name="nameOfOrganisation" type="text" placeholder="organization name if any" />
                <CustomTextInput label="City" name="city" type="text" placeholder="your city" />
                <CustomSelect label="Expertise" name="expertise">
                  <option value="">Your Expertise</option>
                  <option value="option 1">Option 1</option>
                  <option value="option 2">Option 2</option>
                </CustomSelect>
               <CustomTextInput label="Year of experience" name="yearsOfExperience" type="number" placeholder="your experience" />
            </div>
            <h4 className="contentTitle">Brief Profile</h4>
            <LargeInput label="Business Description" name="businessDesc" type="text" placeholder="your business description if any" />
                <LargeInput label="Experience Descriotion" name="experienceDesc" type="text" placeholder="your experience description if any" />
            </div>
          </div>
          <div>
            <h1 className="Steps" >Step3</h1>
          <div className="formpage">
            <h4 className="contentTitle">Professional Details</h4>
            <p>Please enter file maximum size 2MB </p>
            <p>Supported file format JPEG and PDF</p>
                <CustomFileInput label="Identity Proof" name="identityProof" type="file" />
            <CustomFileInput label="Registration Proof" name="RegistrationProof" type="file" />
            <CustomFileInput label="Establishment Proof" name="establishmentProof" type="file" />
            </div>
          </div>
          <div>
            <h1 className="Steps" >Step4</h1>
            <div className="formpage">
            <h4 className="contentTitle">Start Getting Customers</h4>
            <div className="content-type">
              <CustomTextInput label="Location" name="location" type="text" placeholder="your location" />
                <CustomTextInput label="Available from" name="availableFrom" type="time" placeholder="Available From" />
                <CustomTextInput label="Available Till" name="availableTo" type="time" placeholder="Available From" />
                <CustomTextInput label="Fees" name="fees" type="number" placeholder="Fees" />

              </div>
              </div>
              </div>




      </FormikStepper>
      </>
  );
}


export default ExpertRegistration;

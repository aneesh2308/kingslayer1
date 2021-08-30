import React, { Component } from "react";
import {adminAuthToken, apiEndpoint as API_ENDPOINT} from "../../config"
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CInput,
  CFormGroup,
  CLabel,
  CTextarea,
  CForm,
  CImg,
  CCollapse,
  CSpinner
} from "@coreui/react";
import {
  EmailIcon,
  WhatsappIcon,
  FacebookIcon,
  EmailShareButton,
  WhatsappShareButton,
  FacebookShareButton,
} from "react-share";
class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      personalDetails :null,
      accordion : -1,
      wait : true,
      data : null

    };
  }
  componentDidMount()
  {
    this.setState({wait : true})
    axios.get("http://35.223.86.66:3000/api/v1/user/dashboard/",{
      headers:{
        "Authorization" : adminAuthToken,
        "Content-Type": 'application/json',
        "Accept": "application/json"
      }
  }).then((res)=>{
        
        this.setState({data : res.data,personalDetails : res.data},()=>{console.log(this.state.data)})
        this.setState({wait : false})
    })

  }
  globalHandler=(e)=>{
    var temp,name,value
    switch(e.target.id){
      case "personalDetails" :
        console.log("i am here")
        temp =Object.assign({},this.state.personalDetails);;
        console.log(temp)
       name=e.target.name;
        console.log(name)
         value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
            personalDetails : temp
        },()=>{console.log(this.state)})
      break;

      case "addressDetails" :
        console.log("i am here")
        temp =Object.assign({},this.state.addressDetails);;
        console.log(temp)
        name=e.target.name;
        console.log(name)
        value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
          addressDetails : temp
      },()=>{console.log(this.state)})
      break;

      case "qualification" :
        console.log("i am here")
        temp =Object.assign({},this.state.qualification);;
        console.log(temp)
        name=e.target.name;
        console.log(name)
         value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
          qualification : temp
      },()=>{console.log(this.state)})
      break;

      case "professionalDetails" :
        console.log("i am here")
        temp =Object.assign({},this.state.professionalDetails);;
        console.log(temp)
         name=e.target.name;
        console.log(name)
         value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
          professionalDetails : temp
      },()=>{console.log(this.state)})
      break;

      case "profileDetails" :
        console.log("i am here")
        temp =Object.assign({},this.state.profileDetails);;
        console.log(temp)
        name=e.target.name;
        console.log(name)
         value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
          profileDetails : temp
      },()=>{console.log(this.state)})
      break;


      case "verificationDetails" :
        console.log("i am here")
        temp =Object.assign({},this.state.verificationDetails);;
        console.log(temp)
         name=e.target.name;
        console.log(name)
        value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
          verificationDetails : temp
      },()=>{console.log(this.state)})
      break;

      case "establishmentDetails" :
        console.log("i am here")
       temp =Object.assign({},this.state.establishmentDetails);;
        console.log(temp)
         name=e.target.name;
        console.log(name)
        value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
          establishmentDetails : temp
      },()=>{console.log(this.state)})
      break;

      case "inOfficeDetails" :
        console.log("i am here")
         temp =Object.assign({},this.state.inOfficeDetails);;
        console.log(temp)
         name=e.target.name;
        console.log(name)
         value=e.target.value;
        delete temp[name]
        temp[name]=value
        console.log(temp)
        this.setState({
          inOfficeDetails : temp
      },()=>{console.log(this.state)})
      break;

      default :
        console.log("do nothing")
    }
  }
  submitHandler=()=>{
    this.setState({wait : true})
    console.log("coooool")
    console.log(this.state)
    let config = {
      headers: {
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTk4OTM5MTg5MDciLCJpYXQiOjE2MDc1MTkxMjl9.oGlXDPsdmhDcbyenFW-O9PAx2XL2kMr4DhLllJ1fVPI',
        "Content-Type": 'application/json',
        "Accept": "application/json"
      }
    }
    let data={
      "firstname" : this.state.personalDetails.firstname,
      "lastname" : this.state.personalDetails.lastname,
      "mobile" : this.state.personalDetails.mobile,
      "email" : this.state.personalDetails.email,

    }
    axios.put("http://35.223.86.66:3000/api/v1/user/updateProfileDetails",data,config).then((res)=>{
          console.log("heere")
          console.log(res)
          this.setState({wait : false})
    }).catch((err)=>{
      console.log(err)
    })
  }
  render() {
      if(this.state.wait){
        return (
          <CRow style={{height : "700px"}}>
          <CCol className="col-md-1 col-sm-12 mx-auto" style={{paddingTop : "300px"}}>
                <CSpinner
                  color="bg-main"
                  style={{width:'4rem', height:'4rem',paddingTop : "40%"}}

                />
          </CCol> 
      </CRow>
        )
      }else{
          return(

            <div className="c-main">
            <CRow>
            <CCol md={8}>
              <div id="accordion">

              <CCard>
                  <CCardHeader id="headingOne">
                    <CRow>
                      <CCol className="info">
                        <div
                          block
                          color=""
                          className="text-left m-0 p-0 "
                          onClick={()=>{
                              if(this.state.accordion!=null){
                                  this.setState({accordion : null})
                              }else{
                                  this.setState({accordion : -1})
                              }
                          }}
                        >
                        <h5 className="m-0 p-0" style={{display:'inline'}}>Personal Details</h5>
                        </div>
                      </CCol>
                    </CRow>
                  </CCardHeader>
                  <CCollapse show={this.state.accordion === -1}>
                    <CCardBody>
                    <CFormGroup>
                  <CForm>
                    <CRow>
                      <CCol md={4}>
                        <CLabel>First Name</CLabel>
                        <CInput
                          type="text"
                          name="firstname"
                          id="personalDetails"
                          defaultValue={this.state.personalDetails.firstname}
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                        <CLabel>Last Name</CLabel>
                        <CInput
                          type="text"
                          name="lastname"
                          id="personalDetails"
                          defaultValue={this.state.personalDetails.lastname}
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                        <CLabel>Contact No</CLabel>
                        <CInput
                          type="text"
                          name="mobile"
                          id="personalDetails"
                          defaultValue={this.state.personalDetails.mobile}
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                    </CRow>

                    <CRow className="pt-4">
                      <CCol md={4}>
                        <CLabel>Password</CLabel>
                        <CInput
                          type="text"
                          name="password"
                          id="personalDetails"
                          defaultValue={this.state.personalDetails.password}
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                        <CLabel>Email</CLabel>
                        <CInput
                          type="text"
                          name="email"
                          id="personalDetails"
                          defaultValue={this.state.personalDetails.email}
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                      <CLabel>Gender</CLabel>
                        <CInput
                          type="text"
                          name="gender"
                          id="personalDetails"
                          defaultValue="male"
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                    </CRow>
                    <CRow className="pt-4">
                      <CCol md={4}>
                        <CLabel>Date Of Birth</CLabel>
                        <CInput
                          type="text"
                          name="dateOfBirth"
                          id="personalDetails"
                          defaultValue={this.state.personalDetails.dateOfBirth}
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                        <CLabel>Family Details</CLabel>
                        <CInput
                          type="text"
                          name="familyDetails"
                          id="personalDetails"
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                      <CCol md={4}>
                        <CLabel>Profile Link</CLabel>
                        <CInput
                          type="text"
                          name="profileLink"
                          id="personalDetails"
                          onChange={(e) => this.globalHandler(e)}
                        ></CInput>
                      </CCol>
                    </CRow>
                  </CForm>
                  </CFormGroup>
                    </CCardBody>
              </CCollapse>
            </CCard>

              </div>

          
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
                    <h5>{this.state.personalDetails.firstname} {this.state.personalDetails.lastname}</h5>
                  </CCol>
                  <CCol md={12} className="text-center">
                    <p></p>
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
        <CRow className="pl-3 pt-4">
                          <CCol lg={4}>

            <CButton color="primary" onClick={this.submitHandler}>Update Profile</CButton>
                          </CCol>
        </CRow>

      </div>
          )
      }
  }
}

export default Profile;

import React, { Component } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import axios from 'axios'
import { apiEndpoint as API_ENDPOINT, id, adminAuthToken } from "../../../config";
import { render } from "react-dom";

class EventModal extends Component{

  submitHandler=(e)=>{  
    var status=""+e.target.value;
    var data={
      "expertId": this.props.eId,
      "customerId": this.props.cId, 
      "status": status
    }
    console.log(data)
    axios.patch("http://35.223.86.66:3000/api/v1/expert/updatebooking",data,{
      headers:{
        "Authorization": adminAuthToken,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    }).then((res)=>{
        console.log(res)
    }).catch(err=>{
        console.log(err.response)
    })
  }
  render(){
      return(
        <CModal show={this.props.show} onClose={this.props.close} centered>
        <CModalHeader closeButton>
          <CModalTitle>{this.props.title}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {this.props.description}
        </CModalBody>
        <CModalFooter>
          <CButton color="success" value="accept" onClick={(e)=>this.submitHandler(e)}>Confirm Appointment</CButton>
          <CButton color="danger" onClick={this.props.close} value="reject" onClick={(e)=>this.submitHandler(e)}>
            Reject Appointment
          </CButton>
        </CModalFooter>
      </CModal>
      )
  }
}
export default EventModal

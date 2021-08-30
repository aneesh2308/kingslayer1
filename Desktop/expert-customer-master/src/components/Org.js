import React, { Component } from "react";
import Rating from "react-rating-stars-component";
import profile from "../assets/images/thumb-3.jpg";
import { adminAuthToken, apiEndpoint as API_ENDPOINT,id } from "../config";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import { Alert, AlertTitle } from "@material-ui/lab";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal, Button, Spinner } from "react-bootstrap";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CSpinner
} from "@coreui/react";

class Org extends Component {
  state={
    orgData : null,
    addOrRemove : null,
    deleteArray : [],
    Experts : null,
    wait : true,
    modal : false,
    count : 0
  }
  componentDidMount(){
    console.log(this.props.orgId)
    this.setState({wait : true})
    axios
    .get("http://35.223.86.66:3000/api/v1/user/organization-by-id?orgId="+this.props.orgId+"", {
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTkwNzQ0MTU5MTMiLCJpYXQiOjE2MDgxMDgwNjV9.wTRWekTz-yUKSSYhsOSPG08XnCh9vsEsAwDN2PxOqVM",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res)=>{
      this.setState({orgData :res.data.data[0] },()=>{})
      axios.get("http://35.223.86.66:3000/api/v1/expert/organization-get-members?id="+res.data.data[0]._id,{
        headers: {
          Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTkwNzQ0MTU5MTMiLCJpYXQiOjE2MDgxMDgwNjV9.wTRWekTz-yUKSSYhsOSPG08XnCh9vsEsAwDN2PxOqVM",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
            .then((res)=>{
                  let arr=[],finalarr=[];
                  res.data.members.map((item)=>{
                    arr.push(item);
                  })
                  console.log(arr)
                  let i,j,temparray,chunk = 2;
                  for (i = 0, j = arr.length; i < j; i += chunk) {
                    temparray = arr.slice(i, i + chunk);
                    finalarr.push(temparray);
                  }
                  this.setState({Experts :finalarr},()=>{console.log(this.state.Experts)})
                  this.setState({wait : false})
            })

    })
  }
  handleClose=()=>{
    this.setState({modal : false})
  }
  handleShow=()=>{
    this.setState({modal : true})
  }
  addOrRemove=(e)=>{
    this.setState({addOrRemove :e.target.value })
  }
  getExpId=(e)=>{
    let deleteArray=[...this.state.deleteArray];
    if(deleteArray.includes(e.target.value)){
      deleteArray = deleteArray.filter(function(item) {
        return item !== e.target.value
    })
    }else{
      deleteArray.push(e.target.value)
    }
    this.setState({deleteArray : deleteArray},()=>{
        console.log(this.state.deleteArray)
    })
  }
  removeElement=(array, elem)=> {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}
  deleteHandler=()=>{
    let arrays=this.state.Experts
    var merged = [].concat.apply([], arrays);
    console.log(merged)
    this.setState({wait : true})
    this.state.deleteArray.map((data,i)=>{
      for(let i =0;i<merged.length ; i++){
        if(merged[i]._id===data){
            merged.splice(i,1)
        }
      }
    })
    let arr=[],finalarr=[];
    merged.map((data)=>{
        arr.push(data)
    })
    let i,j,temparray,chunk = 2;
                  for (i = 0, j = arr.length; i < j; i += chunk) {
                    temparray = arr.slice(i, i + chunk);
                    finalarr.push(temparray);
                  }
    console.log(finalarr)
    this.setState({Experts : finalarr})
    this.setState({modal : false})
    this.setState({wait : false})
    this.setState({addOrRemove : "add"})
    console.log(this.state.deleteArray)
    this.state.deleteArray.map((data)=>{
        this.deleteMem(data)
    })
  }
  deleteMem=(data,i)=>{
      axios.delete("http://35.223.86.66:3000/api/v1/expert/organization/member?orgId="+this.state.orgData._id+"&expertId="+data,{
        headers: {
          Authorization: adminAuthToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res)=>{
                console.log(res)
        })
  }
  render() {
    let page,showExp;
    if(this.state.Experts){
      showExp=this.state.Experts.map((item)=>{


        return(
          <CRow className="mb-4">
          {
            item.map((data)=>{
              let checkBox=null
                if(this.state.addOrRemove==="remove"){
                    checkBox=(<CCol md={2}><input type="checkbox" value={data._id} onClick={(e)=>{this.getExpId(e)}}></input></CCol>)
                }
                return (
                      <CCol md={6}>
                      <CRow className="m-2">
                        {checkBox}
                        <CCol md={4} key={data}>
                          <img
                            src={profile}
                            style={{ borderRadius: "50%" }}
                            className="testimonial-image"
                          />
                        </CCol>
  
                        <CCol
                          xs={6}
                          md={6}
                          sm={6}
                          style={{ justifyContent: "center" }}
                        >
                          <h4 className="fw-700-black">{data.personalDetails.firstname}</h4>
                          <p>position</p>
                        </CCol>
                      </CRow>
                    </CCol>
                )
            })
          }
        </CRow>
        )
  
      })
    }else{
      showExp=(
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
      )
    }

    if(this.state.wait){
      page=(
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
      )
    }else
    {
      let hideorshow=null
      console.log(this.state.orgData.owner)
      console.log(id)
      if(this.state.orgData.owner===id){
        hideorshow=(
          <CDropdown>
          <CDropdownToggle caret className="bg-main">
            Add/Remove 
          </CDropdownToggle>
          <CDropdownMenu>
            <CButton value="add" onClick={(e)=>{this.addOrRemove(e)}}>Add expert</CButton>
            <CDropdownItem divider />
            <CButton value="remove" onClick={(e)=>{this.addOrRemove(e)}}>Remove expert</CButton>
          </CDropdownMenu>
        </CDropdown>
        )
      }else{
        hideorshow=null
      }
      page=(
        <>
      <div className="container">
        <CRow className="mb-4">
          <CCol md={4} lg={4} sm={4}>
            <img
              src={profile}
              style={{ borderRadius: "50%" }}
              className="testimonial-image"
            />
          </CCol>

          <CCol>
            <CRow className="mt-5">
              <CCol xs={8} md={8} sm={8} style={{ justifyContent: "center" }}>
                <h3 className="fw-700-black mb-3">{this.state.orgData.name}</h3>
                <p>{this.state.orgData.industry}</p>
                <p>Location</p>
              </CCol>
            </CRow>
          </CCol>
        </CRow>

        <CRow className="pt-4 mb-4">
          <h3 className="fw-700-black">About</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged
          </p>
          <CRow className="mb-1">
            <CCol md={2} className="fw-700">
              <p className="fw-700-black">Website :</p>
            </CCol>
            <CCol md={10}>
              <p>{this.state.orgData.website}</p>
            </CCol>
          </CRow>

          <CRow className="mb-1">
            <CCol md={2} className="fw-700-black">
              <p className="fw-700">Industry :</p>
            </CCol>
            <CCol md={10}>
              <p>{this.state.orgData.companyType}</p>
            </CCol>
          </CRow>

          <CRow className="mb-1">
            <CCol md={2} className="fw-700">
              <p className="fw-700-black">Company Size :</p>
            </CCol>
            <CCol md={10}>
              <p>{this.state.orgData.companySize}</p>
            </CCol>
          </CRow>

          <CRow className="pt-2">
            <CCol md={2} className="fw-700-black">
              <p className="fw-700">Address :</p>
            </CCol>
            <CCol md={10}>
              <CRow>
                <p>address 1</p>
              </CRow>
              <CRow>
                <p>address 2</p>
              </CRow>
            </CCol>
          </CRow>

          <CRow className="mb-2">
            <CCol md={2}>
              <p className="fw-700-black">Founded :</p>
            </CCol>
            <CCol md={10}>
              <p>2019</p>
            </CCol>
          </CRow>

          <CRow className="mb-2">
            <CCol md={2}>
              <p className="fw-700-black">Speciality :</p>
            </CCol>
            <CCol md={10}>
              <p>Speciality 1, Speciality 2, Speciality 3</p>
            </CCol>
          </CRow>
        </CRow>

        <CRow className="mb-2">
          <CCol md={10}>
            <h3 className="fw-700-black">Expert in this Organization</h3>
          </CCol>
          <CCol md={2}>
            <div className="mt-2">
              {hideorshow}
            </div>
          </CCol>
        </CRow>
        <div className="p-4">
          {showExp}
        </div>
        <div className="pb-5">
          <CButton className="bg-main m-2">See all expert</CButton>
          {this.state.addOrRemove==="remove" ? <CButton color="danger" onClick={this.handleShow}>Delete</CButton> : null}
        </div>
      </div>
      <Modal show={this.state.modal} onHide={this.handleClose}>
        <Modal.Body>Are you sure you want to delete this experts ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={this.deleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      </>
      )
    }
    return (
      <div>
        {page}
      </div>
    );
  }
}
export default Org;

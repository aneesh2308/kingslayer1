import CIcon from "@coreui/icons-react";
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CInput,
  CInputGroup,
  CListGroup,
  CListGroupItem,
  CRow,
  CSpinner,
} from "@coreui/react";
import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RateReviewModal from "../base/modals/RateReviewModal";

class Customers extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
      user: {},
      accordion: 0,
      hidden: true,
      records: [
        {
          // recordid: 0,
          recordName: "IT File Return",
          recordFee: 1400,
        },
        {
          // recordid: 0,
          recordName: "Tax assessment",
          recordFee: 1200,
        },
      ],
      inputRecordName: "",
      inputRecordFee: null,
      showAlert: true,
      total: 0,
      rateReviewModal: false,
      data: null,
      showData: null,
      wait: true,
      sideShowIndex: null,
    };
    this.getRecordDetails = this.getRecordDetails.bind(this);
    this.addRecordDetails = this.addRecordDetails.bind(this);
  }
  componentDidMount() {
    var config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTk5OTM3NjQyMjciLCJpYXQiOjE2MDc2ODg3NTR9.IksBKfo1Yl7yDQTxRzugiDntaE7o5TJSwlvgdM2ed7A",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    this.setState({ wait: true });
    axios
      .get(
        "http://35.223.86.66:3000/api/v1/expert/get-booking-with-user-details?expertId=5fd0cacd624f32f0f38ae11e",
        config
      )
      .then((res) => {
        this.setState({ data: res.data.customerBookings }, () => {
          console.log(this.state.data);
        });

        console.log("today");
        if (this.state.data) {
          var arr = this.state.data.map((data) => {
            if (1) {
              //add validation for status
              var x = data.date.split("-");
              console.log(x);
              var yy = parseInt(x[2]);
              var mm = parseInt(x[1]);
              var dd = parseInt(x[0]);
              var date = new Date(yy, mm - 1, dd);
              console.log(data.date);
              var todayDate = new Date();
              var difftime = todayDate.getTime() - date.getTime();
              var diff = parseInt(difftime / (1000 * 3600 * 24));
              console.log(diff);
              if (diff === 0) {
                //do day validation
                return data;
              }
            }
          });
          let filtered = arr.filter(function (x) {
            return x !== undefined;
          });
          this.setState({ showData: filtered }, () => {
            console.log(this.state.showData);
          });
          this.setState({ wait: false });
        }
      });
  }
  buttonHandler = (e) => {
    var arr;
    switch (e.target.value) {
      case "all":
        arr = this.state.data.map((data) => {
          if (1) {
            //add validation for status
            return data;
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });
        this.setState({ showData: filtered });
        break;
      case "today":
        console.log("today");
        arr = this.state.data.map((data) => {
          if (1) {
            //add validation for status

            var x = data.date.split("-");
            console.log(x);
            var yy = parseInt(x[2]);
            var mm = parseInt(x[1]);
            var dd = parseInt(x[0]);
            var date = new Date(yy, mm - 1, dd);
            console.log(data.date);
            var todayDate = new Date();
            var difftime = todayDate.getTime() - date.getTime();
            var diff = parseInt(difftime / (1000 * 3600 * 24));
            console.log(diff);
            if (diff === 0) {
              //do day validation
              return data;
            }
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });
        this.setState({ showData: filtered });
        break;
      case "recent":
        arr = this.state.data.map((data) => {
          if (1) {
            var x = data.date.split("-");
            console.log(x);
            var yy = parseInt(x[2]);
            var mm = parseInt(x[1]);
            var dd = parseInt(x[0]);
            var date = new Date(yy, mm - 1, dd);
            console.log(data.date);
            var todayDate = new Date();
            var difftime = todayDate.getTime() - date.getTime();
            var diff = parseInt(difftime / (1000 * 3600 * 24));
            console.log(diff);
            if (diff > 0) {
              return data;
            }
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });
        this.setState({ showData: filtered });
        break;
      default:
        console.log("do nothing");
    }
  };

  getRecordDetails(event) {
    const { name, value } = event.target;
    console.log(name, ": ", value);
    name === "recordName"
      ? this.setState((prevState) => {
          return {
            ...prevState,
            inputRecordName: value,
          };
        })
      : this.setState((prevState) => {
          return {
            ...prevState,
            inputRecordFee: value,
          };
        });
  }

  addRecordDetails() {
    let dummyRecords = this.state.records;
    //console.log("First: ", this.state);
    let sum = 0;
    if (
      this.state.inputRecordName === "" ||
      this.state.inputRecordFee === null
    ) {
      this.setState((prevState) => {
        return {
          ...prevState,
          showAlert: false,
        };
      });
    } else {
      dummyRecords.push({
        recordName: this.state.inputRecordName,
        recordFee: this.state.inputRecordFee,
      });
      this.state.records.map((item) => {
        console.log(typeof item["recordFee"]);
        return (sum += Number(item["recordFee"]));
      });
      this.setState((prevState) => {
        return {
          ...prevState,
          records: [...dummyRecords],
          hidden: true,
          inputRecordName: "",
          inputRecordFee: "",
          total: sum,
        };
      });
    }
    console.log("State: ", this.state.records);
  }

  handleClose = (arg) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        rateReviewModal: false,
      };
    });
  };
  handleItemSelect = (data) => {
    console.log(":here");
    this.setState({ wait: true });
    this.setState({ sideShowIndex: data }, () => {
      this.setState({ wait: false });
      sessionStorage.setItem("expchat", data.customerId._id);
      console.log(this.state.sideShowIndex);
    });
  };
  render() {
    var show, showSideDetails;
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
      if (this.state.showData.length !== 0) {
        show = this.state.showData.map((data, index) => {
          if (data != null) {
            var x = data;
            return (
              <CListGroupItem
                onClick={() => {
                  this.handleItemSelect(data);
                }}
              >
                <CRow>
                  <CCol xs={4} lg={5} md={5} className="p-2">
                    <CRow>
                      <p>{data.startTime}</p>
                    </CRow>
                    <CRow>
                      <p>{data.date}</p>
                    </CRow>
                  </CCol>
                  <CCol xs={8} lg={7} md={7}>
                    <CRow>
                      <h5>{data.customerId.firstname}</h5>
                    </CRow>
                    <CRow>
                      <p>{data.description}</p>
                    </CRow>
                  </CCol>
                </CRow>
              </CListGroupItem>
            );
          } else {
            return null;
          }
        });
      } else {
        console.log("i am hereee");
        show = (
          <p className="text-center mt-4">You have no appointment today</p>
        );
      }
      if (this.state.sideShowIndex === null) {
        showSideDetails = (
          <CCol
            md="9"
            className="m-0 text-center"
            style={{ backgroundColor: "white", minHeight: "90vh" }}
          >
            <p>No data</p>
          </CCol>
        );
      } else {
        showSideDetails = (
          <CCol
            md="9"
            className="m-0"
            style={{ backgroundColor: "white", minHeight: "90vh" }}
          >
            <CRow className="pl-2 pt-2">
              <CCol md={4}>
                {/* <div className="c-avatar">
      <CImg
        src={"../../../public/avatars/6.jpg"}
        className="c-avatar-img"
        alt="admin@bootstrapmaster.com"
      />
    </div> */}
                <h2>{this.state.sideShowIndex.customerId.firstname}</h2>
              </CCol>
              <CCol md={4} className="pt-2">
                <CIcon name="cil-phone" width={17} />
                <span className="m-2 pl-1">
                  {this.state.sideShowIndex.customerId.mobile}
                </span>
              </CCol>
              {/* <CCol md={3} className="text-center">
          <RatingWidget />
        </CCol> */}
              <CCol md={2} className="">
                <CButton
                  color="primary"
                  onClick={() => this.setState({ rateReviewModal: true })}
                >
                  Rate Customer
                </CButton>
                <CCol md={1}>
                  <Link to="/exp-chat" params={{ cool: "/chat" }}>
                    Cool
                  </Link>
                </CCol>
              </CCol>
            </CRow>
            <CRow className="pl-2 pb-2 border-bottom">
              <CCol md={4}>
                <p>{this.state.sideShowIndex.description}</p>
              </CCol>
              <CCol md={4} className="">
                <CIcon name="cil-envelope-closed" width={17} />
                <span className=" m-2 pl-1">
                  {this.state.sideShowIndex.customerId.email}
                </span>
              </CCol>
            </CRow>
            {/* records history */}
            <CCard className="mt-5">
              <CCardHeader id="headingOne">
                <CRow>
                  <CCol md="2" className="m-0 text-center">
                    <p className="p-0 m-0">{this.state.sideShowIndex.date}</p>
                  </CCol>
                  <CCol md="8" className="info">
                    <div block color="" className="text-left m-0 p-0 ">
                      <span className="text-muted">Appointment with</span>
                      <h6 className="m-0 p-0" style={{ display: "inline" }}>
                        {" "}
                        {this.state.user["name"]}
                      </h6>
                      <p className="mb-0">
                        {this.state.sideShowIndex.startTime} for 30 mintues
                      </p>
                    </div>
                  </CCol>
                  <CCol md="2" className="text-right">
                    {/* <CButton color="success">Invoice</CButton> */}
                    <CButton color="warning" variant="outline">
                      Add Record
                    </CButton>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCollapse show={this.state.accordion === 0}>
                <CCardBody>
                  <CRow className="border-bottom mt-3">
                    <CCol md={8}>
                      <h5>Records</h5>
                    </CCol>
                    <CCol md={4} className="text-right">
                      <h5>Fees</h5>
                    </CCol>
                  </CRow>
                  <CRow className="mt-4 border-bottom">
                    <CCol md={8}>
                      <p>{this.state.sideShowIndex.customerId.firstname}</p>
                    </CCol>
                    <CCol md={4} className="text-right">
                      <p>Rs. 200</p>
                    </CCol>
                  </CRow>
                  <CRow hidden={this.state.hidden} className="mt-3">
                    <CCol md={7}>
                      <CInputGroup className="mb-3">
                        <CInput
                          name="recordName"
                          type="text"
                          placeholder="Record name"
                          autoComplete="Record name"
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={3} className="text-right">
                      <CInputGroup className="mb-3">
                        <CInput
                          name="recordFee"
                          type="text"
                          placeholder="Fee"
                          autoComplete="fee"
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={1} className="text-center">
                      <CButton color="success" name="add">
                        <CIcon name="cil-note-add" />
                      </CButton>
                    </CCol>
                    <CCol md={1} className="text-center">
                      <CButton
                        color="danger"
                        onClick={() => this.setState({ hidden: true })}
                      >
                        <CIcon name="cil-delete" width={20} />
                      </CButton>
                    </CCol>
                    <CCol md="12" className="text-center">
                      <CAlert color="primary" hidden={this.state.showAlert}>
                        Please provide record details
                      </CAlert>
                    </CCol>
                  </CRow>
                  <CRow className="mt-3 ">
                    <CCol md={8}>
                      <h3>Total</h3>
                    </CCol>
                    <CCol md={4} className="text-right">
                      <h3>Rs. 200 </h3>
                    </CCol>
                  </CRow>
                </CCardBody>
                <CCardFooter>
                  <CButton color="primary">Download Invoice</CButton>
                </CCardFooter>
              </CCollapse>
            </CCard>
          </CCol>
        );
      }
      return (
        <div>
          <CRow>
            <CCol xs="3" className="p-0">
              <h2 className="p-2 text-center">Customers</h2>
              <CRow className="text-center mt-2 mb-2">
                <CCol xs="4">
                  <Button
                    variant="link"
                    value="today"
                    onClick={(e) => this.buttonHandler(e)}
                  >
                    Today
                  </Button>
                </CCol>
                <CCol xs="4">
                  <Button
                    variant="link"
                    value="recent"
                    onClick={(e) => this.buttonHandler(e)}
                  >
                    Recent
                  </Button>
                </CCol>
                <CCol xs="4">
                  <Button
                    variant="link"
                    value="all"
                    onClick={(e) => this.buttonHandler(e)}
                  >
                    All
                  </Button>
                </CCol>
              </CRow>
              <CListGroup>{show}</CListGroup>
            </CCol>
            {showSideDetails}
          </CRow>
          <RateReviewModal
            show={this.state.rateReviewModal}
            close={this.handleClose}
            name={this.state.user.name}
          />
        </div>
      );
    }
  }
}

export default Customers;

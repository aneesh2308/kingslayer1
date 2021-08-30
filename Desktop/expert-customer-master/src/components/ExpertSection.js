import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CSpinner,
} from "@coreui/react";
import { useMediaQuery } from "react-responsive";
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from "@material-ui/lab";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Rating from "react-rating-stars-component";
import profile from "../assets/images/thumb-3.jpg";
import Org from "../components/Org";
import { apiEndpoint as API_ENDPOINT } from "../config";
import HeroSection from "../components/HeroSection";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 200, maxWidth: 750 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 750, maxWidth: 992 })
  return isMobile ? children : null
}

export default class ExpertSection extends Component {
  constructor(props) {
    super();
    this.state = {
      search_value: "Expert",
      experts: [],
      org: [],
      firstname: "",
      expertName: "",
      location: "",
      specialization: [],
      date: new Date(),
      slot: null,
      selectedDate: null,
      wait: true,
      texthide: true,
      desc: "",
      startTime: "",
      endTime: "",
      expertId: "",
      succsess: false,
      subSpec: [],
      full_info: null,
      middle:null,
    };
  }
  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(max-width: 990px)").addListener(handler);
  }
  x;
  y;
  expertName = "";
  city = (sessionStorage.getItem("city") === null) ? "":sessionStorage.getItem("city");
  specialization = (sessionStorage.getItem("special") === null) ? "":sessionStorage.getItem("special");;
  subSpecialization = "";
  location = [
    {
      city: "Mumbai",
    },
    {
      city: "Ahemdabad",
    },
    {
      city: "Kolkata",
    },
    {
      city: "Jaipur",
    },
    {
      city: "Chennai",
    },
    {
      city: "Delhi",
    },
  ];

  componentDidMount() {
    console.log('I was triggered during componentDidMount');
    console.log("this is the window city " + this.city);
    console.log("this is the window special " + this.special);
    
    if (this.state.search_value === "Expert") {
      this.setState({ wait: true });
      axios
        .get(API_ENDPOINT + "api/v1/user/getexperts", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwMzYwMDZ9.cyyjrNvlotCxdtVWSIiiOIohaqTga5v0t2RA6E0S5R0",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res.data.data);
          console.log("Status", res.data.data.verified);
          this.setState({ wait: false });
          let expertData = res.data.data.map((item) => {
            console.log("Status: ", item.verified);
            if (item.verified) {
              return {
                expertName: item.personalDetails.firstname,
                location: item.addressDetails.city,
                expertType: item.professionalDetails.specialization,
                experience: item.professionalDetails.yearOfExperience,
                firmName: item.professionalDetails.nameOfCurrentOrgBusiness,
              };
            }
          });
          this.setState((prevState) => {
            return {
              ...prevState,
              experts: expertData,
            };
          });
        });

      axios
        .get(API_ENDPOINT + "api/v1/user/getexpertspec", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwMzYwMDZ9.cyyjrNvlotCxdtVWSIiiOIohaqTga5v0t2RA6E0S5R0",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          let spec = res.data.data.map((item) => {
            return {
              specialization: item.specialization,
              subSpecialization: item.subSpecializations,
            };
          });
          this.setState((prevState) => {
            return {
              ...prevState,
              specialization: spec,
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });

      let x = this.state.specialization.map((i) => i.subSpecialization);
      console.log("Initial: ", x);
      x.forEach((i) => {
        console.log(i);
        this.setState({ subSpec: [...i] });
      });
    }
    let config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTkwNzQ0MTU5MTMiLCJpYXQiOjE2MDgxMDgwNjV9.wTRWekTz-yUKSSYhsOSPG08XnCh9vsEsAwDN2PxOqVM",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .get(
        "http://35.223.86.66:3000/api/v1/expert/organization?orgName=",
        config
      )
      .then((res) => {
        this.setState({ org: res.data });
      });
      this.searchExpert();
  }
  handleBooking = (e) => {
    this.setState({ succsess: false });
    var id = e.target.value;
    console.log(id);
    this.setState({ modal: true });
    this.setState({ expertId: id });

    //console.log(e.target.value)
    axios
      .get(
        "http://35.223.86.66:3000/api/v1/user/appointment?expertId=5fd0cacd624f32f0f38ae11e",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIrOTE3MDIwNjY2NzQ2IiwiaWF0IjoxNjA5MjI2NTE2fQ.kiIcrLT9XoIUCVkx9B8xY6gK3uQalhxjLkDvFGbJA2g",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ slot: res.data });
      })
      .catch((err) => {
        console.log(err.body);
      });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };
  dateChanger = (date) => {
    this.setState({ date: date });
    console.log(this.state.date);
  };

  gettime = (e) => {
    /*put data by axios*/
    this.setState({ texthide: false });
    var string = e.target.value;
    string = string.split(" ");
    var stringArray = new Array();
    for (var i = 0; i < string.length; i++) {
      stringArray.push(string[i]);
    }
    this.setState({ startTime: stringArray[0] });
    this.setState({ endTime: stringArray[1] });
  };

  desHandler = (e) => {
    var text = e.target.value;
    this.setState({ desc: text });
  };
  bookApppintment = () => {
    var dd = String(this.state.date.getDate()).padStart(2, "0");
    var mm = String(this.state.date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.state.date.getFullYear();
    var strdate = dd + "-" + mm + "-" + yyyy;
    var data = {
      expertId: "5ff2fcf79e43c8692bf44b9a",
      customerId: "5fc8f2c6f16be46a84fd6f1f",
      date: strdate,
      slotTime: this.state.startTime,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      description: this.state.desc,
      status: "actives",
      followUp: "taken",
    };
    this.setState({ wait: true });
    axios
      .post(API_ENDPOINT + "api/v1/user/bookappointment", data, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTk4OTM5MTg5MDciLCJpYXQiOjE2MDk1MjIyMTJ9.YnIVgjj0aiMMXz-OHhjFETXXFZJoFqciULt2Blf6-eU",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        this.setState({ wait: false, succsess: true, texthide: true });
        setInterval(() => {
          this.setState({ succsess: true });
        }, 1000);
        this.setState({ succsess: false });
        this.closeModal();
        console.log(res);
      });
  };
  searchExpert = () => {
    console.log('Parameters: ',this.expertName, this.city, this.specialization);
    axios
      .get(
        API_ENDPOINT +
          `api/v1/user/findExpert?firstname=${this.expertName}&city=${this.city}&specialization=${this.specialization}&subSpecialization=${this.subSpecialization}`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDgwMzYwMDZ9.cyyjrNvlotCxdtVWSIiiOIohaqTga5v0t2RA6E0S5R0",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        let expData = res.data.message.map((item) => {
          return {
            expertName: item.personalDetails.firstname,
            location: item.addressDetails.city,
            expertType: item.professionalDetails.specialization,
            experience: item.professionalDetails.yearOfExperience,
            firmName: item.professionalDetails.nameOfCurrentOrgBusiness,
          };
        });
        this.setState((prevState) => {
          return {
            ...prevState,
            experts: expData,
          };
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  searchExpert1 = () => {
    var i=0
    if(i===0){
      console.log("this is the function i");
      this.searchExpert();
      i=i+1;
      console.log("this is after the function i");
    }
  }
  searchOrg = (e) => {
    console.log(e.target.value);
    let config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTkwNzQ0MTU5MTMiLCJpYXQiOjE2MDgxMDgwNjV9.wTRWekTz-yUKSSYhsOSPG08XnCh9vsEsAwDN2PxOqVM",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .get(
        "http://35.223.86.66:3000/api/v1/user/organization-by-name?orgName=" +
          e.target.value,
        config
      )
      .then((res) => {
        this.setState({ org: res.data }, () => {
          console.log(this.state.org);
        });
      });
  };
  get12hTime = (str) => {
    var h = str.substring(0, 3);
    var amorpm = parseInt(h) > 12 ? "pm" : "am";
    var hou = parseInt(h) % 12 || 12;
    var time = "" + hou + ":" + str.substring(3, 5) + "" + amorpm;
    //console.log(time)
    return time;
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  search_value_fun = (e) => {
    this.setState({ search_value: e.target.value }, () => {
      console.log(this.state.search_value);
    });
  };
  handleClick = (e) => {
    console.log(e.target.value);
    this.setState({ full_info: e.target.value });
  };
  render() {
    console.log(this.state);
    var dd = String(this.state.date.getDate()).padStart(2, "0");
    var mm = String(this.state.date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.state.date.getFullYear();
    var strdate = dd + "-" + mm + "-" + yyyy;
    var showSlot;
    if (this.state.wait) {
    } else {
      if (this.state.slot) {
        showSlot = this.state.slot.map((data) => {
          // do str validation like 04 or 4
          if (1) {
            var arr = [],
              finalarr = [];
            var size = data.slots.length;
            data.slots.map((slot) => {
              arr.push(slot);
            });
            var i,
              j,
              temparray,
              chunk = 3;
            for (i = 0, j = arr.length; i < j; i += chunk) {
              temparray = arr.slice(i, i + chunk);
              finalarr.push(temparray);
            }
            var show = finalarr.map((data) => {
              return (
                <div className="row mb-3">
                  {data.map((subdata) => {
                    var str = "" + subdata.startTime + " " + subdata.endTime;
                    //console.log(subdata.status)
                    var todayDate = new Date();
                    var day = todayDate.getDate();
                    var month = todayDate.getMonth();
                    var year = todayDate.getFullYear();
                    var date = new Date(
                      year,
                      month,
                      day,
                      parseInt(subdata.startTime),
                      0,
                      0,
                      0
                    );
                    var diff = todayDate.getTime() - date.getTime();
                    console.log(diff / (1000 * 3600 * 24));
                    console.log(typeof diff);
                    var cmp = 0.0;
                    // console.log(day,month,year)
                    if (subdata.status === "booked" || diff > cmp) {
                      return (
                        <div className="col-md-4">
                          <Button
                            variant="outline-primary"
                            value={str}
                            onClick={(e) => this.gettime(e)}
                            style={{ fontSize: "12.5px" }}
                            disabled
                          >
                            {this.get12hTime(subdata.startTime)}-
                            {this.get12hTime(subdata.endTime)}
                          </Button>
                        </div>
                      );
                    } else {
                      return (
                        <div className="col-md-4">
                          <Button
                            variant="outline-primary"
                            value={str}
                            onClick={(e) => this.gettime(e)}
                            style={{ fontSize: "12.5px" }}
                          >
                            {this.get12hTime(subdata.startTime)}-
                            {this.get12hTime(subdata.endTime)}
                          </Button>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            });
            return show;
          }
        });
      }
    }

    var modal = (
      <Modal show={this.state.modal} onHide={this.closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-5">
            <div className="col-md-5">
              <Calendar value={this.state.date} onClickDay={this.dateChanger} />
            </div>
            <div className="col-md-7">
              <h4>Available Slots:</h4>
              {showSlot}
              <div className="row">
                {this.state.texthide ? null : (
                  <div>
                    {" "}
                    <label>Description</label>
                    <br />{" "}
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => this.desHandler(e)}
                    ></input>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-success" onClick={this.bookApppintment}>
            Book Appointment
          </Button>
          <Button variant="primary" onClick={this.closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
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
      let showData;
      if (this.state.full_info !== null) {
        console.log(this.state.full_info);
        showData = <Org orgId={this.state.full_info} />;
      } else {
        if (this.state.search_value === "Expert") {
          if (this.state.experts.length !== 0) {
            showData = this.state.experts.map((item, index) => {
              if (item) {
                return (
                  <div className=" container-fluid pb-5" key={index}>
                    <div className="container">
                      <div className="row justify-content-start">
                        <div className="col-lg-2  col-3">
                          <img
                            alt="expert_img"
                            src={profile}
                            className="expert-image "
                          />
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                          <div className="row">
                            <div className="col-lg-12">
                              <h4 className="m-0 fw-700">
                                {this.capitalizeFirstLetter(item.expertName)}
                              </h4>
                              <span className="text-muted">
                                {item.expertType}
                              </span>
                              <p className="text-muted m-0">
                                {item.experience} years
                              </p>
                              <Rating value={5} edit={false} />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="row">
                            <div className="col-lg-6 col-6 ">
                              <p className="mt-2 mb-0">
                                {item.firmName === undefined
                                  ? this.capitalizeFirstLetter(item.location)
                                  : this.capitalizeFirstLetter(item.firmName) +
                                    " " +
                                    this.capitalizeFirstLetter(item.location)}
                              </p>
                              <p>Charges: Rs. 500</p>
                            </div>
                            <div className="col-lg-6 col-6">
                              <p className="mt-2 mb-0">Next available at</p>
                              <p>Date and time</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="row">
                            <div className="col-lg-12 col-6 p-1 d-grid gap-2">
                              <button className="btn bg-main brad-0">
                                Video consultation
                              </button>
                            </div>
                            <div className="col-lg-12 col-6 p-1 d-grid gap-2">
                              <button
                                className="btn bg-main brad-0"
                                value={item._id}
                                onClick={(e) => this.handleBooking(e)}
                              >
                                Book appointment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            });
          } else {
            showData = <h5 className="text-center p-4 mb-4">No data found</h5>;
          }
        } else {
          if (this.state.org.data) {
            showData = this.state.org.data.map((item, index) => {
              return (
                <div className=" container-fluid pb-5" key={index}>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-2  col-3">
                        <img
                          alt="expert_img"
                          src={profile}
                          className="expert-image "
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-6">
                        <div className="row">
                          <div className="col-lg-12">
                            <h4 className="m-0 fw-700">
                              {this.capitalizeFirstLetter(item.orgUserName)}
                            </h4>
                            <span className="text-muted">
                              {item.companyType}
                            </span>
                            <p className="text-muted m-0">{item.website}</p>
                            <Rating value={5} edit={false} />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="row">
                          <div className="col-lg-6 col-6 ">
                            <p className="mt-2 mb-0">
                              Members :{item.members.length}
                            </p>
                            <p>Size:{item.companySize}</p>
                          </div>
                          <div className="col-lg-6 col-6">
                            <button
                              className="btn bg-main brad-0"
                              value={item._id}
                              onClick={(e) => this.handleClick(e)}
                            >
                              Go to profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            });
          } else {
            showData = <p className="text-center p-5">No data found</p>;
          }
        }
      }
      var list = (
        <>
        <Desktop>
          {modal}
          {this.state.succsess ? (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Appointment Book Successfully
            </Alert>
          ) : null}
          <div className="container-fluid bg-main pt-5 pb-5">
            <div className="container">
              <div className="row justify-content-center text-center">
                <h3 className="fw-700 mb-4">Search an Expert</h3>
                <div className="col-lg-2 col p-0">
                  <Autocomplete
                    disableClearable
                    clearOnEscape
                    freeSolo
                    id="location"
                    name="location"
                    onChange={(event, value) => {
                      
                      this.city = value.city;
                      this.searchExpert();
                    }}
                    //onChange={this.searchExpert}
                    options={this.location}
                    getOptionLabel={(option) => option.city}
                    style={{ width: "100%", backgroundColor: "white", justifyContent:"center"  }}
                    
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="location"
                        label="Location"
                        
                        onChange={(event) => {
                          this.city = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"

                      />
                    )}
                  />
                </div>
                <div className="col-lg-2 col">
                  <Autocomplete
                    disableClearable
                    freeSolo
                    clearOnEscape
                    id="specialization"
                    name="specialization"
                    value={this.specialization}
                    //onChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      //console.log('SPec: ', value)
                      this.specialization = value;
                      this.searchExpert();
                      this.y = this.state.specialization
                        .filter(
                          (item) => this.specialization === item.specialization
                        )
                        .map((item) =>
                          item.subSpecialization.map((i) => i.subSpecialization)
                        );

                      // console.log("Changed: ", this.y);

                      this.setState({ subSpec: [].concat.apply([], this.y) });
                    }}
                    options={this.state.specialization.map(
                      (item) => item.specialization
                    )}
                    //getOptionLabel={(option) => option.subSpecialization.subSpecialization}
                    style={{ width: "100%", backgroundColor: "white" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="specialization"
                        label="Specialization"
                        onChange={(event) => {
                          this.specialization = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                      />
                    )}
                  />
                </div>
                <div className="col-lg-2 col p-0">
                  <Autocomplete
                    disabled={this.specialization ? false : true}
                    disableClearable
                    freeSolo
                    id="sub-specialization"
                    name="sub-specialization"
                    //nChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      this.subSpecialization = value;
                      this.searchExpert();
                    }}
                    options={this.state.subSpec}
                    //getOptionLabel={(option) => option.subSpecialization}
                    style={{ width: "100%", backgroundColor: "white" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="sub-specialization"
                        label="Sub Specialization"
                        onChange={(event) => {
                          this.subSpecialization = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                      />
                    )}
                  />
                </div>

                <div className="col-lg-6 col d-flex justify-content-start">
                  <div
                    className="pt-2"
                    style={{ height: "px", backgroundColor: "#EBEDEF" }}>
                    <CDropdown>
                      <CDropdownToggle caret className="button-nav">
                        {this.state.search_value}
                      </CDropdownToggle>
                      <CDropdownMenu>
                        <CButton
                          value="Expert"
                          onClick={(e) => {
                            this.search_value_fun(e);
                          }}
                        >
                          Expert
                        </CButton>
                        <CDropdownItem divider />
                        <CButton
                          value="Org"
                          onClick={(e) => {
                            this.search_value_fun(e);
                          }}
                        >
                          Org
                        </CButton>
                      </CDropdownMenu>
                    </CDropdown>
                  </div>

                  <div className="ml-1">
                    <TextField
                      disableClearable
                      label={
                        this.state.search_value === "Expert"
                          ? "Expert Name"
                          : "Org"
                      }
                      name="expertName"
                      
                      aria-label="Search"
                      onChange={(event) => {
                        if (this.state.search_value === "Expert") {
                          this.expertName = event.target.value;
                          this.searchExpert();
                        } else {
                          this.searchOrg(event);
                        }
                      }}
                      variant="filled"
                      style={{ width: "100%", backgroundColor: "white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" container-fluid pb-5">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-1 col-2 offset-md-1">
                  <button className="btn bg-light">
                    <span className="text-main fw-700">Sort </span>
                  </button>
                </div>
                <div className="col-lg-1 col-2">
                  <button className="btn btn-light">
                    <span className="text-main fw-700">Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {console.log("Show Data: ", showData)}
          {showData.length > 0 ? showData : <h5>No expert found</h5>}
          </Desktop>            
        </>
      );
      var list1 = (
        <>
        <Tablet>
          {modal}
          {this.state.succsess ? (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Appointment Book Successfully
            </Alert>
          ) : null}
          <div className="container-fluid bg-main pt-5 pb-5">
            <div className="container">
                <h3 className="fw-700 mb-4 text-center">Search an Expert</h3>
                <div className="col-lg-2 col p-0 ">
                <div className="row justify-content-center text-center">
                  <Autocomplete
                    disableClearable
                    clearOnEscape
                    freeSolo
                    id="location"
                    name="location"
                    onChange={(event, value) => {
                      this.city = value.city;
                      this.searchExpert();
                    }}
                    //onChange={this.searchExpert}
                    options={this.location}
                    getOptionLabel={(option) => option.city}
                    style={{ width: "100%", backgroundColor: "#17345f" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="location"
                        label="Location"
                        onChange={(event) => {
                          this.city = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                        style={{ marginTop:"1%", width: "100%", backgroundColor: "white" }}
                      />
                    )}
                  />
                  <br />
                  <Autocomplete
                    disableClearable
                    freeSolo
                    clearOnEscape
                    id="specialization"
                    name="specialization"
                    //onChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      //console.log('SPec: ', value)
                      this.specialization = value;
                      this.searchExpert();

                      this.y = this.state.specialization
                        .filter(
                          (item) => this.specialization === item.specialization
                        )
                        .map((item) =>
                          item.subSpecialization.map((i) => i.subSpecialization)
                        );

                      // console.log("Changed: ", this.y);

                      this.setState({ subSpec: [].concat.apply([], this.y) });
                    }}
                    options={this.state.specialization.map(
                      (item) => item.specialization
                    )}
                    //getOptionLabel={(option) => option.subSpecialization.subSpecialization}
                    style={{ width: "100%", backgroundColor: "#17345f" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="specialization"
                        label="Specialization"
                        onChange={(event) => {
                          this.specialization = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                        style={{ marginTop:"1%", width: "100%", backgroundColor: "white" }}
                      />
                    )}
                  />
                  <Autocomplete
                    disabled={this.specialization ? false : true}
                    disableClearable
                    freeSolo
                    id="sub-specialization"
                    name="sub-specialization"
                    //nChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      this.subSpecialization = value;
                      this.searchExpert();
                    }}
                    options={this.state.subSpec}
                    //getOptionLabel={(option) => option.subSpecialization}
                    style={{width: "100%", backgroundColor: "#17345f" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="sub-specialization"
                        label="Sub Specialization"
                        onChange={(event) => {
                          this.subSpecialization = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                        style={{ marginTop:"1%", width: "100%", backgroundColor: "white" }}
                      />
                    )}
                  />
                  <br />

                  <div
                    className="pt-2" >
                    <CDropdown>
                      <CDropdownToggle caret className="button-nav" style={{ height: "px", width: "100%"}}>
                        {this.state.search_value}
                      </CDropdownToggle>
                      <CDropdownMenu style={{ height: "px", width: "100%"}}>
                        <CButton
                          value="Expert"
                          style={{ marginTop:"1%", height: "px", width: "100%"}}
                          onClick={(e) => {
                            this.search_value_fun(e);
                          }}
                        >
                          Expert
                        </CButton>
                        <CDropdownItem divider />
                        <CButton
                          value="Org"
                          style={{ marginTop:"1%", height: "px", width: "100%"}}
                          onClick={(e) => {
                            this.search_value_fun(e);
                          }}
                        >
                          Org
                        </CButton>
                      </CDropdownMenu>
                    </CDropdown>
                    </div>

                  <br />
                  <TextField
                    disableClearable
                    label={
                      this.state.search_value === "Expert"
                        ? "Expert Name"
                        : "Org"
                    }
                    name="expertName"
                    aria-label="Search"
                    onChange={(event) => {
                      if (this.state.search_value === "Expert") {
                        this.expertName = event.target.value;
                        this.searchExpert();
                      } else {
                        this.searchOrg(event);
                      }
                    }}
                    variant="filled"
                    style={{ marginTop:"2%",height: "px", width: "92%", backgroundColor: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" container-fluid pb-5">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-1 col-2 offset-md-1">
                  <button className="btn bg-light">
                    <span className="text-main fw-700">Sort </span>
                  </button>
                </div>
                <div className="col-lg-1 col-2">
                  <button className="btn btn-light">
                    <span className="text-main fw-700">Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {console.log("Show Data: ", showData)}
          {showData.length > 0 ? showData : <h5>No expert found</h5>}
          </Tablet>
        </>
      );
      var list2 = (
        <>
        <Mobile>
          {modal}
          {this.state.succsess ? (
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Appointment Book Successfully
            </Alert>
          ) : null}
          <div className="container-fluid bg-main pt-5 pb-5">
            <div className="container">
                <h3 className="fw-700 mb-4 text-center">Search an Expert</h3>
                <div className="col-lg-2 col p-0 ">
                <div className="row justify-content-center text-center">
                  <Autocomplete
                    disableClearable
                    clearOnEscape
                    freeSolo
                    id="location"
                    name="location"
                    onChange={(event, value) => {
                      this.city = value.city;
                      this.searchExpert();
                    }}
                    //onChange={this.searchExpert}
                    options={this.location}
                    getOptionLabel={(option) => option.city}
                    style={{ width: "100%", backgroundColor: "#17345f" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="location"
                        label="Location"
                        onChange={(event) => {
                          this.city = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                        style={{ marginTop:"1%", width: "100%", backgroundColor: "white" }}
                      />
                    )}
                  />
                  <br />
                  <Autocomplete
                    disableClearable
                    freeSolo
                    clearOnEscape
                    id="specialization"
                    name="specialization"
                    value={this.specialization}
                    //onChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      //console.log('SPec: ', value)
                      this.specialization = value;
                      this.searchExpert();

                      this.y = this.state.specialization
                        .filter(
                          (item) => this.specialization === item.specialization
                        )
                        .map((item) =>
                          item.subSpecialization.map((i) => i.subSpecialization)
                        );

                      // console.log("Changed: ", this.y);

                      this.setState({ subSpec: [].concat.apply([], this.y) });
                    }}
                    options={this.state.specialization.map(
                      (item) => item.specialization
                    )}
                    //getOptionLabel={(option) => option.subSpecialization.subSpecialization}
                    style={{ width: "100%", backgroundColor: "#17345f" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="specialization"
                        label="Specialization"
                        onChange={(event) => {
                          this.specialization = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                        style={{ marginTop:"1%", width: "100%", backgroundColor: "white" }}
                      />
                    )}
                  />
                  <Autocomplete
                    disabled={this.specialization ? false : true}
                    disableClearable
                    freeSolo
                    id="sub-specialization"
                    name="sub-specialization"
                    //nChange={(event, value) => this.searchExpert(event, value)}
                    onChange={(event, value) => {
                      this.subSpecialization = value;
                      this.searchExpert();
                    }}
                    options={this.state.subSpec}
                    //getOptionLabel={(option) => option.subSpecialization}
                    style={{width: "100%", backgroundColor: "#17345f" }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        name="sub-specialization"
                        label="Sub Specialization"
                        onChange={(event) => {
                          this.subSpecialization = event.target.value;
                          this.searchExpert();
                        }}
                        variant="filled"
                        style={{ marginTop:"1%", width: "100%", backgroundColor: "white" }}
                      />
                    )}
                  />
                  <br />

                  <div
                    className="pt-2" >
                    <CDropdown>
                      <CDropdownToggle caret className="button-nav" style={{ height: "px", width: "100%"}}>
                        {this.state.search_value}
                      </CDropdownToggle>
                      <CDropdownMenu style={{ height: "px", width: "100%"}}>
                        <CButton
                          value="Expert"
                          style={{ marginTop:"1%", height: "px", width: "100%"}}
                          onClick={(e) => {
                            this.search_value_fun(e);
                          }}
                        >
                          Expert
                        </CButton>
                        <CDropdownItem divider />
                        <CButton
                          value="Org"
                          style={{ marginTop:"1%", height: "px", width: "100%"}}
                          onClick={(e) => {
                            this.search_value_fun(e);
                          }}
                        >
                          Org
                        </CButton>
                      </CDropdownMenu>
                    </CDropdown>
                    </div>

                  <br />
                  <TextField
                    disableClearable
                    label={
                      this.state.search_value === "Expert"
                        ? "Expert Name"
                        : "Org"
                    }
                    name="expertName"
                    aria-label="Search"
                    onChange={(event) => {
                      if (this.state.search_value === "Expert") {
                        this.expertName = event.target.value;
                        this.searchExpert();
                      } else {
                        this.searchOrg(event);
                      }
                    }}
                    variant="filled"
                    style={{ marginTop:"2%",height: "px", width: "97%", backgroundColor: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" container-fluid pb-5">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-lg-1 col-2 offset-md-1">
                  <button className="btn bg-light">
                    <span className="text-main fw-700">Sort </span>
                  </button>
                </div>
                <div className="col-lg-1 col-2">
                  <button className="btn btn-light">
                    <span className="text-main fw-700">Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {console.log("Show Data: ", showData)}
          {showData.length > 0 ? showData : <h5>No expert found</h5>}
          </Mobile>
        </>
      );
    }
    return(
      <>
    {list}
    {list1}
    {list2}
    </>
    );
  }
}
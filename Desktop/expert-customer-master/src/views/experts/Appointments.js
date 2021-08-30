import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CSpinner,
} from "@coreui/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { FaPenAlt } from "react-icons/fa";
import AppointmentSlotModal from "../base/modals/AppointmentSlotModal";
import EventModal from "../base/modals/EventModal";

class Appointments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wait: false,
      open: false,
      date: null,
      showData: [],
      events: [],
      eventExpert: null,
      eventCustomer: null,
      eventModal: false,
      eventTitle: "",
      eventDesc: "",
      slotModal: false,
      expertId: "",
      customerId: "",
      todayCount: null,
      waitingCount: null,
      engageCount: null,
      doneCount: null,
    };
  }
  timeConverter = (str) => {
    var arr = str.split(":");

    var hr = parseInt(arr[0]);
    var min = arr[1]; // gives the value in 24 hours format
    var AmOrPm = hr >= 12 ? "pm" : "am";
    hr = hr % 12 || 12;
    return hr + ":" + min + " " + AmOrPm;
  };
  countHandler = () => {
    //for waiting

    var arr = this.state.data.map((data) => {
      if (1) {
        //add validation for status
        var x = data.date.split("-");
        // console.log(x);
        var yy = parseInt(x[2]);
        var mm = parseInt(x[1]);
        var dd = parseInt(x[0]);
        var time = data.startTime;
        var timearr = time.split(":");
        var hr = timearr[0];
        var min = timearr[1];
        var date = new Date(yy, mm - 1, dd, hr, min, 0, 0);
        //console.log(data.date);
        var todayDate = new Date();
        var timediff = todayDate.getTime() - date.getTime();

        if (
          date.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0) &&
          timediff <= 0
        ) {
          return data;
        }
      }
    });
    var filtered = arr.filter(function (x) {
      return x !== undefined;
    });

    var no = filtered.length;
    this.setState({ waitingCount: no });

    // for done

    var arr = this.state.data.map((data) => {
      if (1) {
        //add validation for status
        var x = data.date.split("-");
        // console.log(x);
        var yy = parseInt(x[2]);
        var mm = parseInt(x[1]);
        var dd = parseInt(x[0]);
        var time = data.endTime;
        var timearr = time.split(":");
        var hr = timearr[0];
        var min = timearr[1];
        var date = new Date(yy, mm - 1, dd, hr, min, 0, 0);
        var todayDate = new Date();
        var timediff = ((todayDate.getTime() - date.getTime()) / 1000) * 60;

        if (
          date.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0) &&
          timediff >= 0
        ) {
          return data;
        }
      }
    });
    var filtered = arr.filter(function (x) {
      return x !== undefined;
    });
    var no = filtered.length;
    this.setState({ doneCount: no });

    // for engage
    var arr = this.state.data.map((data) => {
      if (1) {
        //add validation for status
        var x = data.date.split("-");
        // console.log(x);
        var yy = parseInt(x[2]);
        var mm = parseInt(x[1]);
        var dd = parseInt(x[0]);

        var time1 = data.startTime;
        var timearr = time1.split(":");
        var starthr = timearr[0];
        var startmin = timearr[1];

        var time2 = data.endTime;
        timearr = time2.split(":");
        var endhr = timearr[0];
        var endmin = timearr[1];

        var enddate = new Date(yy, mm - 1, dd, endhr, endmin, 1, 1);
        var date = new Date(yy, mm - 1, dd, starthr, startmin, 0, 0);

        var diffMin = ((enddate.getTime() - date.getTime()) / 1000) * 60; //giving slotTime

        var todayDate = new Date();
        var timediff = ((todayDate.getTime() - date.getTime()) / 1000) * 60; //giving diff between now and slotTime

        if (
          date.getTime() < todayDate.getTime() &&
          todayDate.getTime() < enddate.getTime()
        ) {
          return data;
        }
      }
    });
    var filtered = arr.filter(function (x) {
      return x !== undefined;
    });

    var no = filtered.length;
    this.setState({ engageCount: no });
  };
  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  handleEventClick = (arg) => {
    /*  var x=arg.event.id
      var expid=this.state.events.map((data)=>{
          
            if(data.id===x){
                return data.expertId
            }
      })
      var cid=this.state.events.map((data)=>{
          
        if(data.id===x){
            return data.customerId
        }
    })
    console.log((expid,cid))*/

    this.setState((prevState) => {
      return {
        ...prevState,
        eventTitle: arg.event.title,
        eventDesc: arg.event.extendedProps.description,
        eventExpert: arg.event.extendedProps.expertId,
        eventCustomer: arg.event.extendedProps.customerId,
        eventModal: !false,
      };
    });
  };

  handleCreateSlot = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        slotModal: !false,
      };
    });
  };
  handleClose = (arg) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        eventModal: false,
        slotModal: false,
      };
    });
  };

  handleAdd = (value) => {
    this.setState({ events: [...this.state.events, value] });
  };

  header = {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridDay,timeGridWeek",
  };

  events = [
    { id: 1, title: "event 3", date: "2020-11-05", description: "Lecture" },
    {
      id: 2,
      title: "",
      start: new Date("26-11-2020 03:24"),
      end: new Date("November 26, 2020 04:24"),
      description: "Duplicate",
    },
    {
      date: "26-11-2020",
      description: "want consultation on employees salary",
      end: new Date("2020-11-26 1:00"),
      id: "5fd885f63826a64e542cdc17",
      start: new Date("2020-11-26 2:00"),
      title: "Appointment",
    },
  ];

  eventDidMount(info) {
    //console.log(info.event.extendedProps);
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
        var arr = this.state.data.map((data) => {
          if (1) {
            //add validation for status
            var x = data.date.split("-");
            // console.log(x);
            var yy = parseInt(x[2]);
            var mm = parseInt(x[1]);
            var dd = parseInt(x[0]);
            var date = new Date(yy, mm - 1, dd, 0, 0, 1, 1);
            //console.log(data.date);
            var todayDate = new Date();

            if (date.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0)) {
              return data;
            }
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });

        this.setState({ showData: filtered }, () => {
          //console.log(this.state.showData);
        });
        var count = this.state.showData.length;
        this.setState({ todayCount: count });
        this.setState({ wait: false });
        this.countHandler();
      });
    /*console.log('requesting')
    axios.get(API_ENDPOINT + "api/v1/expert/getbookings?expertId=5fc623c31fa1886fb6a74ac4", {
      headers:{
        "Authorization": adminAuthToken,
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    })
    .then((res) => {
      //console.log('Response',res.data);
      let appointments = res.data.booking.map((item) => {
       
        let eid=item.expertId;
        let cid=item.customerId;
        console.log(item.customerId,eid)
        let date = item.date.split("-").reverse().join("-");
        let sTime = date +' '+item.startTime
        let eTime = date + ' '+ item.endTime
        return {
          id: item._id,
          title: "Appointment",
          date: item.date,
          start: new Date(sTime),
          end: new Date(eTime),
          description: item.description,
          expertId :eid,
          customerId :cid
        }
      })
      this.setState({events: appointments})
    })
    .catch((err) => console.log(err))*/
  }
  buttonHandler = (e) => {
    var arr;
    switch (e.target.value) {
      case "done":
        console.log("done");
        var arr = this.state.data.map((data) => {
          if (1) {
            //add validation for status
            var x = data.date.split("-");
            // console.log(x);
            var yy = parseInt(x[2]);
            var mm = parseInt(x[1]);
            var dd = parseInt(x[0]);
            var time = data.endTime;
            var timearr = time.split(":");
            var hr = timearr[0];
            var min = timearr[1];
            var date = new Date(yy, mm - 1, dd, hr, min, 0, 0);
            //console.log(data.date);
            var todayDate = new Date();
            var timediff = ((todayDate.getTime() - date.getTime()) / 1000) * 60;
            //console.log(timediff);
            //console.log(timediff);

            if (
              date.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0) &&
              timediff >= 0
            ) {
              return data;
            }
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });

        this.setState({ showData: filtered }, () => {
          //console.log(this.state.showData);
        });
        break;
      case "today":
        var arr = this.state.data.map((data) => {
          if (1) {
            //add validation for status
            var x = data.date.split("-");
            // console.log(x);
            var yy = parseInt(x[2]);
            var mm = parseInt(x[1]);
            var dd = parseInt(x[0]);
            var date = new Date(yy, mm - 1, dd, 0, 0, 1, 1);
            //console.log(data.date);
            var todayDate = new Date();

            if (date.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0)) {
              return data;
            }
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });

        this.setState({ showData: filtered }, () => {
          //console.log(this.state.showData);
        });
        break;
      case "waiting":
        var arr = this.state.data.map((data) => {
          if (1) {
            //add validation for status
            var x = data.date.split("-");
            // console.log(x);
            var yy = parseInt(x[2]);
            var mm = parseInt(x[1]);
            var dd = parseInt(x[0]);
            var time = data.startTime;
            var timearr = time.split(":");
            var hr = timearr[0];
            var min = timearr[1];
            var date = new Date(yy, mm - 1, dd, hr, min, 0, 0);
            //console.log(data.date);
            var todayDate = new Date();
            var timediff = todayDate.getTime() - date.getTime();

            if (
              date.setHours(0, 0, 0, 0) === todayDate.setHours(0, 0, 0, 0) &&
              timediff <= 0
            ) {
              return data;
            }
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });

        this.setState({ showData: filtered }, () => {
          //console.log(this.state.showData);
        });

        break;
      case "engage":
        var arr = this.state.data.map((data) => {
          if (1) {
            //add validation for status
            var x = data.date.split("-");
            // console.log(x);
            var yy = parseInt(x[2]);
            var mm = parseInt(x[1]);
            var dd = parseInt(x[0]);

            var time1 = data.startTime;
            var timearr = time1.split(":");
            var starthr = timearr[0];
            var startmin = timearr[1];

            var time2 = data.endTime;
            timearr = time2.split(":");
            var endhr = timearr[0];
            var endmin = timearr[1];

            var enddate = new Date(yy, mm - 1, dd, endhr, endmin, 0, 0);
            var date = new Date(yy, mm - 1, dd, starthr, startmin, 0, 0);

            var diffMin = ((enddate.getTime() - date.getTime()) / 1000) * 60; //giving slotTime

            var todayDate = new Date();
            var timediff = ((todayDate.getTime() - date.getTime()) / 1000) * 60; //giving diff between now and slotTime

            if (
              date.getTime() < todayDate.getTime() &&
              todayDate.getTime() < enddate.getTime()
            ) {
              return data;
            }
          }
        });
        var filtered = arr.filter(function (x) {
          return x !== undefined;
        });

        this.setState({ showData: filtered }, () => {
          //console.log(this.state.showData);
        });

        break;
      default:
        console.log("do nothing");
    }
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
      let data;
      if (this.state.showData.length !== 0) {
        data = this.state.showData.map((data, index) => {
          if (data != null) {
            return (
              <CListGroupItem>
                <CRow className="text-center">
                  <CCol xs={6}>
                    <CRow>
                      <p>{this.timeConverter(data.startTime)}</p>
                    </CRow>
                    <CRow>
                      <p>{data.date}</p>
                    </CRow>
                  </CCol>
                  <CCol xs={6}>
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
        data = <p>you have no appointment today</p>;
      }
      show = (
        <div className="c-main">
          <CRow>
            <CCol sm="12" md="8" className="calendar">
              <FullCalendar
                headerToolbar={this.header}
                plugins={[
                  dayGridPlugin,
                  interactionPlugin,
                  listPlugin,
                  timeGridPlugin,
                ]}
                initialView="dayGridMonth"
                dateClick={this.handleDateClick}
                events={this.state.events}
                eventClick={this.handleEventClick}
                editable={true}
                eventDidMount={this.eventDidMount}
              />
            </CCol>
            <CCol sm="12" md="4">
              <CCard>
                <CCardHeader>
                  <div className="row">
                    <div className="col-8">
                      <h5>Todays Schedule</h5>
                    </div>
                    <div className="col-4 text-right">
                      <FaPenAlt
                        onClick={this.handleCreateSlot}
                        size="1.3rem"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                </CCardHeader>
                <CCardBody>
                  <CRow className="text-center">
                    <CCol md="3">
                      <Button
                        variant="link"
                        value="today"
                        onClick={(e) => this.buttonHandler(e)}
                      >
                        Today
                      </Button>

                      <p
                        style={{
                          backgroundColor: "gray",
                          color: "white",
                          marginLeft: "18px",
                        }}
                      >
                        {this.state.todayCount}
                      </p>
                    </CCol>
                    <CCol md="3">
                      <Button
                        variant="link"
                        value="waiting"
                        onClick={(e) => this.buttonHandler(e)}
                      >
                        waiting
                      </Button>

                      <p
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          marginLeft: "18px",
                        }}
                      >
                        {this.state.waitingCount}
                      </p>
                    </CCol>
                    <CCol md="3">
                      <Button
                        variant="link"
                        value="engage"
                        onClick={(e) => this.buttonHandler(e)}
                      >
                        Engage
                      </Button>

                      <p
                        style={{
                          backgroundColor: "blue",
                          color: "white",
                          marginLeft: "18px",
                        }}
                      >
                        {this.state.engageCount}
                      </p>
                    </CCol>
                    <CCol md="3">
                      <Button
                        variant="link"
                        value="done"
                        onClick={(e) => this.buttonHandler(e)}
                      >
                        Done
                      </Button>

                      <p
                        style={{
                          backgroundColor: "green",
                          color: "white",
                          marginLeft: "18px",
                        }}
                      >
                        {this.state.doneCount}
                      </p>
                    </CCol>
                  </CRow>
                  <CListGroup>{data}</CListGroup>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
          <EventModal
            show={this.state.eventModal}
            close={this.handleClose}
            title={this.state.eventTitle}
            description={this.state.eventDesc}
            eId={this.state.eventExpert}
            cId={this.state.eventCustomer}
          />
          <AppointmentSlotModal
            show={this.state.slotModal}
            close={this.handleClose}
            title={this.state.eventTitle}
            description={this.state.eventDesc}
          />
        </div>
      );
    }
    return <div>{show}</div>;
  }
}
export default Appointments;

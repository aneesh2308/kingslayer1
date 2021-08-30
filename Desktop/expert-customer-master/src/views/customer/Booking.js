import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from '@fullcalendar/timegrid';

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CListGroup,
    CListGroupItem,
    CRow,
  } from '@coreui/react';

import EventModal from '../base/modals/EventModal';


class Appointments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      date: null,
      events: [],
      eventModal : false,
      eventTitle: '',
      eventDesc: ''
    }
  }

    handleDateClick =(arg) => {
        // alert(arg.dateStr);
    }

    handleEventClick = (arg) => {
      this.setState((prevState) => {
        return{
          ...prevState,
          eventTitle: arg.event.title,
          eventDesc: arg.event.extendedProps.description,
          eventModal: !false,
        }
      });
    }

    handleClose = (arg) => {
      this.setState((prevState) => {
        return {
          ...prevState,
          eventModal: false,
        }
      });
    };

    handleAdd = (value) => {
      this.setState({ events: [...this.state.events, value]});
    }

    header = {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridDay,timeGridWeek'
    }

     events =[
        { id: 1, title: 'event 3', date: '2020-11-05', description: 'Lecture' },
        { id: 2, title: 'duplicate', start: new Date('2020-11-22 03:24:00'), end: new Date('November 22, 2020 04:24:00'), allDay:false, overlap: false, description: 'Duplicate'},
        { title: 'event 2', date: '2020-11-15', display: 'background' },
      ]

      eventDidMount(info) {
        console.log(info.event.extendedProps);
      }

  render() {
    return (
      <div className="c-main">
      <CRow>
          <CCol sm="12" md="8" className="calendar">
          <FullCalendar
         headerToolbar={this.header}
         plugins={[ dayGridPlugin,interactionPlugin, listPlugin, timeGridPlugin ]}
         initialView="dayGridMonth"
         dateClick={this.handleDateClick}
         events={this.events}
         eventClick={this.handleEventClick}
         editable={true}
         eventDidMount={this.eventDidMount}
      />
          </CCol>
          <CCol sm="12" md="4">
          <CCard>
          <CCardHeader>
            <h5>Todays Schedule</h5>
          </CCardHeader>
          <CCardBody>
              <CRow className='text-center'>
                  <CCol md="3">
                      <h6 style={{fontSize:'11px'}}>TODAY</h6>
                      <p style={{backgroundColor:'gray', color: 'white'}}>0</p>
                  </CCol>
                  <CCol md="3" >
                  <h6 style={{fontSize:'11px'}}>WAITING</h6>
                      <p style={{backgroundColor:'red', color: 'white'}}>0</p>
                  </CCol>
                  <CCol md="3" >
                  <h6 style={{fontSize:'11px'}}>ENGAGE</h6>
                      <p style={{backgroundColor:'blue', color: 'white'}}>0</p>
                  </CCol>
                  <CCol md="3" >
                  <h6 style={{fontSize:'11px'}}>DONE</h6>
                      <p style={{backgroundColor:'green', color: 'white'}}>0</p>
                  </CCol>

              </CRow>
              <CListGroup>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCardBody>
        </CCard>
          </CCol>
      </CRow>
      <EventModal
        show={this.state.eventModal}
        close={this.handleClose}
        title={this.state.eventTitle}
        description={this.state.eventDesc}
      />

</div>
    )
  }
}
export default Appointments;

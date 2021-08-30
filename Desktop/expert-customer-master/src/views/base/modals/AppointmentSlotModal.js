import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import {adminAuthToken, apiEndpoint as API_ENDPOINT} from '../../../config';

const AppointmentSlotModal = (props) => {
  const [startTime, handleStartTime] = useState(new Date());
  const [endTime, handleEndTime] = useState(new Date());
    
  //console.log('Start: ',startTime , 'End: ', endTime)

  const creatSlots = () =>{
    let date = startTime.toLocaleDateString();
    //let startT = startTime.toLocaleTimeString();
    let sTime = startTime.getHours() + ':' + startTime.getMinutes();
    let eTime = endTime.getHours() + ':' + endTime.getMinutes();
    console.log(date, sTime, eTime);

    let slot = {
        date,
        sTime,
        eTime
    }
    axios.post(API_ENDPOINT + "api/v1/expert/appointment",slot,{
        header:{
            "Authorization" : adminAuthToken
        }
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })

  }
  return (
    <CModal show={props.show} onClose={props.close} centered>
      <CModalHeader closeButton>
        <h4>Select your operating time</h4>
      </CModalHeader>
      <CModalBody>
        <div className="row">
          <div className="col-6">
              <h5>Start Time</h5>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker value={startTime} onChange={handleStartTime} />
    </MuiPickersUtilsProvider>
          </div>
          <div className="col-6">
              <h5>End Time</h5>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker value={endTime} onChange={handleEndTime} />
    </MuiPickersUtilsProvider>
          </div>
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="primary" onClick={creatSlots}>Create Slots</CButton>{" "}
        <CButton color="light" onClick={props.close}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default AppointmentSlotModal;

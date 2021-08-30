import React, {useState, useEffect} from "react";
import {
  CCol,
  CRow,
  CContainer,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CDropdownDivider,
} from "@coreui/react";

import CIcon from "@coreui/icons-react"
import { Link } from 'react-router-dom'

const Modal = (props) => {

  //destructure props
  const { details } = props;

  //convert object entries to arrays
  let data = Object.entries(details);

  //extract the id
  let recordId = data[0][1];
  console.log('ID:', recordId);
  //state to hide buttons
  const [hidden, setHidden] = useState();

  //extrac the type
  const type = props.title;

  const profilePath = `/experts/view-experts/expert-details/${type}/${recordId}`;
  
  useEffect(()=>{
    if(props.title === 'Expert' || props.title === 'Customer' || props.title === 'Transaction'){
      setHidden(false);
    }else{
      setHidden(true);
    }
  },[])
 

  return (
    <>
      <CModal show={props.show} onClose={props.close} centered>
        <CModalHeader closeButton>{props.title}</CModalHeader>
        <CModalBody>
          <CContainer>
            <CRow>
              {data.map((item, index) => {
                return (
                  <CCol key={index} lg={6}>
                    {item[0].charAt(0).toUpperCase() + item[0].slice(1)}:{" "}
                    {item[1]}
                  </CCol>
                );
              })}
            </CRow>
          </CContainer>
        </CModalBody>
        <CModalFooter>
          <Link to={profilePath}>
          <CButton color="primary" hidden={hidden}>View</CButton>
          </Link>
          <CDropdown className="m-1 btn-group" hidden={hidden}>
            <CDropdownToggle color="primary">
              {props.title === "Transaction" ? "Share" : "Contact"} 
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem > <CIcon name="cil-envelope-closed" style={{ marginRight:"10px" }} /> Mail </CDropdownItem>
              <CDropdownDivider />
              <CDropdownItem> <CIcon name="cil-comment-square" style={{ marginRight: "10px" }} />SMS</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton color="danger" hidden={!hidden}>Delete</CButton>
          <CButton color="secondary" onClick={props.close}>
            Cancel
          </CButton>


        </CModalFooter>
      </CModal>
    </>
  );
};

export default Modal;

import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTextarea,
} from "@coreui/react";
import RatingWidget from "../../widgets/RatingWidget";

const RateReviewModal = (props) => {
  //const [modal, setModal] = useState(true)
    const[review, setReview] = useState('');
    const getReview= (event) => {
        const {name, value} = event.target;
        console.log(name, value);
        setReview(value)
    }
  return (
    <CModal show={props.show} onClose={props.close} centered>
      <CModalHeader closeButton>
        <CModalTitle>Rate the customer</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <span>Rate {props.name}</span>
        <RatingWidget />
        <p className="mb-1 mt-2">Your experience with the customer...</p>
        <CTextarea onChange={getReview} />
      </CModalBody>
      <CModalFooter>
        <CButton color="primary">Send</CButton>{" "}
        <CButton color="dark" variant="outline" onClick={props.close}>
          Cancel
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default RateReviewModal;

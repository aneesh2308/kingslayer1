import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CLabel,
  CRow,
  CTextarea,
} from "@coreui/react";
import Axios from "axios";
import React, { Component } from "react";
import { adminAuthToken } from "../config";

class DetailReview extends Component {
  constructor(props) {
    super();
    this.state = {
      hideReplyOptions: true,
      desc: "",
    };
  }
  descHandler = (e) => {
    var temp = e.target.value;
    this.setState({ desc: temp });
  };
  sendHandler = () => {
    var config = {
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    var data = {
      reply: this.state.desc,
      name: "sarvesh",
    };

    Axios.put(
      "http://35.223.86.66:3000/api/v1/expert/review?id=" + this.props.Id,
      data,
      config
    ).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="c-main">
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <h2>{this.props.Name}</h2>
              </CCardHeader>
              <CCardBody>
                <p>{this.props.Review}</p>
                <CFormGroup row hidden={this.state.hideReplyOptions}>
                  <CCol md="12">
                    <CLabel htmlFor="textarea-input">Textarea</CLabel>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="9"
                      placeholder="Content..."
                      onChange={(e) => {
                        this.descHandler(e);
                      }}
                    />
                  </CCol>
                </CFormGroup>
                <CRow className="mt-5">
                  {!this.state.hideReplyOptions ? (
                    <CCol md={1} className="text-left">
                      <CButton
                        color="dark"
                        variant="outline"
                        onClick={this.sendHandler}
                      >
                        Send
                      </CButton>
                    </CCol>
                  ) : (
                    <CCol md={1}>
                      <CButton
                        color="dark"
                        variant="outline"
                        onClick={() =>
                          this.setState({ hideReplyOptions: false })
                        }
                      >
                        Reply
                      </CButton>
                    </CCol>
                  )}
                  <CCol md={1} className="text-left">
                    <CButton color="dark" variant="outline">
                      Report
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default DetailReview;

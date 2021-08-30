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
import axios from "axios";
import React, { Component } from "react";
import { adminAuthToken } from "../config";

class DetailReview extends Component {
  constructor(props) {
    super();
    this.state = {
      hideReplyOptions: true,
      Reply: "",
      name: "",
      wait: false,
    };
  }
  handleSubmit = (e) => {
    var data = {
      reply: this.state.Reply,
      name: this.props.Name,
    };
    var id = "";
    id = e.target.value;
    console.log(data);
    var url = "http://35.223.86.66:3000/api/v1/user/review?id=" + id;
    console.log("sending..");
    axios
      .put(url, data, {
        headers: {
          Authorization: adminAuthToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Review", response);
      })
      .catch((error) => {
        console.log("Review", error);
      });
  };
  onChangeReply = (e) => {
    this.setState({
      Reply: e.target.value,
    });
  };
  render() {
    return (
      <div className="c-main">
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <CRow>
                  <CCol md="10">
                    <h4>{this.props.IdOf}</h4>
                  </CCol>

                  <CCol md="2">
                    <h6>{this.props.NoOfReplay}</h6>
                  </CCol>
                </CRow>
              </CCardHeader>
              <CCardBody>
                <p>{this.props.Review}</p>
                <CFormGroup row hidden={this.state.hideReplyOptions}>
                  <CCol md="12">
                    <CLabel
                      htmlFor="textarea-input"
                      onChange={(e) => this.onChangeReply(e)}
                    >
                      Textarea
                    </CLabel>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="9"
                      placeholder="Content..."
                      onChange={(e) => this.onChangeReply(e)}
                    />
                  </CCol>
                </CFormGroup>
                <CRow className="mt-5">
                  {!this.state.hideReplyOptions ? (
                    <CCol md={1} className="text-left">
                      <CButton
                        color="dark"
                        variant="outline"
                        value={this.props.IdMessage}
                        onClick={(e) => this.handleSubmit(e)}
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

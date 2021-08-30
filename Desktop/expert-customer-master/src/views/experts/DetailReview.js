import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CFormGroup,
  CLabel,
  CTextarea
} from "@coreui/react";


class DetailReview extends Component {
  constructor(props) {
    super();
    this.state={
        hideReplyOptions: true
    }
  }
  render() {
    console.log("cool "+this.props.state)
    return (
      <div className="c-main">
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <h2>Customer Name</h2>
              </CCardHeader>
              <CCardBody>
                <p>
                  "quia et suscipit\nsuscipit recusandae consequuntur expedita
                  et cum\nreprehenderit molestiae ut ut quas totam\nnostrum
                  rerum est autem sunt rem eveniet architecto"
                </p>
                    <CFormGroup row hidden={this.state.hideReplyOptions}>
                  <CCol md="12" >
                    <CLabel htmlFor="textarea-input">Textarea</CLabel>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Content..." 
                    />
                  </CCol>
                </CFormGroup>
                <CRow className="mt-5">
                    {!this.state.hideReplyOptions ? <CCol md={1} className="text-left">
                    <CButton color="dark" variant="outline">
                      Send
                    </CButton>
                  </CCol> : 
                    <CCol md={1}>
                    <CButton color="dark" variant="outline" onClick={()=>this.setState({hideReplyOptions: false})}>
                      Reply
                    </CButton>
                  </CCol>
                  }
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

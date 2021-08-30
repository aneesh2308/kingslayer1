import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CButton,
} from "@coreui/react";

import { Link } from "react-router-dom";

import transactionData from "../Data/TransactionData";
import SideCards from "./SideCards";
import axios from "axios";
import { adminAuthToken, apiEndpoint as API_ENDPOINT } from "../../config";

class UserDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      expertData: [],
    };
  }

  componentDidMount() {
    console.log("Component mounted");
    const { id, type } = this.props.match.params;
    if (type === "Expert") {
      axios
        .get(API_ENDPOINT + `api/v1/admin/getexpert/${id}`, {
          headers: {
            Authorization: adminAuthToken,
          },
        })
        .then((response) => {
          console.log("response", response.data);
          let data = { ...response.data.data.expert };
          this.setState({ expertData: response.data.data.expert });
          console.log(this.state.expertData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
   verify = () => {
     console.log(this.state.expertData._id);
     axios.post(API_ENDPOINT + 'api/v1/admin/verifyexpert', {
    "expertId":this.state.expertData._id
     },
       {
       headers: {
         "Authorization": adminAuthToken,
         "Content-Type": 'application/json',
         "Accept": "application/json"
       }
     })
       .then((response) => {
         console.log(response);
       }).catch((err) => {
         console.log(err);
       })
  }
  render() {
    return (
      <>
        <h2>{this.type} Profile</h2>
        <CRow>
          <CCol xs="12" sm="6" md="7">
            <CCard borderColor="info">
              <CCardHeader>{this.type} Details</CCardHeader>
              <CCardBody>
                <CRow>
                  {Object.entries(this.state.expertData).map(([key, value]) => {
                    console.log("Value: ", key, typeof value);
                    <CCol md={12}>
                      <h5>{key}</h5>
                    </CCol>;
                    if (typeof value === "object") {
                      return Object.entries(value).map(([k, val]) => {
                        console.log(val);
                        return (
                          <>
                            <CCol md={6} style={{ paddingTop: "0.8rem" }}>
                              <h5 style={{ display: "inline-block" }}>
                                {(k.charAt(0).toUpperCase() + k.slice(1))
                                  .split(/(?=[A-Z])/)
                                  .join(" ")}
                              </h5>
                              : <p style={{ display: "inline" }}>{val}</p>
                            </CCol>
                          </>
                        );
                      });
                    } else {
                      return (
                        <>
                          <CCol md={6} style={{ paddingTop: "0.8rem" }}>
                            <h5 style={{ display: "inline-block" }}>
                              {(key.charAt(0).toUpperCase() + key.slice(1))
                                .split(/(?=[A-Z])/)
                                .join(" ")}
                            </h5>
                            : <p style={{ display: "inline" }}>{value}</p>
                          </CCol>
                        </>
                      );
                    }
                  })}
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CRow>
                  <CCol md={2}>
                    <CButton
                      color="primary"
                      hidden={this.type === "Expert" ? true : false}
                      onClick={this.verify}
                    >
                      Verify
                    </CButton>
                  </CCol>
                  <CCol md={2}>
                    <CButton
                      color="danger"
                      hidden={this.type === "Expert" ? true : false}
                    >
                      Reject
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>

          <CCol xs="12" sm="6" md="5">
            <CCard borderColor="info">
              <CCardHeader>Recent Transactions</CCardHeader>
              <CCardBody>
                <CListGroup>
                  {transactionData.map((entry) =>
                    entry.id < 3 ? (
                      <SideCards
                        name={entry.customer}
                        amount={entry.amount}
                        status={entry.status}
                        date={entry.date}
                        stuff="Business Consultation for Tax Return"
                      />
                    ) : (
                        console.log("dont Post")
                      )
                  )}
                </CListGroup>
              </CCardBody>
              <CCardFooter>
                <Link to="/transactions">View More</Link>
              </CCardFooter>
            </CCard>
            <CCard borderColor="info">
              <CCardHeader>Customer Reviews</CCardHeader>
              <CCardBody>
                <CListGroup>
                  {transactionData.map((entry) =>
                    entry.id < 3 ? (
                      <SideCards
                        name={entry.customer}
                        stars={entry.stars}
                        date={entry.date}
                        stuff="Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit."
                      />
                    ) : (
                        console.log("dont Post")
                      )
                  )}
                </CListGroup>
              </CCardBody>
              <CCardFooter>
                <Link to="/ratings-reviews">View More</Link>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default UserDetails;

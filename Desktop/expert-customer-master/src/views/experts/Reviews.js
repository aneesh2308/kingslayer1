import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CSpinner,
} from "@coreui/react";
import axios from "axios";
import React, { Component } from "react";
import { adminAuthToken } from "../../config";
class Table extends Component {
  state = {
    data: null,
    wait: false,
    selecteditem: null,
  };
  componentDidMount() {
    this.setState({ wait: true });
    axios
      .get(
        "http://35.223.86.66:3000/api/v1/expert/review?reviewToID=5fc624091fa1886fb6a74ac5",
        {
          headers: {
            Authorization: adminAuthToken,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        this.setState({ data: res.data }, () => {
          console.log(this.state);
        });
        this.setState({ wait: false });
      });
  }
  fields = [
    { key: "reviewFromName", _style: { width: "20%" } },
    { key: "message", _style: { width: "80%" } },
  ];

  viewDetails = (args) => {
    this.routeChange(args);
  };

  routeChange(args) {
    let path = `/detail-review`;
    let data = this.state.selecteditem;
    this.props.history.push({
      pathname: path,
      state: { data: args },
    });
  }
  render() {
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
    }

    return (
      <div className="p-2 pt-4">
        <h2>Reviews</h2>
        <CRow style={{ marginTop: "2%" }}>
          <CCol xs="12" lg="12">
            <CCard>
              <CCardBody>
                <CDataTable
                  fields={this.fields}
                  items={this.state.data}
                  itemsPerPage={5}
                  hover
                  sorter
                  clickableRows
                  onRowClick={this.viewDetails}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default Table;

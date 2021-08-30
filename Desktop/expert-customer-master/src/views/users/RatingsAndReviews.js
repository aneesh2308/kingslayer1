import React, { Component } from "react";

import { CCol, CRow } from "@coreui/react";

import TransactionData from "../Data/TransactionData";

import Table from "../base/tables/Table";

class RatingsAndReviews extends Component {
  fields = ["id", "customer", "date", "stars"];

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12" sm="6" lg="12">
            <Table
              name="Ratings And Reviews"
              fields={this.fields}
              data={TransactionData}
            />
          </CCol>
        </CRow>
      </>
    );
  }
}

export default RatingsAndReviews;

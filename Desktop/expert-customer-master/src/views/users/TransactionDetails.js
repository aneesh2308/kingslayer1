import React, { Component } from "react";

import { CCol, CRow } from "@coreui/react";

import TransactionWidget from "../widgets/TransactionWidget";
import TransactionData from "../Data/TransactionData";
import Table from "../base/tables/Table";

class TransactionDetails extends Component {
  fields = ["id", "customer", "amount", "date", "status"];

  render() {
    return (
      <>
        <CRow>
          <TransactionWidget
            text="total funds"
            header="$1999.34"
            color="info"
          />
          <TransactionWidget
            text="funds recieved"
            header="$1999.34"
            color="success"
          />
          <TransactionWidget
            text="funds transfered"
            header="$250.78"
            color="warning"
          />
          <TransactionWidget
            text="transactions pending"
            header="$899.34"
            color="danger"
          />
          <CCol xs="12" sm="6" lg="12">
            <Table
              name="Transactions"
              fields={this.fields}
              data={TransactionData}
            />
          </CCol>
        </CRow>
      </>
    );
  }
}

export default TransactionDetails;

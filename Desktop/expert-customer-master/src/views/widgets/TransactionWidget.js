import React, { Component } from "react";

import { CCol, CWidgetIcon } from "@coreui/react";

import CIcon from "@coreui/icons-react";

class TransactionWidget extends Component {
  constructor(props) {
    super();
  }
  fields = ["id", "customer", "amount", "date", "status"];

  render() {
    return (
      <>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon
            text={this.props.text}
            header={this.props.header}
            color={this.props.color}
            iconPadding={false}
          >
            <CIcon width={24} name="cil-dollar" />
          </CWidgetIcon>
        </CCol>
      </>
    );
  }
}

export default TransactionWidget;

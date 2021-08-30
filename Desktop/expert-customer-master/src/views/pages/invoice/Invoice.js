import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CContainer,
} from "@coreui/react";

import TransactionData from "../../Data/TransactionData";
import InvoiceTable from '../../base/tables/InvoiceTable';

const TData = TransactionData.find((transct) => transct.id === 1);
console.log(TData);
const Invoice = (props) => {
  return (
    <>
      <div className="c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol xs="12" md="12">
              <CCard>
                <CCardBody>
                  <CRow className="mb-4">
                    <CCol md="6">
                      <h3>fexperts Logo</h3>
                    </CCol>
                    <CCol md="6" className="text-right">
                      <h3>INVOICE</h3>
                    </CCol>
                  </CRow>
                  <CRow className="mb-4">
                    <CCol md="4" className="text-muted">
                        <h5>Billed To</h5>
                        <p>{TData.customer}</p>
                    </CCol>
                    <CCol md="4" className="text-muted">
                        <h5>Invoice Number</h5>
                        <p>{TData.customer}</p>
                        <br/>
                        <h5>Date Of Issue</h5>
                        <p>19/04/2020</p>
                    </CCol>
                    <CCol md="4" className="text-muted text-right">
                        <h5>Invoice Total</h5>
                        <h3>Rs. {TData.amount}</h3>
                    </CCol>
                  </CRow>
                    <CRow>
                        <CCol md="12">
                            <InvoiceTable />
                        </CCol>
                    </CRow>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Invoice;

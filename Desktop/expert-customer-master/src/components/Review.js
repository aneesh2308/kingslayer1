import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
const fields = ["id", "body","userId"];
const review=(props)=>{
  return(
    <div className="c-main">
    <CRow>
      <CCol xs="12" lg="12">
        <CCard>
          <CCardHeader>
            <h2>Reviews</h2>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={props.Reviews}
              fields={fields}
              itemsPerPage={5}
              pagination
              hover
              size='lg'
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
  )
}
export default review

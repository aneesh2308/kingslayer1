import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react'

import usersData from '../../Data/UsersData'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const InvoiceTable = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
            <CCardFooter>
                <CButton color="primary">
                    Download Invoice
                </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
        </CRow>
        </>
  )}

  export default InvoiceTable;
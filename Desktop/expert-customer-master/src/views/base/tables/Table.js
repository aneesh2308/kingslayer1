import React, { useState } from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
  CDropdownDivider,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import Modal from "../modals/Modal";

const getBadge = (status) => {
  switch (status) {
    case true:
      return "success";
    case false:
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Table = (props) => {
  //state to manage the modal box
  const [modal, setModal] = useState(false);
  //state to manage modal title
  const [modalTitle, setModalTitle] = useState('');

  //state to manage modal data
  const [modalData, setModalData] = useState({
    fullname: '',
    gender: '',
    mobile: '',
    email: ''
  })
  //state to manage the expert data

  const viewDetails = (args) => {
    switch (props.name) {
      case "Experts":
        setModalData({
          id: args.id,
          fullname: args.firstname,
          gender: args.gender,
          mobile: args.mobile,
        });
        setModalTitle("Expert")
        break;
        case "Customers":
        setModalData({
          fullname: args.fullname,
          gender: args.gender,
          mobile: args.mobile,
      });
        setModalTitle("Customer")
        break;
      case "Transactions":
        setModalData({
          id: args._id,
          name: args.customer,
          created: args.createdAt,
          amount: args.amount
        });
        setModalTitle("Transaction")
        break;
      case "Ratings And Reviews":
        setModalData({
          id: args.id,
          name: args.name,
          date: args.date,
          rating: args.stars
        });
        setModalTitle("Ratings And Reviews")
        break;
      default:
        return 0;
    }
    setModal(true);
  };
  //console.log(modalData);
  const closeModal = () => {
    setModal(false);
  };
//console.log('Props.Data ', props.data);
  return (
    <>
      <CRow>
       <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader style={{ display: "flex", alignItems: "center", justifyContent:"space-between" }}>
                <h2>
                  {props.name}
                  </h2>
              <CDropdown className="m-1 btn-group">
                <CDropdownToggle color="primary">
                  Share
              </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem > <CIcon name="cil-envelope-closed" style={{ marginRight: "10px" }} /> Mail </CDropdownItem>
                  <CDropdownDivider/>
                  <CDropdownItem> <CIcon name="cil-comment-square" style={{ marginRight: "10px" }} />SMS</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.data}
                fields={props.fields}               
                itemsPerPage={5}
                pagination
                hover
                tableFilter
                sorter
                itemsPerPageSelect
                clickableRows
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
                onRowClick={viewDetails}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

 <Modal
        show={modal}
        close={closeModal}
        title={modalTitle}
        details={modalData}
      />
    </>
   
  );
};

export default Table;

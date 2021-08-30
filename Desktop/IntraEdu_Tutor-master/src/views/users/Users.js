import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CImg,
} from "@coreui/react";
import db from "../../config/fbconfig";
import { exportDataToXLSX } from "../../utils/exportData";

const Users = () => {
  const [tableFilters, setTableFilters] = useState({});

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setLoading(true);
    const users = (await db.collection("users").get()).docs;

    setUsers(
      users.map((user) => ({
        ...user.data(),
        id: user.id,
      }))
    );
    setLoading(false);
  };

  const onExportData = async () => {
    const filteredData = users
      .filter((user) => {
        for (const filterKey in tableFilters) {
          console.log(
            String(user[filterKey]).search(
              new RegExp("tableFilters[filterKey]", "i")
            )
          );
          if (
            String(user[filterKey]).search(
              new RegExp(tableFilters[filterKey], "i")
            ) >= 0
          ) {
            continue;
          } else {
            return false;
          }
        }
        return true;
      })
      .map((user) => ({
        firstName: user?.fname,
        lastName: user?.lname,
        email: user?.email,
        dob: user?.dob,
        bio: user?.bio,
        gender: user?.gender,
        phone: user?.phone,
        userImg: user?.userImg,
        country: user?.country,
        usedCoupons: user?.usedCoupons?.join(", "),
        isBlocked: user?.isBlocked,
      }));

    exportDataToXLSX(filteredData, "users");
  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <span className="font-xl">Users</span>
              <span>
                <CButton color="info" className="mr-3" onClick={onExportData}>
                  Export Data
                </CButton>
              </span>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                onTableFilterChange={(filter) => setTableFilters(filter)}
                loading={loading}
                items={users}
                fields={[
                  { key: "fname", label: "First Name" },
                  { key: "lname", label: "Last Name" },
                  { key: "email" },
                  { key: "dob" },
                  { key: "bio" },
                  { key: "gender" },
                  { key: "phone" },
                  {
                    key: "image",
                    label: "User Image",
                    sorter: false,
                    filter: false,
                  },
                ]}
                hover
                striped
                columnFilter
                sorter
                clickableRows
                scopedSlots={{
                  image: (item, index) => {
                    return (
                      <td className="py-2">
                        <CImg
                          src={item.userImg}
                          height={50}
                          width={50}
                          alt="image"
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </td>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Users;

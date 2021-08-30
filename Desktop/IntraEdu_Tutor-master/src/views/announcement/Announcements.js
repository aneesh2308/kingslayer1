import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CDataTable,
  CRow,
} from "@coreui/react";
import db from "../../config/fbconfig";
import { exportDataToXLSX } from "../../utils/exportData";
import { useHistory } from "react-router-dom";
import { getAdmin, getInstitute } from "../../utils/db_fetch";

const Announcements = () => {
  const [tableFilters, setTableFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const instituteId = localStorage.getItem("institute");

  const history = useHistory();

  const [annoucements, setAnnoucements] = useState([]);

  useEffect(() => {
    getAnnoucements();
  }, []);

  const getAnnoucements = async () => {
    setLoading(true);
    const annoucementsDoc = (
      await db
        .collection("annoucements")
        .where("institute_id", "==", instituteId)
        .get()
    ).docs;

    const resolvedAnnoucement = await Promise.all(
      annoucementsDoc.map(async (doc) => {
        const admin = await getAdmin(doc.data().created_by_admin_id);
        const institute = await getInstitute(doc.data().institute_id);

        return {
          ...doc.data(),
          id: doc.id,
          admin_name: admin?.name,
          institute: institute?.name,
          timestamp: new Date(doc.data()?.timestamp).toLocaleString(),
        };
      })
    );

    setAnnoucements(resolvedAnnoucement);
    setLoading(false);
  };

  const onExportData = async () => {
    const filteredData = annoucements
      .filter((annoucement) => {
        for (const filterKey in tableFilters) {
          console.log(
            String(annoucement[filterKey]).search(
              new RegExp("tableFilters[filterKey]", "i")
            )
          );
          if (
            String(annoucement[filterKey]).search(
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
      .map((annoucement) => ({
        admin_name: annoucement.admin_name,
        institute: annoucement.institute,
        title: annoucement.title,
        body: annoucement.body,
        timestamp: annoucement.timestamp,
      }));

    exportDataToXLSX(filteredData, "Announcements");
  };

  return (
    <>
      <CRow>
        <CCol xl={12} className="d-flex justify-content-end">
          <CButton color="info" className="mb-2 mr-2" onClick={onExportData}>
            Export Data
          </CButton>
          <CButton
            color="info"
            className="mb-2 mr-2"
            onClick={(e) => history.push("/annoucements/add")}
          >
            Add Annoucement
          </CButton>
        </CCol>
        <CCol xl={12}></CCol>
        <CCol xl={12}>
          <CCard>
            <CCardHeader color="secondary">Announcements</CCardHeader>
            <CCardBody>
              <CDataTable
                loading={loading}
                onColumnFilterChange={(e) => {
                  setTableFilters(e);
                }}
                onSorterValueChange={(e) => {
                  console.log(e);
                }}
                items={annoucements}
                fields={[
                  { key: "admin_name" },
                  { key: "institute" },
                  { key: "title" },
                  { key: "body" },
                  { key: "timestamp", label: "Created At" },
                  { key: "edit" },
                ]}
                scopedSlots={{
                  edit: (item, index) => (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          history.push(`/annoucements/edit/${item.id}`);
                        }}
                      >
                        Edit
                      </CButton>
                    </td>
                  ),
                }}
                hover
                striped
                columnFilter
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Announcements;

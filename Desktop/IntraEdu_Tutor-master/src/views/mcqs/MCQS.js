import React, { useState, useEffect } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import db from "../../config/fbconfig";
import { exportDataToXLSX } from "../../utils/exportData";
import { getAdmin, getInstitute } from "../../utils/db_fetch";
import { useHistory } from "react-router-dom";

const MCQS = () => {
  const [tableFilters, setTableFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const instituteId = localStorage.getItem("institute");
  const [mcqs, setMcqs] = useState([]);

  useEffect(() => {
    getMcqs();
  }, []);

  const getMcqs = async () => {
    setLoading(true);

    const mcqsDoc = (
      await db
        .collection("mcqTests")
        .where("institute_id", "==", instituteId)
        .get()
    ).docs;

    const resolvedMcqs = await Promise.all(
      mcqsDoc.map(async (doc) => {
        const admin = await getAdmin(doc.data().posted_by_admin_id);
        const institute = await getInstitute(doc.data().institute_id);

        return {
          ...doc.data(),
          id: doc.id,
          admin: admin?.name,
          num_mcq: doc.data()?.mcqs.length,
          institute: institute?.name,
          timestamp: new Date(doc.data()?.timestamp).toLocaleString(),
        };
      })
    );

    setMcqs(resolvedMcqs);

    setLoading(false);
  };

  const onExportData = async () => {
    const filteredData = mcqs
      .filter((mcq) => {
        for (const filterKey in tableFilters) {
          console.log(
            String(mcq[filterKey]).search(
              new RegExp("tableFilters[filterKey]", "i")
            )
          );
          if (
            String(mcq[filterKey]).search(
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
      .map((mcq) => ({
        title: mcq.title,
        admin: mcq.admin,
        num_mcq: mcq.num_mcq,
        instituition: mcq.institute,
        timestamp: mcq.timestamp,
      }));

    exportDataToXLSX(filteredData, "mcqs");
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
            onClick={(e) => history.push("/mcq/add")}
          >
            Add Mcq
          </CButton>
        </CCol>
        <CCol xl={12}></CCol>
        <CCol>
          <CCard>
            <CCardHeader color="secondary">MCQS</CCardHeader>
            <CCardBody>
              <CDataTable
                onTableFilterChange={(filter) => setTableFilters(filter)}
                loading={loading}
                items={mcqs}
                fields={[
                  { key: "title", filter: true },
                  { key: "institute", filter: true },
                  { key: "admin", filter: true },
                  { key: "num_mcq", filter: true },
                  { key: "timestamp", filter: true },
                ]}
                onRowClick={(item, index) => {
                  history.push(`/mcq/view/${item.id}`);
                }}
                hover
                striped
                columnFilter
                sorter
                clickableRows
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default MCQS;

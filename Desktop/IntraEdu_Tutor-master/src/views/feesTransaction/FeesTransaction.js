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
import { getAdmin, getInstitute, getUser } from "../../utils/db_fetch";

const FeesTransaction = () => {
  const [tableFilters, setTableFilters] = useState({});
  const [loading, setLoading] = useState(false);

  const instituteId = localStorage.getItem("institute");

  const [fees, setFees] = useState([]);

  useEffect(() => {
    getFees();
  }, []);

  const getFees = async () => {
    setLoading(true);
    const feesDoc = (
      await db
        .collection("feesTransaction")
        .where("institution_id", "==", instituteId)
        .get()
    ).docs;

    const resolvedFees = await Promise.all(
      feesDoc.map(async (doc) => {
        const admin = await getAdmin(doc.data().admin_id);
        const user = await getUser(doc.data().user_id);
        const institute = await getInstitute(doc.data().institution_id);

        return {
          ...doc.data(),
          id: doc.id,
          admin: admin?.name,
          user: user?.name,
          institute: institute?.name,
          timestamp: new Date(doc.data()?.timestamp).toLocaleString(),
        };
      })
    );

    setFees(resolvedFees);

    setLoading(false);
  };

  const onExportData = async () => {
    const filteredData = fees
      .filter((fee) => {
        for (const filterKey in tableFilters) {
          console.log(
            String(fee[filterKey]).search(
              new RegExp("tableFilters[filterKey]", "i")
            )
          );
          if (
            String(fee[filterKey]).search(
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
      .map((fee) => ({
        admin: fee.admin,
        fees: fee.fees,
        instituition: fee.instituition,
        source: fee.source,
        timestamp: fee.timestamp,
        user: fee.user,
      }));

    exportDataToXLSX(filteredData, "fees");
  };

  return (
    <>
      <CRow>
        <CCol xl={12} className="d-flex justify-content-end">
          <CButton color="info" className="mb-2 mr-2" onClick={onExportData}>
            Export Data
          </CButton>
        </CCol>
        <CCol xl={12}></CCol>
        <CCol>
          <CCard>
            <CCardHeader color="secondary">Fees Transaction</CCardHeader>
            <CCardBody>
              <CDataTable
                onTableFilterChange={(filter) => setTableFilters(filter)}
                loading={loading}
                items={fees}
                fields={[
                  { key: "institute", filter: true },
                  { key: "user", filter: true },
                  { key: "admin", filter: true },
                  { key: "source", filter: true },
                  { key: "fees", filter: true },
                  { key: "timestamp", filter: true },
                ]}
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

export default FeesTransaction;

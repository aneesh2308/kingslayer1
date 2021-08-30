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
import { getAdmin, getInstitute } from "../../utils/db_fetch";
import { useHistory } from "react-router-dom";

const Lectures = (props) => {
  const [tableFilters, setTableFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const instituteId = "u9oYfE9LNonAJaULsS35";

  const history = useHistory();

  const [lectures, setInstitutes] = useState([]);

  useEffect(() => {
    getLectures();
  }, []);

  const getLectures = async () => {
    setLoading(true);
    const lecturesDocs = (
      await db
        .collection("lectures")
        .where("institute_id", "==", instituteId)
        .get()
    ).docs;

    const resolvedInstitutes = await Promise.all(
      lecturesDocs.map(async (doc) => {
        const admin = await getAdmin(doc.data().created_by_admin_id);
        const institute = await getInstitute(doc.data().institute_id);

        return {
          ...doc.data(),
          id: doc.id,
          admin_name: admin?.name,
          institute: institute?.name,
          timestamp: new Date(doc.data()?.timestamp).toLocaleString(),
          scheduled_at_timestamp: new Date(
            doc.data()?.scheduled_at_timestamp
          ).toLocaleString(),
        };
      })
    );

    setInstitutes(resolvedInstitutes);
    setLoading(false);
  };

  const onExportData = async () => {
    const filteredData = lectures
      .filter((lecture) => {
        for (const filterKey in tableFilters) {
          console.log(
            String(lecture[filterKey]).search(
              new RegExp("tableFilters[filterKey]", "i")
            )
          );
          if (
            String(lecture[filterKey]).search(
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
      .map((lecture) => ({
        name: lecture.name,
        admin_name: lecture.admin_name,
        institute: lecture.institute,
        type: lecture.type,
        timestamp: lecture.timestamp,
        video_url: lecture.video_url,
        live_lecture_url: lecture.live_lecuture_url,
        scheduled_at_timestamp: lecture.scheduled_at_timestamp,
      }));

    exportDataToXLSX(filteredData, "Lectures");
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
            onClick={(e) => history.push("/lectures/add")}
          >
            Add Lecture
          </CButton>
        </CCol>
        <CCol xl={12}></CCol>
        <CCol xl={12}>
          <CCard>
            <CCardHeader color="secondary">Lectures</CCardHeader>
            <CCardBody>
              <CDataTable
                loading={loading}
                onColumnFilterChange={(e) => {
                  setTableFilters(e);
                }}
                onSorterValueChange={(e) => {
                  console.log(e);
                }}
                items={lectures}
                fields={[
                  { key: "name" },
                  { key: "admin_name" },
                  { key: "institute" },
                  { key: "type" },
                  { key: "timestamp", label: "Created At" },
                  { key: "scheduled_at_timestamp", label: "Scheduled At" },
                  { key: "live_lecuture_url" },
                  { key: "video_url" },
                  { key: "join" },
                ]}
                scopedSlots={{
                  join: (item, index) => (
                    <td className="py-2">
                      <CButton onClick={()=>{
                        var requestOptions = {
                          method: "GET",
                          headers: {
                            "Authorization":`Bearer ${instituteId}`,
                            "Content-Type": "application/json"
                          },
                          redirect: "follow",
                        };
                        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
                        fetch(`${apiURL}/lecture/live/${item.id}/start`, requestOptions)
                          .then((response) => response.json())
                          .then((result) => {
                            console.log(result);
                          }).catch((error) => console.log("error", error));
                          this.props.history.push({
                            pathname: '/jitsi',
                            state: item.id // your data array of objects
                          })
                          
                      }} 
                      color="info">Join</CButton>
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

export default Lectures;

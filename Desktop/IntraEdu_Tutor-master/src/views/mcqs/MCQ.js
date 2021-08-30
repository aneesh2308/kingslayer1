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

const initialState = {
  institute: "",
  admin: "",
  title: "",
  mcqs: [],
};

const MCQ = ({ match }) => {
  const id = match.params.id;

  const [tableFilters, setTableFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const [mcqs, setMcqs] = useState(initialState);

  useEffect(() => {
    if (!id) return;
    getMcqs();
  }, [id]);

  const getMcqs = async () => {
    setLoading(true);

    const mcqDoc = await db.collection("mcqTests").doc(id).get();

    const admin = await getAdmin(mcqDoc.data().posted_by_admin_id);
    const institute = await getInstitute(mcqDoc.data().institute_id);

    setMcqs({
      ...mcqDoc.data(),
      admin: admin?.name,
      institute: institute?.name,
      timestamp: new Date(mcqDoc.data()?.timestamp).toLocaleString(),
      mcqs: mcqDoc.data()?.mcqs,
    });

    setLoading(false);
  };

  const onExportData = async () => {
    const filteredData = mcqs.mcqs
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
        id: mcq.id,
        question: mcq.question,
        answer1: mcq.answers[0].answer,
        answer2: mcq.answers[1].answer,
        answer3: mcq.answers[2].answer,
        answer4: mcq.answers[3].answer,
        correctAnswer: mcq.answers.find((i) => i.is_correct).answer,
      }));

    exportDataToXLSX(filteredData, "mcq");
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
            <CCardHeader color="secondary">MCQ</CCardHeader>
            <CCardBody>
              <h6>Title: {mcqs.title}</h6>
              <h6>Instituition: {mcqs.institute}</h6>
              <h6>Admin: {mcqs.admin}</h6>
              <h6>Timestamp: {mcqs.timestamp}</h6>
            </CCardBody>
            <CCardBody>
              <CDataTable
                onTableFilterChange={(filter) => setTableFilters(filter)}
                loading={loading}
                items={mcqs.mcqs}
                fields={[
                  { key: "id", filter: true },
                  { key: "question", filter: true },
                  { key: "answer1" },
                  { key: "answer2" },
                  { key: "answer3" },
                  { key: "answer4" },
                  { key: "correctAnswer" },
                ]}
                scopedSlots={{
                  answer1: (item, index) => <td>{item.answers[0].answer}</td>,
                  answer2: (item, index) => <td>{item.answers[1].answer}</td>,
                  answer3: (item, index) => <td>{item.answers[2].answer}</td>,
                  answer4: (item, index) => <td>{item.answers[3].answer}</td>,
                  correctAnswer: (item, index) => (
                    <td>{item.answers.find((i) => i.is_correct).answer}</td>
                  ),
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

export default MCQ;

import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormGroup,
  CInput,
  CButton,
  CSpinner,
  CLabel,
} from "@coreui/react";
import db from "../../config/fbconfig";

const initialState = {
  title: "",
  created_by_admin_id: "",
  scheduled_at_timestamp: "",
  institute_id: "",
  date: "",
  time: "",
};

export const AddLecture = ({ match }) => {
  const id = match.params.id;

  const [loading, setLoading] = useState(false);
  const [lecture, setLecture] = useState(initialState);
  const instituteId = localStorage.getItem("institute");
  const adminId = localStorage.getItem("admin_id");
  useEffect(() => {}, []);

  const handleChange = (e) => {
    setLecture({
      ...lecture,
      [e.target.name]: e.target.value,
    });
  };

  const addLecture = async (e) => {
    e.preventDefault();

    if (lecture.title.trim() === "" || !instituteId) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    const lectureObject = {
      ...lecture,
      created_by_admin_id: adminId,
      institute_id: instituteId,
      scheduled_at_timestamp: new Date(
        lecture.date + " " + lecture.time
      ).getTime(),
      timestamp: Date.now(),
    };
    console.log(lectureObject);

    try {
      if (id)
        await db
          .collection("lectures")
          .doc(id)
          .update({
            ...lectureObject,
          });
      else await db.collection("lectures").add(lectureObject);
      alert(`Lecture ${id ? "updated" : "added"} successfully`);
      setLecture(initialState);
    } catch (err) {
      alert("Something Wrong");
    }

    setLoading(false);
  };

  return (
    <CCard>
      <CCardHeader>{`${id ? "Edit" : "Add"}`} Lecture</CCardHeader>
      <CCardBody>
        <CForm onSubmit={addLecture}>
          <CFormGroup>
            <CLabel>Title</CLabel>
            <CInput
              name="title"
              type="text"
              value={lecture.title}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>Time</CLabel>
            <CInput
              name="date"
              type="date"
              value={lecture.date}
              onChange={handleChange}
              placeholder="Date"
              required
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>Time</CLabel>
            <CInput
              name="time"
              type="time"
              value={lecture.time}
              onChange={handleChange}
              placeholder="Time"
              required
            />
          </CFormGroup>

          {loading ? (
            <CSpinner size="small" color="info" />
          ) : (
            <CButton type="submit" color="success" disabled={loading}>
              {`${id ? "Edit" : "Add"}`}
            </CButton>
          )}
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AddLecture;

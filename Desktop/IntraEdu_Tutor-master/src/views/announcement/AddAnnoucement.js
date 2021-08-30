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
  body: "",
  created_by_admin_id: "",
  timestamp: "",
  institute_id: "",
};

export const AddAnnoucement = ({ match }) => {
  const id = match.params.id;

  const [loading, setLoading] = useState(false);
  const [annoucement, setAnnoucement] = useState(initialState);
  const instituteId = localStorage.getItem("institute");
  const adminId = localStorage.getItem("admin_id");
  useEffect(() => {
    if (!id) return;
    getAnnoucement();
  }, [id]);

  const getAnnoucement = async () => {
    setLoading(true);
    const doc = await db.collection("annoucements").doc(id).get();

    setAnnoucement({
      ...annoucement,
      ...doc.data(),
      id: doc.id,
    });

    setLoading(false);
  };

  const handleChange = (e) => {
    setAnnoucement({
      ...annoucement,
      [e.target.name]: e.target.value,
    });
  };

  const addAnnoucement = async (e) => {
    e.preventDefault();

    if (
      annoucement.title.trim() === "" ||
      annoucement.body.trim() === "" ||
      !instituteId ||
      !adminId
    ) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    const annoucementObject = {
      ...annoucement,
      created_by_admin_id: adminId,
      institute_id: instituteId,
      timestamp: Date.now(),
    };
    console.log(annoucementObject);

    try {
      if (id)
        await db
          .collection("annoucements")
          .doc(id)
          .update({
            ...annoucementObject,
          });
      else await db.collection("annoucements").add(annoucementObject);
      alert(`Annoucement ${id ? "updated" : "added"} successfully`);
      setAnnoucement(initialState);
    } catch (err) {
      alert("Something Wrong");
    }

    setLoading(false);
  };

  return (
    <CCard>
      <CCardHeader>{`${id ? "Edit" : "Add"}`} Annoucement</CCardHeader>
      <CCardBody>
        <CForm onSubmit={addAnnoucement}>
          <CFormGroup>
            <CLabel>Title</CLabel>
            <CInput
              name="title"
              type="text"
              value={annoucement.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>Title</CLabel>
            <CInput
              name="body"
              type="text"
              value={annoucement.body}
              onChange={handleChange}
              placeholder="Body"
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

export default AddAnnoucement;

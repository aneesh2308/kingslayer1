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
  email: "",
  contact: "",
  created_by_admin_id: "",
  timestamp: "",
  institute_id: "",
};

export const AboutUs = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [aboutUs, setAboutUs] = useState(initialState);
  const instituteId = localStorage.getItem("institute");
  const adminId = localStorage.getItem("admin_id");
  useEffect(() => {
    getAboutUs();
  }, []);

  const getAboutUs = async () => {
    setLoading(true);
    const docs = (
      await db
        .collection("aboutUs")
        .where("institute_id", "==", instituteId)
        .get()
    ).docs;

    if (docs.length)
      setAboutUs({
        ...aboutUs,
        ...docs[0].data(),
        id: docs[0].id,
      });

    setLoading(false);
  };

  const handleChange = (e) => {
    setAboutUs({
      ...aboutUs,
      [e.target.name]: e.target.value,
    });
  };

  const AboutUs = async (e) => {
    e.preventDefault();

    if (
      aboutUs.email.trim() === "" ||
      aboutUs.contact.trim() === "" ||
      !instituteId ||
      !adminId
    ) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    const aboutUsObject = {
      ...aboutUs,
      created_by_admin_id: adminId,
      institute_id: instituteId,
      timestamp: Date.now(),
    };
    console.log(aboutUsObject);

    try {
      const docs = (
        await db
          .collection("aboutUs")
          .where("institute_id", "==", instituteId)
          .get()
      ).docs;

      if (docs.length) {
        docs[0].ref.update({
          ...aboutUsObject,
        });
      } else await db.collection("aboutUs").add(aboutUsObject);
      alert(`About Saved Successfully`);
      setAboutUs(initialState);
    } catch (err) {
      alert("Something Wrong");
    }

    setLoading(false);
  };

  return (
    <CCard>
      <CCardHeader>About Us</CCardHeader>
      <CCardBody>
        <CForm onSubmit={AboutUs}>
          <CFormGroup>
            <CLabel>Email</CLabel>
            <CInput
              name="email"
              type="email"
              value={aboutUs.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </CFormGroup>
          <CFormGroup>
            <CLabel>Contact</CLabel>
            <CInput
              name="contact"
              type="text"
              value={aboutUs.contact}
              onChange={handleChange}
              placeholder="Contact"
              required
            />
          </CFormGroup>

          {loading ? (
            <CSpinner size="small" color="info" />
          ) : (
            <CButton type="submit" color="success" disabled={loading}>
              Submit
            </CButton>
          )}
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AboutUs;

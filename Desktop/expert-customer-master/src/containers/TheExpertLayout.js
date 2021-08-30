import React, { useEffect } from "react";
import { TheExpertContent, TheExpertSidebar, TheFooter, TheHeader } from "./index";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import { apiEndpoint as API_ENDPOINT, adminAuthToken } from "../config";

const TheExpertLayout = () => {
  useEffect(() => {
    axios
      .get(API_ENDPOINT + "api/v1/expert/dashboard/", {
        headers: {
          "Authorization": adminAuthToken,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
      .then((response) => {
        console.log("[Dashboard]", response);
        sessionStorage.setItem('expertId', response.data.expert._id);
      })
      .catch((error) => {
        console.log("[Dashboard Error]", error);
      });
  });
  return (
    <div className="c-app c-default-layout">
      <TheExpertSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheExpertContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default withRouter(TheExpertLayout);

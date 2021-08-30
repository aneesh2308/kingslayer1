import React, { useEffect } from "react";
import { TheCustomerContent, TheCustomerSidebar, TheFooter, TheHeader } from "./index";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { apiEndpoint as API_ENDPOINT, adminAuthToken } from "../config";

const TheCustomerLayout = () => {
  useEffect(() => {
    axios
      .get(API_ENDPOINT + "api/v1/user/dashboard", {
        headers: {
          Authorization: adminAuthToken,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
      .then((response) => {
        console.log("[Dashboard]", response);
        sessionStorage.setItem("userId",response.data.user._id)
        let name=response.data.user.firstname+" "+response.data.user.lastname
        sessionStorage.setItem("useName",name)
      })
      .catch((error) => {
        console.log("[Dashboard Error]", error);
      });
  });
  return (
    <div className="c-app c-default-layout">
      <TheCustomerSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheCustomerContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default withRouter(TheCustomerLayout);

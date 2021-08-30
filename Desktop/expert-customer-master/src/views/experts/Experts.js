import axios from "axios";
import React, { Component } from "react";
import { adminAuthToken, apiEndpoint } from "../../config";
import Table from "../base/tables/Table";

const fields = ["id", "firstname", "gender", "mobile", "email", "isVerified"];

class Experts extends Component {
  constructor(props) {
    super();
    this.state = {
      expertData: [],
      personalData: [],
    };
  }

  componentDidMount() {
    axios
      .get(apiEndpoint + "api/v1/admin/getexperts", {
        headers: {
          Authorization: adminAuthToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        let personalDetails = response.data.data.map((i) => {
          return {
            ...i["personalDetails"],
            id: i["_id"],
          };
        });
        this.setState({ expertData: personalDetails });
        console.log(this.state.expertData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="c-main">
        <Table name="Experts" data={this.state.expertData} fields={fields} />;
      </div>
    );
  }
}

export default Experts;

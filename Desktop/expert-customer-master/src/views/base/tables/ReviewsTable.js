import React, { Component } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import axios from "axios";

const fields = ["id", "body", "userId"];

class ReviewsTable extends Component {
  constructor(props) {
    super();
    this.state = {
      reviews: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({ reviews: res.data });
        console.log("Reviews: ", this.state.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="c-main">
        <CRow>
          <CCol xs="12" lg="12">
            <CCard>
              <CCardHeader>
                <h2>Reviews</h2>
              </CCardHeader>
              <CCardBody>
                <CDataTable
                  items={this.state.reviews}
                  fields={fields}
                  itemsPerPage={5}
                  pagination
                  hover
                  size="lg"
                  onRowClick={true}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  }
}

export default ReviewsTable;

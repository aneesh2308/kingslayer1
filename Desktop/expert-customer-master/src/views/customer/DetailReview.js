import React, { Component } from "react";
import Review from "../../components/GeneralReview"
import axios from 'axios'
import {

  CSpinner

} from "@coreui/react";

import TextEditor from '../../components/TextEditor';
import { apiEndpoint as API_ENDPOINT, adminAuthToken } from "../../config";

class DetailReview extends Component {
  constructor(props) {
    super();
    this.state={
        hideReplyOptions: true,
        reviews : null,
        wait : true,
        name :""
    }
  }
  componentDidMount(){

    this.setState({wait : true})
    axios
    .get(API_ENDPOINT + "api/v1/user/review?reviewToID=5fc624091fa1886fb6a74ac5", {
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
    .then((response) => {
      this.setState({reviews : response.data},()=>{
          console.log(this.state)
          this.setState({wait : false})
      })
      this.setState({wait : true})
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
        this.setState({wait : false})
        this.setState({name : response.data.firstname},()=>{
            console.log(this.state)
        })
      })
      .catch((error) => {
        console.log("[Dashboard Error]", error);
      });
    })
    .catch((error) => {
      console.log("[Dashboard Error]", error);
    });
  }
  render() {
    console.log("cool "+this.props.state)
    var showList;
    if(this.state.wait===false){
      showList=(
        this.state.reviews.map((data)=>{
          var len=""+data.replies.length;
            return(
                <Review
                  key={data._id}
                  IdOf={data.reviewToID}
                  Review={data.message}
                  NoOfReplay={len}
                  IdMessage={data._id}
                  Name={this.state.name}/>
            )
        })
    )
    }else{
        showList= (

      <div className="d-flex justify-content-between align-items-center">
                  <CSpinner
        style={{width:'4rem', height:'4rem'}}
        color="primary"
        variant="gr)ow"
        />
      </div>

      )
    }
    return (
      <div className="c-main">
          {showList}
      </div>
    );
  }
}

export default DetailReview;

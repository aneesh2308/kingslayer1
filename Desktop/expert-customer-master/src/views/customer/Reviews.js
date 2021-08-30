import React, {Component} from 'react';
import ReviewsTable from '../base/tables/ReviewsTable';
import axios from 'axios'
import { apiEndpoint as API_ENDPOINT, isAdminAuth,adminAuthToken } from "../../config";
class Reviews extends Component{
  state={
      name :"",
      id: "",
      message : ""
  }
  componentDidMount(){
    axios
    .get(API_ENDPOINT + "api/v1/user/dashboard", {
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
    .then((response) => {
      this.setState({
          name : response.data.firstname,
          id : response.data._id
      })
      console.log(this.state);
    })
    .catch((error) => {
      console.log("[Dashboard Error]", error);
    });
  }
  handleReview=(e)=>{
      this.setState({
        message : e.target.value
      },()=>{
          console.log(this.state.message)
      })
  }
 handleSubmit=()=>{
  /* var data={

      "reviewFromID" : this.state.id,
      "reviewToID" : "5fc627001fa1886fb6a74ac6",
      "reviewFromName" : this.state.name,
      "message" : "ewrwerwerwerwrwrweewr",
      "rating" : "5"

   }*/
   var data={
    "reviewFromID": "5feadcafc912ebabed46b18b",
    "reviewToID": "5fc624091fa1886fb6a74ac5",
    "reviewFromName": "Sarvesh",
    "message": this.state.message,
    "rating": "5"
   }
   console.log(typeof(this.state.id),typeof(this.state.name))
    axios.post(API_ENDPOINT + "api/v1/user/review",data,{
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
          .then((res)=>{
              console.log(res)
          })
          .catch((err)=>{
              console.log(err)
          })
  }
    render(){
        return(
          <div>

                <label>Expert Id</label>
                <br></br>
                <input type="text" defaultValue="5fc624091fa1886fb6a74ac5" disabled></input>
                <br/>
                <label>Review</label>
                <br/>
                <input type="text-area" onChange={(e)=>this.handleReview(e)}/>
                <br/>
                <button onClick={this.handleSubmit}>submit</button>
          </div>


        )
    }
}

export default Reviews;

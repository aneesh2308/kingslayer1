import React, { Component} from "react";
import Table from "../base/tables/Table";
import { withRouter } from "react-router-dom";

class Customers extends Component{

  constructor(props){
    super();
    this.state={
      customerData:[]
    }
  }
  componentDidMount(){

  }
  render(){
    return <Table name="Customers" data={this.state.customerData} />;
  }
};

export default withRouter(Customers);

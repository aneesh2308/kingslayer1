import React, {Component} from 'react';
import ReviewDetails from '../components/DetailReview'
class Detail_review extends Component{

    render(){
      console.log(this.props.location.state.data._id)
      return(
          <ReviewDetails
              Review={this.props.location.state.data.message}
              Name={this.props.location.state.data.reviewFromName}
              Id={this.props.location.state.data._id}/>
      )
    }
}
export default Detail_review
